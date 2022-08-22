import { configureStore } from '@reduxjs/toolkit'

import addCharity from './slices/AddCharity'
import { authSlice } from './slices/AuthSlice'

export const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        addCharity: addCharity.reducer,
    },
})
