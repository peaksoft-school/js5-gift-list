import React from 'react'

import { Routes, Route } from 'react-router-dom'

import CharityUsers from '../components/company/admin/CharityUsers'
import Complaints from '../components/company/admin/Complaints'
import Mailing from '../components/company/admin/Mailing'
import Users from '../components/company/admin/Users'
import Bookeds from '../components/company/users/Bookeds'
import Charity from '../components/company/users/Charity'
import Friends from '../components/company/users/Friends'
import Lenta from '../components/company/users/Lenta'
import MyHalidays from '../components/company/users/MyHalidays'
import WissList from '../components/company/users/WissList'
import PageLayout from '../layout/PageLayout'

const AllRoutes = () => {
    return (
        <PageLayout>
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
        </PageLayout>
    )
}

export default AllRoutes
