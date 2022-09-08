import { createSlice } from '@reduxjs/toolkit'

import { getFriendPageAction } from './friendProfileAction'

const initialState = {
    friend: [],
    userInfo: {},
    gifts: [],
    holidays: [],
    wishes: [],
    status: null,
}
const friendProfileSlice = createSlice({
    name: 'friend',
    initialState,
    reducers: {},
    extraReducers: {
        [getFriendPageAction.fulfilled]: (state, action) => {
            state.friend = action.payload
            state.userInfo = action.payload.userInfo
            state.gifts = action.payload.gifts
            state.holidays = action.payload.holidays
            state.wishes = action.payload.wishes
            state.status = 'success'
        },
    },
})
export const friendProfileSliceActions = friendProfileSlice.actions
export default friendProfileSlice
