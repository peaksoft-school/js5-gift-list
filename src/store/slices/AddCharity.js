import { createSlice } from '@reduxjs/toolkit'

// import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

// import { postCharity } from './GiftActions'
import { getCharity, getSingleCharityById } from './GiftActions'

const initial = {
    data: null,
    status: null,
    single: null,
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
            console.log(action.payload)
            state.data = action.payload.reverse()
            console.log(state.data)
        },
        [getSingleCharityById.fulfilled]: (state, action) => {
            state.single = action.payload
            console.log(state.single)
        },
    },
})
export const addCharityActions = addCharity.actions
export default addCharity
