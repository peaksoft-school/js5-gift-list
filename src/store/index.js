import { configureStore } from '@reduxjs/toolkit'

import AuthSlice from './slices/AuthSlice'

const store = configureStore({
    reducer: {
        AuthSlice: AuthSlice.reducer,
    },
})
export default store
