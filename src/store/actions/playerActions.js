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
export const createMatch = (match) => {
    return (dispatch,getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('matches').add({
            ...match,  
        }).then(() => {
            dispatch({type: 'CREATE_MATCH', match })
        }).catch((err) => {
            dispatch({ type: 'CREATE_MATCH_ERROR', err})
        })
        
    }
}
export const setResult = (match) => {
    return (dispatch,getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const matchId = match.id
        const t1r = match.team1Result
        const t2r = match.team2Result
        firestore.collection('matches').doc(matchId).set(
            {team1Result : t1r,
            team2Result : t2r
        },
            {merge:true}
        ).then(() => {
            dispatch({type: 'SET_RESULT', match })
        }).catch((err) => {
            dispatch({ type: 'SET_RESULT_ERROR', err})
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
export const deleteMatch = (match) => {
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('matches').doc(
            match.id
        ).delete().then(() => {
            dispatch({type: 'DELETE_MATCH', match })
        }).catch((err) => {
            dispatch({ type: 'DELETE_MATCH_ERROR', err})
        })
    }
}
export const deleteTeam = (team) => {
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').doc(
            team.id
        ).delete().then(() => {
            dispatch({type: 'DELETE_TEAM', team })
        }).catch((err) => {
            dispatch({ type: 'DELETE_TEAM_ERROR', err})
        })
    }
}

export const verifyTeam = (team) => {
    return(dispatch, getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        const teamId = team.id
        const verifyState = team.verify
        firestore.collection('users').doc(teamId).set(
            {verify: verifyState},
            {merge:true}
        ).then(() => {
            dispatch({type: 'VERIFY_CHANGE', team})
        }).catch((err) => {
            dispatch({ type: 'VERIFY_CHANGE_ERROR', err})
        })
    }
}