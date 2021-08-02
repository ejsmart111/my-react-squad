import React, { useState } from 'react'
import './form.css'
import { playersRef } from '../config/firebase'

export default function PlayerForm() {
    const [playerName, setPlayerName] = useState('')
    const [playerPosition, setPlayerPosition] = useState('Goalkeeper')
    const [playerTeam, setPlayerTeam] = useState('')
    const [playerImageURL, setPlayerImageURL] = useState('')
    const [sumbitting, setSubmitting] = useState(false)
    
    function handleNameChange(e) {
        setPlayerName(e.target.value)
    }
    
    function handlePositionSelect(e) {
        setPlayerPosition(e.target.value)
    }
    
    function handleTeamChange(e) {
        setPlayerTeam(e.target.value)
    }
    
    function handleImageChange(e) {
        setPlayerImageURL(e.target.value)
    }

    function handleSubmission() {
        setSubmitting(true)
        const playerDetails = {name: playerName, position: playerPosition, team: playerTeam, imageURL: playerImageURL}
        playersRef.push(playerDetails)
        .then((res) => {
            setSubmitting(false)
            setPlayerTeam('')
            setPlayerName('')
            setPlayerPosition('Goalkeeper')
            setPlayerImageURL('')
        }).catch(err => {
            setSubmitting(false)
        })
    }
    
    return (
        <div>
            <div className="form">
                <div style={{margin: '0 auto', display: 'block'}}>
                    <label htmlFor="name">Player Name</label>
                    <input value={playerName} onChange={handleNameChange} name="name" type="text"></input><br/>
                    <label htmlFor="position">Position</label><br/>
                    <select value={playerPosition} onChange={handlePositionSelect} name="position">
                        <option>Goalkeeper</option>
                        <option>Defender</option>
                        <option>Midfielder</option>
                        <option>Attacker</option>
                    </select><br/>
                    <label htmlFor="team">Football Team</label><br/>
                    <input value={playerTeam} onChange={handleTeamChange} type="text"></input><br/>
                    <label htmlFor="imageURL">Image URL</label><br/>
                    <input value={playerImageURL} onChange={handleImageChange} type="text" name="imageURL"></input><br/>
                    <button onClick={handleSubmission}>{sumbitting?'Submitting Player infomation...':`Submit Play Details`}</button>
                </div>
            </div>
        </div>
    )
}
