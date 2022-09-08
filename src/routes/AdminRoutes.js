import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Error from '../components/ui/Error'
import { CharityUsers } from '../containers/admin/CharityUsers'
import { Complaints } from '../containers/admin/Complaints'
import { Mailing } from '../containers/admin/Mailing'
import UserProfilePage from '../containers/admin/UserProfilePage'
import { UsersPage } from '../containers/admin/UsersPage'
import { PageLayout } from '../layout/PageLayout'
import { DEFAULT_ROUTES } from '../utils/constants/constants'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<PageLayout />}>
                <Route path="/users" element={<UsersPage />} />
                <Route path="users/userId" element={<UserProfilePage />} />
                <Route path="/complaints" element={<Complaints />} />
                <Route path="/mailing" element={<Mailing />} />
                <Route path="/charity_users" element={<CharityUsers />} />
            </Route>
            <Route path={DEFAULT_ROUTES.NOT_FOUND.PATH} element={<Error />} />
        </Routes>
    )
}

export default AdminRoutes
