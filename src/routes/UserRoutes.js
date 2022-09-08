import React from 'react'

import { Routes, Route } from 'react-router-dom'

import EditCharity from '../components/ui/charity/EditCharity'
import EditMyCharity from '../components/ui/charity/editMyCharity'
import Error from '../components/ui/Error'
import { Bookeds } from '../components/users/Bookeds'
import CharityInnerPage from '../components/users/charity/CharityInnerPage'
import CharityMyInnerPage from '../components/users/charity/CharityMyInnerPage'
import CharityUser from '../components/users/charity/CharityUser'
import { Lenta } from '../components/users/Lenta'
import { MyHalidays } from '../components/users/MyHalidays'
import { WissList } from '../components/users/WissList'
import { Friends } from '../containers/FriendsPage'
import { PageLayout } from '../layout/PageLayout'
import { DEFAULT_ROUTES } from '../utils/constants/constants'

const UserRoutes = () => {
    return (
        <Routes>
            <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<PageLayout />}>
                <Route path="/lenta" element={<Lenta />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/wish_list" element={<WissList />} />
                <Route path="/bookeds" element={<Bookeds />} />
                <Route path="/my_halidays" element={<MyHalidays />} />
                <Route path="/charity" element={<CharityUser />} />
                <Route path="/charity/add_charity" element={<EditCharity />} />
                <Route
                    path="/:editId/edit_charity"
                    element={<EditMyCharity />}
                />
                <Route path="/:id/innerPage" element={<CharityInnerPage />} />
                <Route
                    path="/:myId/my_charity"
                    element={<CharityMyInnerPage />}
                />
            </Route>
            <Route path={DEFAULT_ROUTES.NOT_FOUND.PATH} element={<Error />} />
        </Routes>
    )
}

export default UserRoutes
