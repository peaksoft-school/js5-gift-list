import { configureStore } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-cycle
import { AddWishCardSlice } from './slices/addWishCardSlice'
import { authSlice } from './slices/AuthSlice'
import bookedPageSlice from './slices/bookedPageSlice'
import friendProfileSlice from './slices/friendProfileSlice'
import { requestToFriendSlice, friendsSlice } from './slices/friendTabSlice'
import HolidayGiftsSlice from './slices/HolidayGiftsSlice'
import HolidaySlice from './slices/HolidaySlice'
import getUserSlice from './slices/mainSearchSlise'

export const store = configureStore({
    reducer: {
        holiday: HolidaySlice.reducer,
        authSlice: authSlice.reducer,
        users: getUserSlice.reducer,
        friends: friendsSlice.reducer,
        requestToFriend: requestToFriendSlice.reducer,
        friend: friendProfileSlice.reducer,
        holidayUserGifts: HolidayGiftsSlice.reducer,
        wishCard: AddWishCardSlice.reducer,
        bookedCards: bookedPageSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store
