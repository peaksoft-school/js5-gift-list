import React, { Suspense, lazy } from 'react'

import styled from '@emotion/styled'
import { Routes, Route } from 'react-router-dom'

import LoadingSpinner from '../components/ui/LoadingSpinner'
import PageLayout from '../layout/PageLayout'

const Lenta = lazy(() => import('../components/company/users/Lenta'))
const WissList = lazy(() => import('../components/company/users/WissList'))
const Complaints = lazy(() => import('../components/company/admin/Complaints'))
const Mailing = lazy(() => import('../components/company/admin/Mailing'))
const Users = lazy(() => import('../components/company/admin/Users'))
const Bookeds = lazy(() => import('../components/company/users/Bookeds'))
const Charity = lazy(() => import('../components/company/users/Charity'))
const MyHalidays = lazy(() => import('../components/company/users/MyHalidays'))
// eslint-disable-next-line prettier/prettier
const CharityUsers = lazy(() =>
    import('../components/company/admin/CharityUsers')
)
const Friends = lazy(() => import('../components/company/users/Friends'))
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
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/wish_list" element={<WissList />} />
                    <Route path="/bookeds" element={<Bookeds />} />
                    <Route path="/my_halidays" element={<MyHalidays />} />
                    <Route path="/charity" element={<Charity />} />
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
