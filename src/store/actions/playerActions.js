export const createPlayer = (player) => {
    return (dispatch,getState, {getFirebase, getFirestore}) => {

        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const captainId = getState().firebase.auth.uid
        firestore.collection('players').add({
            ...player,
            captain: profile.captain,
            captainId: captainId,
            teamName: profile.teamName
        }).then(() => {
            dispatch({type: 'CREATE_PLAYER', player })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PLAYER_ERROR', err})
        })
        
    }
}
export const deletePlayer = (player) => {
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('players').doc(
            player.id
        ).delete().then(() => {
            dispatch({type: 'DELETE_PLAYER', player })
        }).catch((err) => {
            dispatch({ type: 'DELETE_PLAYER_ERROR', err})
        })
    }
}