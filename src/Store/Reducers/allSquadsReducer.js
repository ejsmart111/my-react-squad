const allSquadsReducer = (state = [], action) => {
    switch (action.type) {
        case 'fetchSquads':
            state = Object.values(action.payload)
            return [...state]
        default:
            return [...state]
    }
}

export default allSquadsReducer