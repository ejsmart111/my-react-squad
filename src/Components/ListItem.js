import React from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import playersAction from '../Store/ActionCreators.js/playersAction'
import { useSelector } from 'react-redux'

export default function ListItem({player}) {
    const dispatch = useDispatch()
    const { addToAttackers, addToDefenders, addToMidfielders, playersModalChange, setKeeper } = bindActionCreators(playersAction, dispatch)
    const modalStateId = useSelector(state => state.modal.idToReplace)
    
    const listStyle = {
        border: '1px solid #ccc',
        borderLeft: '0',
        borderRight: '0',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
    }

    function handleAddToSquad() {
        switch (player.position) {
            case 'Attacker':
                addToAttackers({...player, index: modalStateId})
                break;
            case 'Defender':
                addToDefenders({...player, index: modalStateId})
                break;
            case 'Midfielder':
                addToMidfielders({...player, index: modalStateId})
                break;
            default:
                setKeeper({...player, index: modalStateId})
        }
        playersModalChange({position: 'Goalkeeper', index: 0})
    }
    
    return (
        <div>
            <li style={listStyle} onClick={handleAddToSquad}>
                <div style={{width: '60px'}}>
                    <img alt="altImage" style={{width: '50px', height:'50px', objectFit: 'cover', borderRadius: '50%'}} src={player.imageURL}/>
                </div>
                <div style={{width: '100%', marginLeft: '15px', marginTop: '-5px'}}>
                    <p style={{fontFamily: '"Gowun Dodum", sans-serif'}}>{player.name}</p>
                </div>
                <div style={{marginLeft: '15px', marginTop: '-5px'}}>
                    <p style={{fontFamily: '"Gowun Dodum", sans-serif'}}>{player.team}</p>
                </div>
            </li>
        </div>
    )
}
