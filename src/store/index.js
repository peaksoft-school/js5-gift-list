import { configureStore } from '@reduxjs/toolkit'

import { AddWishCardSlice } from './slices/addWishCardSlice'
import { authSlice } from './slices/AuthSlice'
import bookedPageSlice from './slices/bookedPageSlice'

export const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        wishCard: AddWishCardSlice.reducer,
        bookedCards: bookedPageSlice.reducer,
    },
})
