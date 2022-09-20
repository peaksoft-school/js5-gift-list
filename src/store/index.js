import { configureStore } from '@reduxjs/toolkit'

import addCharity from './slices/AddCharity'
// eslint-disable-next-line import/no-cycle
import { AddWishCardSlice } from './slices/addWishCardSlice'
import charitySearching from './slices/admin/charitySlice'
import usersCardSlice from './slices/admin/usersPageSlice'
import { authSlice } from './slices/AuthSlice'
import bookedPageSlice from './slices/bookedPageSlice'
import friendProfileSlice from './slices/friendProfileSlice'
import { requestToFriendSlice, friendsSlice } from './slices/friendTabSlice'
import HolidayGiftsSlice from './slices/HolidayGiftsSlice'
import HolidaySlice from './slices/HolidaySlice'
import getUserSlice from './slices/mainSearchSlise'
import profileSlice from './slices/ProfileSlice'

export const store = configureStore({
    reducer: {
        holiday: HolidaySlice.reducer,
        authSlice: authSlice.reducer,
        profileSlice: profileSlice.reducer,
        users: getUserSlice.reducer,
        friends: friendsSlice.reducer,
        requestToFriend: requestToFriendSlice.reducer,
        friend: friendProfileSlice.reducer,
        addCharity: addCharity.reducer,
        holidayUserGifts: HolidayGiftsSlice.reducer,
        wishCard: AddWishCardSlice.reducer,
        bookedCards: bookedPageSlice.reducer,
        usersCard: usersCardSlice.reducer,
        searching: charitySearching.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store
