import React from 'react'
import './players-modal.css'
import ListItem from './ListItem'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import playersAction from '../Store/ActionCreators.js/playersAction'

export default function PlayersModal({position, players}) {
    const dispatch = useDispatch()
    const { playersModalChange } = bindActionCreators(playersAction, dispatch)
    const modalState = useSelector(state => state.modal)

    return (
        <div>{
                players.length < 1? <h3 style={{fontFamily: '"Gowun Dodum", sans-serif'}}>Loading Players...</h3>:
                <div className="playersModal">
                    <div className="modal">
                        <div style={{display: 'flex', background:'white', justifyContent: 'space-between', position: 'sticky', top: '0px'}}>
                            <h3 className="top">{position}s</h3>
                            <p onClick={() => playersModalChange({position: 'Goalkeeper', index: 0})} style={{cursor: 'pointer', marginTop: '20px', fontFamily: '"Gowun Dodum", sans-serif'}}>Close</p>
                        </div>
                        <ul>
                            {
                                players.filter(p => p.position === modalState.position).map((player, index) => {
                                    return <ListItem key={index} player={player}/>
                                })
                            }
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}
