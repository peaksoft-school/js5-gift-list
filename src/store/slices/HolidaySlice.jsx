import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-cycle
import { appFetch, appFetchFile } from '../../api/CustomFetch'
import { showSuccessMessage } from '../../utils/helpers'

export const postHoliday = createAsyncThunk(
    'holiday/postHoliday',
    async (props) => {
        console.log('photo', props)
        const formData = new FormData()
        try {
            formData.set('file', props.photo)
            const holidayResponse = await appFetchFile({
                url: 'api/file/upload',
                body: formData,
            })
            console.log(holidayResponse)
            const response = await appFetch({
                method: 'POST',
                body: {
                    holidayDate: props.date,
                    name: props.name,
                    photo: holidayResponse?.link,
                },
                url: 'api/holiday',
            })
            showSuccessMessage({ message: response.message })
            console.log(response)
            return response
        } catch (error) {
            return error.message
        }
    }
)
export const getHoliday = createAsyncThunk('holiday/getHoliday', async () => {
    const response = await appFetch({ url: 'api/holiday' })
    const data = response
    // console.log(data)
    return data
})

export const putHoliday = createAsyncThunk(
    'holiday/putHoliday',
    async (obj) => {
        try {
            const response = await appFetch({
                method: 'PUT',
                url: `api/holiday/${obj.id}`,
                body: obj.body,
            })
            return response
        } catch (error) {
            return error.message
        }
    }
)

export const deleteHoliday = createAsyncThunk(
    'holiday/sendDeleteHolidayReq',
    async (id) => {
        try {
            const response = await appFetch({
                url: `api/holiday/${id}`,
                method: 'DELETE',
            })
            // const data = await response.json()
            console.log(response)
            return response
        } catch (error) {
            return error.message
        }
    }
)
const initialState = {
    holiday: [],
    data: null,
    error: null,
    status: null,
}
const HolidaySlice = createSlice({
    name: 'holiday',
    initialState,
    extraReducers: {
        [postHoliday.pending]: (state) => {
            state.status = 'pending'
        },
        [postHoliday.rejected]: (state) => {
            state.status = 'rejected'
        },
        [postHoliday.fulfilled]: (state, action) => {
            console.log(state)
            state.data = action.payload
            state.status = 'success'
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
        [putHoliday.pending]: (state) => {
            state.status = 'pending'
        },
        [putHoliday.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.error
        },
        [putHoliday.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'success'
        },
        [deleteHoliday.pending]: (state) => {
            state.status = 'pending'
        },
        [deleteHoliday.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.error.message
        },
        [deleteHoliday.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'success'
        },
    },
})
export const HolidaySliceActions = HolidaySlice.actions
export default HolidaySlice
