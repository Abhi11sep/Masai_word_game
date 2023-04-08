import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../Pages/DashBoard'
import Home from '../Pages/Home'
import PlayZone from '../Pages/PlayZone'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/playzone' element={<PlayZone />} />
            <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
    )
}

export default AllRoutes