import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Lenta from '../components/users/Lenta'
import WissList from '../components/users/WissList'
import FriendsPage from '../containers/FriendsPage'
import LandingPage from '../containers/LandingPage'
import PageLayout from '../layout/PageLayout'

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate replace to="/mainPage" />} />
                <Route path="/mainPage" element={<LandingPage />} />
                <Route path="/" element={<PageLayout />}>
                    <Route path="/lenta" element={<Lenta />} />
                    <Route path="/friends" element={<FriendsPage />} />

                    <Route path="/wish_list" element={<WissList />} />
                </Route>
            </Routes>
        </div>
    )
}

export default MainRouter
