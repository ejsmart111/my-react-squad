import playersReducer from "./playersReducer"

const playersModalReducer = (state = {show: false, position: 'Goalkeeper', idToReplace: 0}, action) => {
    switch(action.type) {
        case 'playersModalChange':
            state.show = !state.show
            state.position = action.payload.position
            state.idToReplace = action.payload.index
            return {...state}
        default:
            return {...state}
    }
}

export default playersModalReducer