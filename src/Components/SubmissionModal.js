import React, {useState} from 'react'
import { SquadRef } from '../config/firebase'

export default function SubmissionModal({ squad, setModal }) {
    const [squadName, setSquadName] = useState('')
    const [loading, setLoading] = useState(false)

    function handleNameChange (e) {
        setSquadName(e.target.value)
    }
    
    function handleSquadSubmission () {
        setLoading(true)
        console.log({...squad, squadName: squadName})
        if (squadName !== ''){
            SquadRef.push({...squad, squadName: squadName})
            setModal()
            setLoading(false)
        } else {
            alert('Input your squad name')
            setLoading(false)
        }
    }

    return (
        <>
            <div className="playersModal">
                <div className="modal">
                    <input value={squadName} onChange={handleNameChange} type="text" placeholder="Input your squad name"/>
                    <div style={{display: 'flex'}}>
                        <button onClick={() => setModal()} style={{background: 'red'}}>Cancel</button>
                        <button onClick={handleSquadSubmission} style={{marginLeft: '10px'}}>{!loading?`Submit Squad`: `Submitting ${squadName} Squad...`}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
