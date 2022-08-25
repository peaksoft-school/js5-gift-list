import { configureStore } from '@reduxjs/toolkit'

import { authSlice } from './slices/AuthSlice'
import getUserSlice from './slices/getUsersSlise'

export const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        users: getUserSlice.reducer,
    },
})
