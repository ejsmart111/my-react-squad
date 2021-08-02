import React from 'react'

export default function SubmissionModal({ squad }) {
    return (
        <>
            <div className="playersModal">
                <div className="modal">
                    <input type="text" placeholder="Input your squad name"/>
                    <div style={{display: 'flex'}}>
                        <button>Cancel</button>
                        <button style={{marginLeft: '10px'}}>Submit Squad</button>
                    </div>
                </div>
            </div>
        </>
    )
}
