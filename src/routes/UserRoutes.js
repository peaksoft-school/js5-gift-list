import React from 'react'

import { Routes, Route } from 'react-router-dom'

import HolidayCardInnerPage from '../components/addDeleteEditHolidays/holidayGiftInnerPage/HolidayCardInnerPage'
import ToEditInnerPage from '../components/addDeleteEditHolidays/holidayGiftInnerPage/ToEditInnerpage'
import Error from '../components/ui/Error'
import { Bookeds } from '../components/users/Bookeds'
import { Charity } from '../components/users/Charity'
import { Lenta } from '../components/users/Lenta'
import MyHolidays from '../components/users/MyHolidays'
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
                <Route path="/my_halidays" element={<MyHolidays />} />
                <Route
                    path="/my_halidays/:holidayGifts"
                    element={<HolidayCardInnerPage />}
                />
                <Route
                    path="/my_halidays/:holidayGifts/editPage"
                    element={<ToEditInnerPage />}
                />

                <Route path="/charity" element={<Charity />} />
            </Route>
            <Route path={DEFAULT_ROUTES.NOT_FOUND.PATH} element={<Error />} />
        </Routes>
    )
}

export default UserRoutes
