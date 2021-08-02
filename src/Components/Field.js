import React, { useState } from 'react'
import './field.css'
import PlayerCard from './PlayerCard'
import { useSelector } from 'react-redux'
import './players-modal.css'
import SubmissionModal from './SubmissionModal'


export default function Field() {
    const attackers = useSelector(state => state.squad.attackers)
    const defenders = useSelector(state => state.squad.defenders)
    const midfielders = useSelector(state => state.squad.midfielders)
    const goalkeeper = useSelector(state => state.squad.goalkeeper)
    const [showModal, setShowModal] = useState(true)

    function handleSubmission() {
        const attackersValidation = attackers.find(att => att.name === '')
        const defendersValidation = defenders.find(att => att.name === '')
        const midfieldersValidation = midfielders.find(att => att.name === '')

        if (!attackersValidation && !defendersValidation && !midfieldersValidation) {
            alert('good to go')
        } else {
            alert('fill your first eleven')
        }
    }
    
    return (
        <div>
            <div className="field">
                <div>
                    <div className="forwards">
                        {
                            attackers.map((player, index) => {
                                return <div key={index} style={{marginTop: index === 1 ? '-10px': '10px' }}>
                                    <PlayerCard id={index} name={player.name} position={player.position} team={player.team} imageURL={player.imageURL}/>
                                </div>
                            })
                        }
                    </div>
                    <div style={{marginTop: '40px'}} className="midfielders">
                        {
                            midfielders.map((player, index) => {
                                return <div key={index} style={{marginTop: index === 1 ? '-20px': '10px' }}>
                                    <PlayerCard id={index} name={player.name} position={player.position} team={player.team} imageURL={player.imageURL}/>
                                </div>
                            })
                        }
                    </div>
                    <div style={{marginTop: '50px'}} className="forwards">
                        {
                            defenders.map((player, index) => {
                                return <div key={index} style={{marginTop: index === 1 || index === 2 ? '-30px': '10px' }}>
                                    <PlayerCard id={index} name={player.name} position={player.position} team={player.team} imageURL={player.imageURL}/>
                                </div>
                            })
                        }
                    </div>
                    <div className="goalie">
                        <PlayerCard name={goalkeeper.name} position={goalkeeper.position} number={goalkeeper.team} imageURL={goalkeeper.imageURL}/>
                    </div>
                </div>
                <button onClick={handleSubmission} style={{background: 'Blue'}}>Submit your First Eleven</button>
                <SubmissionModal/>
            </div>
        </div>
    )
}
