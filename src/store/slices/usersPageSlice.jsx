import { createSlice } from '@reduxjs/toolkit'

import { getAllUsers, getUserProfileWithId } from './usersPageAction'

const initialState = {
    users: [],
    userProfile: {},
}

const usersCardSlice = createSlice({
    name: 'usersCard',
    initialState,
    extraReducers: {
        [getAllUsers.fulfilled]: (state, { payload }) => {
            state.users = payload
            console.log(payload, 'text')
        },
        [getUserProfileWithId.fulfilled]: (state, { payload }) => {
            state.userProfile = payload
            console.log(payload)
        },
    },
})

export const usersCardAction = usersCardSlice.actions
export default usersCardSlice
