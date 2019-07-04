const initState = {}
const playerReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PLAYER':
            return state;
        case 'CREATE_PLAYER_ERROR':
            return state;
        case 'DELETE_PLAYER':
            return state
        case 'DELETE_PLAYER_ERROR':
            return state
        case 'DELETE_TEAM':
            return state
        case 'DELETE_TEAM_ERROR':
            return state
        case 'DELETE_MATCH':
            return state
        case 'DELETE_MATCH_ERROR':
            return state
        case 'VERIFY_CHANGE':
            return state
        case 'VERIFY_CHANGE_ERROR':
            return state
        case 'CREATE_MATCH':
            return state
        case 'CREATE_MATCH_ERROR':
            return state
        case 'SET_RESULT':
            return state
        case 'SET_RESULT_ERROR':
            return state
        default:
            return state;
        
    }
}
export default playerReducer