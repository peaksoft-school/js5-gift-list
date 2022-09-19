import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

export const giftsComplaintsAction = createAsyncThunk(
    'complaints/giftsComplaints',
    async () => {
        const response = await appFetch({
            url: `api/complaints/gifts`,
        })
        return response
    }
)
export const wishesComplaintsAction = createAsyncThunk(
    'complaints/wisheComplaints',
    async () => {
        const response = await appFetch({
            url: `api/complaints/wishes`,
        })
        return response
    }
)
export const deleteComplaintAction = createAsyncThunk(
    'deleteComplaint/deleteComplaintAction',
    async (obj) => {
        console.log(obj.complaintId)
        const response = await appFetch({
            method: 'DELETE',
            url: `api/complaints/${obj.complaintId}`,
        })
        obj.dispatch(giftsComplaintsAction())
        obj.dispatch(wishesComplaintsAction())
        console.log(response)
        return response
    }
)

export const getWishAction = createAsyncThunk(
    'complaintWish/getWishAction',
    async (wishId) => {
        console.log(wishId)
        const response = await appFetch({
            url: `api/complaints/wish/${wishId}`,
        })
        console.log(response)
        return response
    }
)

export const getGiftAction = createAsyncThunk(
    'complaintGift/getGiftAction',
    async (giftId) => {
        console.log(giftId)
        const response = await appFetch({
            url: `api/complaints/gift/${giftId}`,
        })
        console.log(response)
        return response
    }
)

export const toBlockWishAction = createAsyncThunk(
    'blockWish/blockWishAction',
    async (id, { dispatch }) => {
        try {
            console.log(id)
            const response = await appFetch({
                method: 'PUT',
                url: `api/admin/blockWish/${id}`,
            })
            dispatch(giftsComplaintsAction)
            dispatch(wishesComplaintsAction)
            dispatch(getGiftAction)
            dispatch(getWishAction)
            console.log(response)
            return response
        } catch (error) {
            return showErrorMessage('Что-то пошло не так')
        }
    }
)

export const unBlockWishAction = createAsyncThunk(
    'unBlockWish/unBlockWishAction',
    async (id, { dispatch }) => {
        try {
            console.log(id)
            const response = await appFetch({
                method: 'PUT',
                url: `api/admin/unBlockWish/${id}`,
            })
            dispatch(giftsComplaintsAction)
            dispatch(wishesComplaintsAction)
            dispatch(getGiftAction)
            dispatch(getWishAction)
            console.log(response)
            showSuccessMessage('Успешно разблокирован!')
            return response
        } catch (error) {
            return showErrorMessage('Что-то пошло не так')
        }
    }
)

export const toBlockGiftAction = createAsyncThunk(
    'blockGift/toBlockGiftAction',
    async (id, { dispatch }) => {
        try {
            console.log(id)
            const response = await appFetch({
                method: 'PUT',
                url: `api/admin/blockGift/${id}`,
            })
            dispatch(giftsComplaintsAction)
            dispatch(wishesComplaintsAction)
            dispatch(getGiftAction)
            dispatch(getWishAction)
            console.log(response)
            return response
        } catch (error) {
            return showErrorMessage('Что-то пошло не так')
        }
    }
)

export const unBlockGiftAction = createAsyncThunk(
    'unBlockGift/unBlockGiftAction',
    async (id, { dispatch }) => {
        try {
            console.log(id)
            const response = await appFetch({
                method: 'PUT',
                url: `api/admin/unBlockGift/${id}`,
            })
            dispatch(giftsComplaintsAction)
            dispatch(wishesComplaintsAction)
            dispatch(getGiftAction)
            dispatch(getWishAction)
            console.log(response)
            showSuccessMessage('Успешно разблокирован!')
            return response
        } catch (error) {
            return showErrorMessage('Что-то пошло не так')
        }
    }
)
