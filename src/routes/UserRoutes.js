import React from 'react'

import { Routes, Route } from 'react-router-dom'

import EditCharity from '../components/ui/charity/EditCharity'
import EditMyCharity from '../components/ui/charity/editMyCharity'
import Error from '../components/ui/Error'
// <<<<<<< HEAD
import { Bookeds } from '../components/users/Bookeds'
import CharityInnerPage from '../components/users/charity/CharityInnerPage'
import CharityMyInnerPage from '../components/users/charity/CharityMyInnerPage'
// import CharityUser from '../components/users/charity/CharityUser'
// =======
// import { Charity } from '../components/users/Charity'
import CharityUser from '../components/users/charity/CharityUser'
// >>>>>>> d04bfa8e76e79200385d2d93d6d311c8167f94cd
import { Lenta } from '../components/users/Lenta'
import MyHolidays from '../components/users/MyHolidays'
import AddWishCardPage from '../containers/AddWishCardPage'
import BookedPage from '../containers/BookedPage'
import EditWishCardPage from '../containers/EditWishCardPage'
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
                {/* <<<<<<< HEAD */}
                {/* <Route path="/wish_list" element={<WissList />} /> */}
                <Route path="/bookeds" element={<Bookeds />} />
                {/* <Route path="/my_halidays" element={<MyHalidays />} /> */}
                {/* <Route path="/charity" element={<CharityUser />} />
                <Route path="/charity/add_charity" element={<EditCharity />} />
                <Route
                    path="/:editId/edit_charity/:true"
                    element={<EditMyCharity />}
                />
                <Route path="/:id/innerPage" element={<CharityInnerPage />} />
                <Route
                    path="/:myId/my_charity"
                    element={<CharityMyInnerPage />} */}
                {/* /> */}
                {/* ======= */}
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
                <Route path="/charity" element={<CharityUser />} />
                <Route path="/charity/add_charity" element={<EditCharity />} />
                <Route
                    path="/:editId/edit_charity/:true"
                    element={<EditMyCharity />}
                />
                <Route path="/:id/innerPage" element={<CharityInnerPage />} />
                <Route
                    path="/:myId/my_charity"
                    element={<CharityMyInnerPage />}
                />
                {/* >>>>>>> d04bfa8e76e79200385d2d93d6d311c8167f94cd */}
            </Route>
            <Route path={DEFAULT_ROUTES.NOT_FOUND.PATH} element={<Error />} />
        </Routes>
    )
}

export default UserRoutes
