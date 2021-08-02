const playersReducer = (state=[], action) => {
    switch (action.type) {
        case 'fetchPlayers':
            state = Object.values(action.payload)
            return [...state]
        default:
            return [...state]
    }
}

export default playersReducer