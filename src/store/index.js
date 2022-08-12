import { configureStore } from '@reduxjs/toolkit'

import AddWishCardSlice from './slices/addWishCardSlice'
import signUpSlice from './slices/SignUpSlice'

const store = configureStore({
    reducer: {
        signUp: signUpSlice.reducer,
        addWishCard: AddWishCardSlice.reducer,
    },
})
export default store
