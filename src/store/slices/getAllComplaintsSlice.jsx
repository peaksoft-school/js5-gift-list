import { createSlice } from '@reduxjs/toolkit'

import { getAllComplaintsAction } from './getAllComplaintsAction'

const initialState = {
    complaints: [],
    status: null,
}

const getAllComplaintsSlice = createSlice({
    name: 'complaints',
    initialState,
    extraReducers: {
        [getAllComplaintsAction.fulfilled]: (state, action) => {
            state.complaints = action.payload
            state.status = 'success'
        },
    },
})

export const getAllComplaints = getAllComplaintsSlice.actions
export default getAllComplaintsSlice
