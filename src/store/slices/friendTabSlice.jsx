import { createSlice } from '@reduxjs/toolkit'

import { friendsAction, requestsToFriendAction } from './friendTabAction'

const initialState = { requestToFriend: [], status: null, friends: null }
export const requestToFriendSlice = createSlice({
    name: 'requestsToFriend',
    initialState,
    reducers: {},
    extraReducers: {
        [requestsToFriendAction.fulfilled]: (state, action) => {
            state.requestToFriend = action.payload
            state.status = 'success'
        },
    },
})
export const requestsToFriendSliceActions = requestToFriendSlice.actions

export const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {},
    extraReducers: {
        [friendsAction.fulfilled]: (state, action) => {
            state.allUsers = action.payload
            state.status = 'success'
        },
    },
})

export const friendsSliceAction = friendsSlice.actions
