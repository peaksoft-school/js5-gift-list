import React, { Suspense, lazy } from 'react'

import styled from '@emotion/styled'
import { Routes, Route } from 'react-router-dom'

import LoadingSpinner from '../components/ui/LoadingSpinner'
import EditCharity from '../components/users/EditCharity'
import PageLayout from '../layout/PageLayout'

const Lenta = lazy(() => import('../components/users/Lenta'))
const WissList = lazy(() => import('../components/users/WissList'))
const Complaints = lazy(() => import('../components/admin/Complaints'))
const Mailing = lazy(() => import('../components/admin/Mailing'))
const Users = lazy(() => import('../components/admin/Users'))
const Bookeds = lazy(() => import('../components/users/Bookeds'))
const Charity = lazy(() => import('../components/users/Charity'))
const MyHalidays = lazy(() => import('../components/users/MyHalidays'))
// eslint-disable-next-line prettier/prettier
const CharityUsers = lazy(() => import('../components/admin/CharityUsers'))
const FriendsPage = lazy(() => import('../containers/FriendsPage'))
const AllRoutes = () => {
    return (
        <PageLayout>
            <Suspense
                fallback={
                    <SpinnerLoading>
                        <LoadingSpinner />
                    </SpinnerLoading>
                }
            >
                <Routes>
                    <Route path="/lenta" element={<Lenta />} />
                    <Route path="/friends" element={<FriendsPage />} />

                    <Route path="/wish_list" element={<WissList />} />
                    <Route path="/bookeds" element={<Bookeds />} />
                    <Route path="/my_halidays" element={<MyHalidays />} />
                    <Route path="/charity" element={<Charity />} />
                    <Route
                        path="/charity/:id/edit_charity"
                        element={<EditCharity />}
                    />
                    <Route path="/users" element={<Users />} />
                    <Route path="/complaints" element={<Complaints />} />
                    <Route path="/mailing" element={<Mailing />} />
                    <Route path="/charity_users" element={<CharityUsers />} />
                </Routes>
            </Suspense>
        </PageLayout>
    )
}

export default AllRoutes
const SpinnerLoading = styled('div')`
    margin-left: 50%;
`
