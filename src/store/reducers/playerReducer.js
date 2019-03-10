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
        default:
        return state;
        
    }
    return state
}
export default playerReducer