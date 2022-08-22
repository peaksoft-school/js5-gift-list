import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { appFetch, appFetchFile } from '../../api/CustomFetch'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

export const addGift = createAsyncThunk(
    'addWishCard/fetchByIdStatus',
    async ({ photo, wishGift, dispatch }) => {
        // console.log(dispatch)
        // console.log(wishGift)
        const formData = new FormData()
        try {
            formData.set('file', photo)
            const response = await appFetchFile({
                url: 'api/file/upload',
                body: formData,
            })
            const responseAll = await appFetch({
                method: 'POST',
                url: 'api/wish',
                body: {
                    photo: response.link,
                    giftName: wishGift.giftName,
                    giftLink: wishGift.giftLink,
                    description: wishGift.description,
                    holidayName: wishGift.holidayName,
                    wishDate: wishGift.wishDate,
                },
                //  array.photo = response.link,
            })
            console.log(responseAll)
            console.log(response)

            if (!response.link) {
                showErrorMessage('error')
            }
            if (response.link) {
                showSuccessMessage('Hello')
            }
            dispatch(getWishGift())
        } catch (e) {
            throw new Error('Что-то пошло не так')
        }
    }
)

export const getWishGift = createAsyncThunk('get/wishGift', async () => {
    const getResponse = await appFetch({
        url: 'api/wish',
    })
    console.log(getResponse)
    return getResponse
})

// import { addGift } from './AddWishCardActions'

const initialState = {
    card: [],
    data: null,
    status: null,
    error: null,
}

const AddWishCardSlice = createSlice({
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
        [getWishGift.fulfilled]: (state, action) => {
            state.status = 'success'
            state.card = action.payload
            console.log(action.payload)
            // console.log(state.card)
        },
    },
})

export const cardSliceActions = AddWishCardSlice.actions
export default AddWishCardSlice
