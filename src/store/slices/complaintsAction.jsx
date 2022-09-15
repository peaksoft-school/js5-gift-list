import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'

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
    'complaintWish/getWishAction',
    async (giftId) => {
        console.log(giftId)
        const response = await appFetch({
            url: `api/complaints/gift/${giftId}`,
        })
        console.log(response)
        return response
    }
)
