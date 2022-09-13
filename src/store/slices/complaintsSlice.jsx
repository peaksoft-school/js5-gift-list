import { createSlice } from '@reduxjs/toolkit'

import {
    giftsComplaintsAction,
    wishesComplaintsAction,
} from './complaintsAction'

const initialState = {
    complaintOnGifts: [],
    complaintOnWishes: [],
    status: null,
}

export const giftsComplaintsSlice = createSlice({
    name: 'complaints',
    initialState,
    extraReducers: {
        [giftsComplaintsAction.fulfilled]: (state, action) => {
            state.complaintOnGifts = action.payload
            state.status = 'success'
        },
    },
})

export const getAllGiftsComplaints = giftsComplaintsSlice.actions

export const wishesComplaintsSlice = createSlice({
    name: 'complaints',
    initialState,
    extraReducers: {
        [wishesComplaintsAction.fulfilled]: (state, action) => {
            state.complaintOnWishes = action.payload
            state.status = 'success'
        },
    },
})

export const getAllWishesComplaints = wishesComplaintsSlice.actions
