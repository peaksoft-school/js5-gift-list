import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Lending from '../components/users/Lending'

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate replace to="/lending" />} />
                <Route path="lending" element={<Lending />} />
            </Routes>
        </div>
    )
}

export default MainRouter
