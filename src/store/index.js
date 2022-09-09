import { configureStore } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-cycle
import { AddWishCardSlice } from './slices/addWishCardSlice'
import { authSlice } from './slices/AuthSlice'
import bookedPageSlice from './slices/bookedPageSlice'
import HolidayGiftsSlice from './slices/HolidayGiftsSlice'
import HolidaySlice from './slices/HolidaySlice'
import usersCardSlice from './slices/usersPageSlice'

export const store = configureStore({
    reducer: {
        holiday: HolidaySlice.reducer,
        authSlice: authSlice.reducer,
        holidayUserGifts: HolidayGiftsSlice.reducer,
        wishCard: AddWishCardSlice.reducer,
        bookedCards: bookedPageSlice.reducer,
        usersCard: usersCardSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store
