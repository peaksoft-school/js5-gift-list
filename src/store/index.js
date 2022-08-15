/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'

import HolidaySlice from './slices/HolidaySlice'
import signUpSlice from './slices/SignUpSlice'

const store = configureStore({
    reducer: {
        signUp: signUpSlice.reducer,
        holiday: HolidaySlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store
