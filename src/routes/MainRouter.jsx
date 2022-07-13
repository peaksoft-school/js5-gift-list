import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate replace to="/lenta" />} />
            </Routes>
        </div>
    )
}

export default MainRouter
