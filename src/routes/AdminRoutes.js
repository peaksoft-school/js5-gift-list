import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { CharityUsers } from '../components/admin/CharityUsers'
import { Complaints } from '../components/admin/Complaints'
import ComplaintsInnerPage from '../components/admin/ComplaintsInnerPage'
import { Users } from '../components/admin/Users'
import Error from '../components/ui/Error'
import { PageLayout } from '../layout/PageLayout'
import { DEFAULT_ROUTES } from '../utils/constants/constants'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<PageLayout />}>
                <Route path="/users" element={<Users />} />
                <Route path="/complaints" element={<Complaints />} />
                <Route path="/charity_users" element={<CharityUsers />} />
                <Route
                    path="/complaints/:id"
                    element={<ComplaintsInnerPage />}
                />
            </Route>
            <Route path={DEFAULT_ROUTES.NOT_FOUND.PATH} element={<Error />} />
        </Routes>
    )
}

export default AdminRoutes
