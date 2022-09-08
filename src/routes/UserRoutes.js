import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Error from '../components/ui/Error'
import { Charity } from '../components/users/Charity'
import { Lenta } from '../components/users/Lenta'
import MyHolidays from '../components/users/MyHolidays'
import AddWishCardPage from '../containers/AddWishCardPage'
import BookedPage from '../containers/BookedPage'
import EditWishCardPage from '../containers/EditWishCardPage'
import FriendProfile from '../containers/FriendProfilePage'
import { Friends } from '../containers/FriendsPage'
import HolidayCardInnerPage from '../containers/HolidayCardInnerPage'
import InnerPageWishCard from '../containers/InnerPageWishCard'
import WishList from '../containers/WishList'
import { PageLayout } from '../layout/PageLayout'
import { DEFAULT_ROUTES } from '../utils/constants/constants'

const UserRoutes = () => {
    return (
        <Routes>
            <Route path={DEFAULT_ROUTES.INDEX.PATH} element={<PageLayout />}>
                <Route path="/lenta" element={<Lenta />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/friends/:userId" element={<FriendProfile />} />
                <Route path="/wish_list" element={<WishList />} />
                <Route
                    path="/wish_list/:wishListId"
                    element={<InnerPageWishCard />}
                />
                <Route path="/wish_list/add" element={<AddWishCardPage />} />
                <Route
                    path="/wish_list/:id/edit"
                    element={<EditWishCardPage />}
                />
                <Route path="/my_halidays" element={<MyHolidays />} />
                <Route
                    path="/my_halidays/:holidayGifts"
                    element={<HolidayCardInnerPage />}
                />
                <Route path="/bookedPage" element={<BookedPage />} />
                <Route path="/charity" element={<Charity />} />
            </Route>
            <Route path={DEFAULT_ROUTES.NOT_FOUND.PATH} element={<Error />} />
        </Routes>
    )
}

export default UserRoutes
