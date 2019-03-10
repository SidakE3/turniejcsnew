const initState = {}
const playerReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PLAYER':
        console.log('player added', action.player);
        return state;
        case 'CREATE_PLAYER_ERROR':
        console.log('create player error', action.err);
        break
        case 'DELETE_PLAYER':
        console.log('delete udaned')
        return state
        case 'DELETE_PLAYER_ERROR':
        console.log('delete nie udaned', action.err)
        return state
        case 'DELETE_TEAM':
        console.log('delete udaned')
        return state
        case 'DELETE_TEAM_ERROR':
        console.log('delete nie udaned', action.err)
        return state
        case 'DELETE_MATCH':
        console.log('delete udaned')
        return state
        case 'DELETE_MATCH_ERROR':
        console.log('delete nie udaned', action.err)
        return state
        case 'VERIFY_CHANGE':
        console.log('change udaned')
        return state
        case 'VERIFY_CHANGE_ERROR':
        console.log('change nie udaned', action.err)
        return state
        case 'CREATE_MATCH':
        console.log('match add udaned')
        return state
        case 'CREATE_MATCH_ERROR':
        console.log('match add nie udaned', action.err)
        return state
        case 'SET_RESULT':
        console.log('result setted')
        return state
        case 'SET_RESULT_ERROR':
        console.log('kurła nie działa', action.err)
        return state

        default:
        return state;
        
    }
    return state
}
export default playerReducer