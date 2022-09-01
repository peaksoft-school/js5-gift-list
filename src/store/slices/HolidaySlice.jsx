import { createSlice } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-cycle
import {
    getHoliday,
    postHoliday,
    getHolidayById,
    putHoliday,
    deleteHoliday,
} from './HolidayActions'

const initialState = {
    holiday: [],
    getSingleHoliday: {},
    data: null,
    error: null,
    status: null,
    modal: false,
    editmodal: false,
}
const HolidaySlice = createSlice({
    name: 'holiday',
    initialState,
    reducers: {
        clearHoliday(state) {
            state.getSingleHoliday = {}
        },
    },
    extraReducers: {
        [postHoliday.pending]: (state) => {
            state.status = 'pending'
        },
        [postHoliday.rejected]: (state) => {
            state.status = 'rejected'
        },
        [postHoliday.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'success'
            state.error = action.payload.error
        },
        [getHoliday.pending]: (state) => {
            state.status = 'pending'
        },
        [getHoliday.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.error
        },
        [getHoliday.fulfilled]: (state, action) => {
            const newArr = action.payload.reverse()
            state.holiday = newArr
            state.status = 'success'
        },
        [getHolidayById.pending]: (state) => {
            state.status = 'pending'
        },
        [getHolidayById.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.error
        },
        [getHolidayById.fulfilled]: (state, action) => {
            state.getSingleHoliday = action.payload
            state.status = 'success'
        },
        [putHoliday.pending]: (state) => {
            state.status = 'pending'
            state.editmodal = true
        },
        [putHoliday.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.error
            state.editmodal = true
        },
        [putHoliday.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'success'
            state.editmodal = false
        },
        [deleteHoliday.pending]: (state) => {
            state.status = 'pending'
        },
        [deleteHoliday.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.error.message
        },
        [deleteHoliday.fulfilled]: (state) => {
            // state.data = action.payload
            state.status = 'success'
        },
    },
})
export const { clearHoliday } = HolidaySlice.actions
export default HolidaySlice
