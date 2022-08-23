import { configureStore } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-cycle
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
