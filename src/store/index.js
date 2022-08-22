import { configureStore } from '@reduxjs/toolkit'

import AddWishCardSlice from './slices/AddWishCardActions'
import signUpSlice from './slices/SignUpSlice'

const store = configureStore({
    reducer: {
        signUp: signUpSlice.reducer,
        wishCard: AddWishCardSlice.reducer,
    },
})
export default store
