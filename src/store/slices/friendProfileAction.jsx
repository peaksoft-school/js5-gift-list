import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

// import { friendsAction } from './friendTabAction'

export const getFriendPageAction = createAsyncThunk(
    'friend/friendProfileAction',
    async (userId) => {
        const response = await appFetch({
            url: `api/users/friends/profile/${userId}`,
        })
        return response
    }
)

export const friendDeleteAction = createAsyncThunk(
    'friend/friendDeleteAction',
    async (obj) => {
        const response = await appFetch({
            method: 'POST',
            url: `api/users/friends/${obj.friendId}`,
        })
        obj.dispatch(getFriendPageAction(obj.userId))
        return response
    }
)

export const addToFriendAction = createAsyncThunk(
    'requstToFrined/requstToFriendAction',
    async (obj) => {
        const response = await appFetch({
            method: 'POST',
            url: `api/users/friends/request/${obj.friendId}`,
        })
        obj.dispatch(getFriendPageAction(obj.userId))
        return response
    }
)

export const toBookWish = createAsyncThunk('toBook/toBookWish', async (obj) => {
    const response = await appFetch({
        method: 'POST',
        url: `api/bookings/wish-create/${obj.id}`,
    })
    obj.dispatch(getFriendPageAction(obj.userId))
    return response
})
export const cancelBookingWish = createAsyncThunk(
    'cancelBooking/cancelBookingWish',
    async (obj) => {
        const response = await appFetch({
            method: 'POST',
            url: `api/bookings/wish-cancel/${obj.id}`,
        })
        obj.dispatch(getFriendPageAction(obj.friendId))
        return response
    }
)

export const copmlainToWish = createAsyncThunk(
    'complain/copmlainToWish',
    async (obj) => {
        try {
            const response = await appFetch({
                method: 'POST',
                url: `api/complaints/wish/${obj.complaintId}?text=${obj.title}`,
            })
            showSuccessMessage('SuccessFull')
            return response
        } catch (error) {
            throw new Error(showErrorMessage('error'))
        }
    }
)

export const copmlainToGift = createAsyncThunk(
    'complain/copmlainToGift',
    async (obj) => {
        try {
            const response = await appFetch({
                method: 'POST',
                url: `api/complaints/gift/${obj.complaintId}?text=${obj.title}`,
            })
            showSuccessMessage('SuccessFull')
            return response
        } catch (error) {
            throw new Error(showErrorMessage('error'))
        }
    }
)
export const toBookGift = createAsyncThunk(
    'BookingGift/toBookGift',
    async (obj) => {
        const response = await appFetch({
            method: 'POST',
            url: `api/bookings/gift-create/${obj.id}`,
        })
        obj.dispatch(getFriendPageAction(obj.userId))
        return response
    }
)

export const cancelBookingGift = createAsyncThunk(
    'cancelBookingGift/cancelBookingGift',
    async (obj) => {
        const response = await appFetch({
            method: 'POST',
            url: `api/bookings/gift-cancel/${obj.id}`,
        })
        obj.dispatch(getFriendPageAction(obj.userId))
        return response
    }
)

export const addtoMyWish = createAsyncThunk(
    'addToMyWish/addToMyWish',
    async (obj) => {
        try {
            const response = await appFetch({
                method: 'POST',
                url: `api/wish/add/${obj.id}`,
            })
            showSuccessMessage('SuccessFull')
            obj.dispatch(getFriendPageAction(obj.userId))
            return response
        } catch (error) {
            throw new Error(showErrorMessage('error'))
        }
    }
)
