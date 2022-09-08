import { createSlice } from '@reduxjs/toolkit'

// import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

// import { postCharity } from './GiftActions'
import { getCharity, getMyCharity, getSingleCharityById } from './GiftActions'

const initial = {
    data: null,
    status: null,
    single: null,
    myCharity: null,
}

const addCharity = createSlice({
    name: 'addCharity',
    initialState: initial,
    extraReducers: {
        // [postCharity.fulfilled]: (state, action) => {
        //     console.log(action.payload)
        //     state.status = 'success'
        //     state.data = action.payload
        //     showSuccessMessage('ExtraReducer')
        // },
        // [postCharity.rejected]: (state) => {
        //     state.status = 'error'
        //     showErrorMessage('Rejected')
        // },
        [getCharity.fulfilled]: (state, action) => {
            state.data = action.payload.reverse()
        },
        [getSingleCharityById.fulfilled]: (state, action) => {
            state.single = action.payload
        },
        [getMyCharity.fulfilled]: (state, action) => {
            state.myCharity = action.payload
        },
    },
})
export const addCharityActions = addCharity.actions
export default addCharity
