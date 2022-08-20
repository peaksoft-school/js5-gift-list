import React, { Suspense } from 'react'

import styled from '@emotion/styled'
import { Routes, Route } from 'react-router-dom'

import CharityUsers from '../components/admin/CharityUsers'
import Complaints from '../components/admin/Complaints'
import Mailing from '../components/admin/Mailing'
import Users from '../components/admin/Users'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import Bookeds from '../components/users/Bookeds'
import Charity from '../components/users/Charity'
import Lenta from '../components/users/Lenta'
import MyHalidays from '../components/users/MyHalidays'
import WissList from '../components/users/WissList'
import FriendsPage from '../containers/FriendsPage'
import LandingPage from '../containers/LandingPage'
import UserProfile from '../containers/UserProfile'
import PageLayout from '../layout/PageLayout'

const MainRouter = () => {
    return (
        <Suspense
            fallback={
                <SpinnerLoading>
                    <LoadingSpinner />
                </SpinnerLoading>
            }
        >
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/" element={<PageLayout />}>
                    <Route path="/lenta" element={<Lenta />} />
                    <Route path="/friends" element={<FriendsPage />} />

                    <Route path="/wish_list" element={<WissList />} />
                    <Route path="/bookeds" element={<Bookeds />} />
                    <Route path="/my_halidays" element={<MyHalidays />} />
                    <Route path="/charity" element={<Charity />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/complaints" element={<Complaints />} />
                    <Route path="/mailing" element={<Mailing />} />
                    <Route path="/charity_users" element={<CharityUsers />} />
                    <Route path="/profile" element={<UserProfile />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default MainRouter

const SpinnerLoading = styled('div')`
    margin: 0 auto;
`
