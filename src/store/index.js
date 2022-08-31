import { configureStore } from '@reduxjs/toolkit'

import { AddWishCardSlice } from './slices/addWishCardSlice'
import { authSlice } from './slices/AuthSlice'

export const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        wishCard: AddWishCardSlice.reducer,
    },
})
