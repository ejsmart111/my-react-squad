const attackers = [
    {id: 0, name: '', team: '', position: 'Attacker', imageURL: ''},
    {id: 1, name: '', team: '', position: 'Attacker', imageURL: ''},
    {id: 2, name: '', team: '', position: 'Attacker', imageURL: ''},
]

const midfielders = [
    {id: 0, name: '', team: '', position: 'Midfielder', imageURL: ''},
    {id: 1, name: '', team: '', position: 'Midfielder', imageURL: ''},
    {id: 2, name: '', team: '', position: 'Midfielder', imageURL: ''},
]

const defenders = [
    {id: 0, name: '', team: '', position: 'Defender', imageURL: ''},
    {id: 1, name: '', team: '', position: 'Defender', imageURL: ''},
    {id: 2, name: '', team: '', position: 'Defender', imageURL: ''},
    {id: 3, name: '', team: '', position: 'Defender', imageURL: ''},
]

const goalkeeper = {name: '', team: '', position: 'Goalkeeper', imageURL: ''}

const squadReducer = (state={attackers: attackers, defenders: defenders, goalkeeper: goalkeeper, midfielders: midfielders}, action) => {
    switch (action.type) {
        case 'addToAttackers':
            const cardToReplace = state.attackers.findIndex(x => x.id === action.payload.index)
            state.attackers.splice(cardToReplace, 1, { name: action.payload.name, team: action.payload.team, position: action.payload.position, imageURL: action.payload.imageURL, id: state.attackers[cardToReplace].id })
            return {...state}
        case 'addToDefenders':
            const cardToReplaceDef = state.defenders.findIndex(x => x.id === action.payload.index)
            state.defenders.splice(cardToReplaceDef, 1, { name: action.payload.name, team: action.payload.team, position: action.payload.position, imageURL: action.payload.imageURL, id: state.defenders[cardToReplaceDef].id })
            return {...state}
        case 'addToMidfielders':
            const cardToReplaceMid = state.midfielders.findIndex(x => x.id === action.payload.index)
            state.midfielders.splice(cardToReplaceMid, 1, { name: action.payload.name, team: action.payload.team, position: action.payload.position, imageURL: action.payload.imageURL, id: state.midfielders[cardToReplaceMid].id })
            return {...state}
        case 'setKeeper':
            state.goalkeeper = action.payload
            return {...state}
        default: 
            return {...state}
    }
}

export default squadReducer