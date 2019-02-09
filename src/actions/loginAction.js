
export const loginAction = (credential) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        getFirebase().auth().signInWithEmailAndPassword(credential.username, credential.password).then(()=>{
            dispatch({type:'LOGIN',credential})
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR', err})
        });

    }
};