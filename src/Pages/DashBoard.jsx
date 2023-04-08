import React, { useEffect, useState } from 'react'

const getData = () => {
    return fetch('https://abad.onrender.com/user').then((res) => res.json())
}

const DashBoard = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData().then((res) => setData(res))
    }, [])
    console.log(data)

    return (
        <div>
            <h1>DashBoard</h1>
            {data.map((it) => (
                <div key={it._id} style={{
                    border: '1px solid grey', margin: 'auto',
                    width: '20%', marginTop: '20px',borderRadius:'5px',backgroundColor: '#bebcf5'
                }}>
                    <h3>NAME : {it.name}</h3>
                    <h5>DIFFICULTY : {it.difficulty}</h5>
                    <h5>SCORE : {it.score}</h5>
                </div>
            ))}
        </div>
    )
}

export default DashBoard