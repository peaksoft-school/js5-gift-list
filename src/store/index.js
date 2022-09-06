import { configureStore } from '@reduxjs/toolkit'

import { authSlice } from './slices/AuthSlice'
import friendProfileSlice from './slices/friendProfileSlice'
import { requestToFriendSlice, friendsSlice } from './slices/friendTabSlice'
import getUserSlice from './slices/mainSearchSlise'

export const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        users: getUserSlice.reducer,
        friends: friendsSlice.reducer,
        requestToFriend: requestToFriendSlice.reducer,
        friend: friendProfileSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
