import { playersRef } from "../../config/firebase"

const playersAction = {
    fetchPlayers: () => {
        return (dispatch) => {
            playersRef.on('value', snapshot => {
                dispatch({
                    type: 'fetchPlayers',
                    payload: snapshot.val()
                })
            })
        }
    },
    playersModalChange: (payload) => {
        return dispatch => {
            dispatch({
                type: 'playersModalChange',
                payload: payload
            })
        }
    },
    addToAttackers: (player) => {
        return dispatch => {
            dispatch({
                type: 'addToAttackers',
                payload: player
            })
        }
    },
    addToDefenders: (player) => {
        return dispatch => {
            dispatch({
                type: 'addToDefenders',
                payload: player
            })
        }
    },
    addToMidfielders: (player) => {
        return dispatch => {
            dispatch({
                type: 'addToMidfielders',
                payload: player
            })
        }
    },
    setKeeper: (player) => {
        return dispatch => {
            dispatch({
                type: 'setKeeper',
                payload: player
            })
        }
    },
}

export default playersAction