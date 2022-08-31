import { createSlice } from '@reduxjs/toolkit'

import {
    addGift,
    deleteWishGift,
    getWishGift,
    getWishWithId,
} from './AddWishCardActions'

const initialState = {
    card: [],
    innerPage: {},
    status: null,
    deleteId: false,
}

export const AddWishCardSlice = createSlice({
    name: 'wishCard',
    initialState,
    extraReducers: {
        [addGift.pending]: (state) => {
            state.status = 'pending'
        },
        [addGift.rejected]: (state) => {
            state.status = 'rejected'
        },
        [addGift.fulfilled]: (state, action) => {
            state.status = 'success'
            state.data = action.payload
        },
        [getWishGift.pending]: (state) => {
            state.status = 'pending'
        },
        [getWishGift.rejected]: (state) => {
            state.status = 'rejected'
        },
        [getWishGift.fulfilled]: (state, { payload }) => {
            state.card = payload.reverse()
            state.status = 'success'
        },
        [deleteWishGift.pending]: (state) => {
            state.status = 'pending'
        },
        [deleteWishGift.rejected]: (state) => {
            state.status = 'rejected'
        },
        [deleteWishGift.fulfilled]: (state) => {
            state.status = 'success'
            state.deleteId = !state.deleteId
        },
        [getWishWithId.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            state.innerPage = payload
        },
    },
})

export const cardSliceActions = AddWishCardSlice.actions
export default AddWishCardSlice
