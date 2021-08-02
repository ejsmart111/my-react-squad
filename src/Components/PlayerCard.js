import React from 'react'
import './playerCard.css'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import playersAction from '../Store/ActionCreators.js/playersAction' 

export default function PlayerCard({name, position, imageURL, team, id}) {
    const dispatch = useDispatch()
    const { playersModalChange } = bindActionCreators(playersAction, dispatch)

    return (
        <div onClick={() => playersModalChange({position:position, index: id})}>
            {
                name === '' ? <div className="player-card">
                    <i style={{marginTop: '70px', marginLeft: '30px'}} className="gg-math-plus"></i>
                </div> :<div className="player-card">
                    <img alt={`${name}'s`} src={imageURL}/>
                    <div className="player-details">
                        <p>{name}</p>
                        <p>{position}</p>
                        <p>{team}</p>
                    </div>
                </div>
            }
        </div>
    )
}
