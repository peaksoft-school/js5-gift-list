import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Landing from '../components/users/Landing'

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate replace to="/landing" />} />
                <Route path="/landing" element={<Landing />} />
            </Routes>
        </div>
    )
}

export default MainRouter
