import { configureStore } from '@reduxjs/toolkit'

import signUpSlice from './slices/SignUpSlice'

const store = configureStore({
    reducer: {
        signUp: signUpSlice.reducer,
    },
})
export default store
