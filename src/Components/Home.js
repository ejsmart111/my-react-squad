import React, { useEffect } from 'react'
import './field.css'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import playersAction from '../Store/ActionCreators.js/playersAction'
import { Link } from 'react-router-dom'

export default function Home() {
    const squads = useSelector(state => state.squads)
    const dispatch = useDispatch()
    const { fetchSquads } = bindActionCreators(playersAction, dispatch)
    useEffect(() => {
        fetchSquads()
    }, [])
    
    return (
        <div>
            <div className="container">
                <Link to={`/squad-select`} style={{textDecoration: 'none'}}>
                    <button style={{margin: '30px auto', display: 'block', textDecoration: 'none'}}>Create Your First 11</button>
                </Link>

                <h2 style={{fontFamily: '"Gowun Dodum", sans-serif', color: 'white', marginTop: '30px'}}>Recently made Squads</h2>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {
                        squads.map((squad, index) => {
                            const squadx = [squad.goalkeeper, ...squad.defenders, ...squad.midfielders, ...squad.attackers]
                            return <div key={index} style={{width: '200px', background: 'rgba(0,0,0,0.6)', borderRadius: '10px', padding: '20px', marginLeft: '20px'}}>
                                    <h4 style={{fontFamily: '"Gowun Dodum", sans-serif', color: 'white'}}>{squad.squadName}</h4>
                                <ul>
                                    {
                                        squadx.map((s, i) => {
                                            return <li key={i} style={{fontFamily: '"Gowun Dodum", sans-serif', color: 'white'}}>{i+1} {s.name}</li>
                                        })
                                    }
                                    </ul>
                                </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
