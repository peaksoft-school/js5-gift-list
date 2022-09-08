<<<<<<< HEAD
import React, { Suspense } from 'react'

import styled from '@emotion/styled'
import { Routes, Route } from 'react-router-dom'

import CharityUsers from '../components/admin/CharityUsers'
import Complaints from '../components/admin/Complaints'
import Mailing from '../components/admin/Mailing'
import Users from '../components/admin/Users'
import EditCharity from '../components/ui/charity/EditCharity'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import Bookeds from '../components/users/Bookeds'
import CharityUser from '../components/users/charity/CharityUser'
import Lenta from '../components/users/Lenta'
import MyHalidays from '../components/users/MyHalidays'
import WissList from '../components/users/WissList'
import FriendsPage from '../containers/FriendsPage'
import LandingPage from '../containers/LandingPage'
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
                    <Route path="/charity" element={<CharityUser />} />
                    <Route
                        path="/charity/:id/edit_charity"
                        element={<EditCharity />}
                    />
                    <Route path="/users" element={<Users />} />
                    <Route path="/complaints" element={<Complaints />} />
                    <Route path="/mailing" element={<Mailing />} />
                    <Route path="/charity_users" element={<CharityUsers />} />
                </Route>
            </Routes>
        </Suspense>
=======
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
>>>>>>> d04bfa8e76e79200385d2d93d6d311c8167f94cd
    )
}

export default MainRouter
<<<<<<< HEAD

const SpinnerLoading = styled('div')`
    margin: 0 auto;
`
=======
>>>>>>> d04bfa8e76e79200385d2d93d6d311c8167f94cd
