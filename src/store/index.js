import { configureStore } from '@reduxjs/toolkit'

import addCharity from './slices/AddCharity'
import { AddWishCardSlice } from './slices/addWishCardSlice'
import { authSlice } from './slices/AuthSlice'
import bookedPageSlice from './slices/bookedPageSlice'
import {
    getComlaintWishSlice,
    getComplaintGiftSlice,
    giftsComplaintsSlice,
    wishesComplaintsSlice,
} from './slices/complaintsSlice'
import friendProfileSlice from './slices/friendProfileSlice'
import { requestToFriendSlice, friendsSlice } from './slices/friendTabSlice'
import HolidayGiftsSlice from './slices/HolidayGiftsSlice'
import HolidaySlice from './slices/HolidaySlice'
import getUserSlice from './slices/mainSearchSlise'

export const store = configureStore({
    reducer: {
        holiday: HolidaySlice.reducer,
        authSlice: authSlice.reducer,
        users: getUserSlice.reducer,
        friends: friendsSlice.reducer,
        requestToFriend: requestToFriendSlice.reducer,
        friend: friendProfileSlice.reducer,
        addCharity: addCharity.reducer,
        holidayUserGifts: HolidayGiftsSlice.reducer,
        wishCard: AddWishCardSlice.reducer,
        bookedCards: bookedPageSlice.reducer,
        giftComplaints: giftsComplaintsSlice.reducer,
        wishesComplaints: wishesComplaintsSlice.reducer,
        complaintWish: getComlaintWishSlice.reducer,
        complaintGift: getComplaintGiftSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store
