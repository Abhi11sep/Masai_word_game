import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{
            display: 'flex', justifyContent: 'space-evenly',
            backgroundColor: '#bebcf5', padding: '15px'
        }}>
            <Link style={{ fontSize: '20px', textDecoration: 'none' }} to="/">Home</Link>
            <Link style={{ fontSize: '20px', textDecoration: 'none' }} to="/playzone">Play-Zone</Link>
            <Link style={{ fontSize: '20px', textDecoration: 'none' }} to="/dashboard">Dashboard</Link>
        </div>
    )
}

export default Navbar