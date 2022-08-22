import { createSlice } from '@reduxjs/toolkit'

import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

import { postCharity } from './GiftActions'

const initial = {
    nameOfGift: '',
    state: '',
    photo: null,
    category: '',
    subcategory: '',
    description: '',
    data: null,
    status: '',
}

const addCharity = createSlice({
    name: 'addCharity',
    initialState: initial,
    reducers: {
        onChangeImageHandler(state, action) {
            state.photo = action.payload
            const formData = new FormData()
            formData.append('file', action.payload)
            console.log(formData)
        },
        nameChangeHandler(state, action) {
            state.nameOfGift = action.payload
        },
        stateChangeHandler(state, action) {
            state.state = action.payload
        },
        categoryChangeHandler(state, action) {
            state.category = action.payload
        },
        subcategoryChangeHandler(state, action) {
            state.subcategory = action.payload
        },
        descriptionChangeHandler(state, action) {
            state.description = action.payload
        },
        submitHandler(state) {
            console.log(state)
        },
    },
    extraReducers: {
        [postCharity.fulfilled]: (state, action) => {
            console.log(action)
            state.status = 'success'
            state.data = action.payload
            showSuccessMessage('successfully')
        },
        [postCharity.rejected]: (state) => {
            state.status = 'error'
            showErrorMessage('Failed')
        },
    },
})
export const addCharityActions = addCharity.actions
export default addCharity
