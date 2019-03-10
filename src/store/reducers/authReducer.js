const initState = {
    authError: null
}
const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
            ...state,
            authError: 'Logowanie nie powiodło się' 
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
        return{
            ...state,
            authError: null
        }
        case 'SIGNOUT_SUCCESS':
            console.log('gut')
            return state
        case 'SIGNUP_SUCCESS':
        console.log('signup gut')
        return {
            ...state,
            authError: null
        }
        case 'SIGNUP_ERROR':
        console.log('signup not gut')
        return{
            ...state,
            authError: action.err.message
        }
        default:
        return state
    }
}
export default authReducer