import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Error from '../components/ui/Error'
import { Bookeds } from '../components/users/Bookeds'
import { Charity } from '../components/users/Charity'
import { Lenta } from '../components/users/Lenta'
import { MyHalidays } from '../components/users/MyHalidays'
import { WissList } from '../components/users/WissList'
import { Friends } from '../containers/FriendsPage'
import EditProfile from '../containers/profile/EditProfile'
import Profile from '../containers/profile/Profile'
import UserProfile from '../containers/profile/UserProfile'
import { PageLayout } from '../layout/PageLayout'
import { DEFAULT_ROUTES } from '../utils/constants/constants'

const UserRoutes = () => {
    return (
        <Routes>
            <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<PageLayout />}>
                <Route path="/" element={<Navigate replace to="/lenta" />} />
                <Route path="/lenta" element={<Lenta />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/wish_list" element={<WissList />} />
                <Route path="/bookeds" element={<Bookeds />} />
                <Route path="/my_halidays" element={<MyHalidays />} />
                <Route path="/charity" element={<Charity />} />
                <Route
                    path="/myprofile/edit_profile"
                    element={<EditProfile />}
                />
                <Route path="/myprofile" element={<UserProfile />} />
                <Route path="/myprofile/profile" element={<Profile />} />
            </Route>
            <Route path={DEFAULT_ROUTES.NOT_FOUND.PATH} element={<Error />} />
        </Routes>
    )
}

export default UserRoutes
