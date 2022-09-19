import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Error from '../components/ui/Error'
import CharityUsers from '../components/users/charity/CharityUser'
import { CharityPage } from '../containers/admin/CharityPage'
import { Complaints } from '../containers/admin/Complaints'
import ComplaintsInnerPage from '../containers/admin/ComplaintsInnerPage'
import InnerPageCharity from '../containers/admin/InnerPageCharity'
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
                <Route path="users/:id" element={<UserProfilePage />} />
                <Route path="/complaints" element={<Complaints />} />
                <Route path="/charity_users" element={<CharityUsers />} />
                <Route
                    path="/complaints/:id"
                    element={<ComplaintsInnerPage />}
                />
                <Route path="/mailing" element={<Mailing />} />
                <Route path="/charity" element={<CharityPage />} />
                <Route path="/charity/:id" element={<InnerPageCharity />} />
            </Route>
            <Route path={DEFAULT_ROUTES.NOT_FOUND.PATH} element={<Error />} />
        </Routes>
    )
}

export default AdminRoutes
