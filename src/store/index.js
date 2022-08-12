import { configureStore } from '@reduxjs/toolkit'

import HolidaySlice from './slices/HolidaySlice'

const store = configureStore({
    reducer: {
        holiday: HolidaySlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default store
