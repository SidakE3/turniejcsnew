export const signIn = (credentials) => {
    return (dispatch,getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.LoginFormEmail,
            credentials.LoginFormPassword
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err})
        })
    }
}

export const signOut = () => {
    return (dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'})
        })
        firebase.logout();
    }
}

export const signUp = (newUser) => {
    return(dispatch,getState,{getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.LoginFormEmail,
            newUser.LoginFormPassword
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                captain: newUser.LoginFormCaptainName,
                teamName: newUser.LoginFormTeamName,
                email: newUser.LoginFormEmail
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err})
        })
    }
}