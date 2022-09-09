import { configureStore } from '@reduxjs/toolkit'

// <<<<<<< HEAD
import addCharity from './slices/AddCharity'
// =======
// eslint-disable-next-line import/no-cycle
import { AddWishCardSlice } from './slices/addWishCardSlice'
// >>>>>>> d04bfa8e76e79200385d2d93d6d311c8167f94cd
import { authSlice } from './slices/AuthSlice'
import bookedPageSlice from './slices/bookedPageSlice'
import HolidayGiftsSlice from './slices/HolidayGiftsSlice'
import HolidaySlice from './slices/HolidaySlice'

export const store = configureStore({
    reducer: {
        holiday: HolidaySlice.reducer,
        authSlice: authSlice.reducer,
        // <<<<<<< HEAD
        addCharity: addCharity.reducer,
        // =======
        holidayUserGifts: HolidayGiftsSlice.reducer,
        wishCard: AddWishCardSlice.reducer,
        bookedCards: bookedPageSlice.reducer,
        // >>>>>>> d04bfa8e76e79200385d2d93d6d311c8167f94cd
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store
