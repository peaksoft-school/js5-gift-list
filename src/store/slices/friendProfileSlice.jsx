import { createSlice } from '@reduxjs/toolkit'

import { friendProfileAction } from './friendProfileAction'

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
        [friendProfileAction.fulfilled]: (state, action) => {
            state.friend = action.payload
            state.userInfo = action.payload.userInfo
            state.gifts = action.payload.gifts
            state.holidays = action.payload.holidays
            state.wishes = action.payload.wishes
            // console.log(state.wishes)
            // console.log(action.payload.holidays)
            state.status = 'success'
        },
    },
})
export const friendProfileSliceActions = friendProfileSlice.actions
export default friendProfileSlice
