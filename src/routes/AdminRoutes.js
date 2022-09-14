import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Error from '../components/ui/Error'
import { CharityPage } from '../containers/admin/CharityPage'
import { Complaints } from '../containers/admin/Complaints'
import InnerPageCharity from '../containers/admin/InnerPageCharity'
// import { Mailing } from '../containers/admin/Mailing'
import { Users } from '../containers/admin/Users'
import { PageLayout } from '../layout/PageLayout'
import { DEFAULT_ROUTES } from '../utils/constants/constants'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<PageLayout />}>
                <Route path="/users" element={<Users />} />
                <Route path="/complaints" element={<Complaints />} />
                {/* <Route path="/mailing" element={<Mailing />} /> */}
                <Route path="/charity" element={<CharityPage />} />
                <Route path="/charity/:id" element={<InnerPageCharity />} />
            </Route>
            <Route path={DEFAULT_ROUTES.NOT_FOUND.PATH} element={<Error />} />
        </Routes>
    )
}

export default AdminRoutes
