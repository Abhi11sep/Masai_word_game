import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [level, setLevel] = useState("")

    const submit = () => {

        const payload = {
            name: name,
            difficulty: level,
            score: 0
        }
        fetch(`http://localhost:4500/adduser?difficulty=${level}`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-Type": "application/json"
            }
        })
            .then(() => localStorage.setItem("level", level))
            

    }
    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            <input style={{ fontSize: '20px', padding: '5px', margin: '30px 10px' }} onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Your Name" />

            <select style={{ fontSize: '20px', padding: '5px', margin: '10px 10px' }} onChange={(e) => setLevel(e.target.value)} >
                <option value="">Select Difficulty Level</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <button style={{ fontSize: '20px', padding: '8px 45px', margin: '10px 10px', backgroundColor: '#bebcf5', border: "none", borderRadius: '5px' }} onClick={submit}>Start Game</button>
        </div>
    )
}

export default Home