import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

import { getWishAction } from './HomePageActions'

// import { friendsAction } from './friendTabAction'

export const getFriendProfileAction = createAsyncThunk(
    'friend/friendProfileAction',
    async (userId) => {
        const response = await appFetch({
            url: `api/users/friends/profile/${userId}`,
        })
        return response
    }
)

export const deleteFriendAction = createAsyncThunk(
    'friend/friendDeleteAction',
    async (obj) => {
        const response = await appFetch({
            method: 'POST',
            url: `api/users/friends/${obj.friendId}`,
        })
        obj.dispatch(getFriendProfileAction(obj.userId))
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
        obj.dispatch(getFriendProfileAction(obj.userId))
        return response
    }
)

export const toBookWish = createAsyncThunk(
    'toBook/toBookWish',
    async (obj, { dispatch }) => {
        const response = await appFetch({
            method: 'POST',
            url: `api/bookings/wish-create/${obj.id}`,
        })
        dispatch(getWishAction())
        dispatch(getFriendProfileAction(obj.userId))
        return response
    }
)

export const cancelBookingWish = createAsyncThunk(
    'cancelBooking/cancelBookingWish',
    async (obj, { dispatch }) => {
        const response = await appFetch({
            method: 'POST',
            url: `api/bookings/wish-cancel/${obj.id}`,
        })
        dispatch(getWishAction())
        obj.dispatch(getFriendProfileAction(obj.friendId))
        return response
    }
)

export const copmlainToWish = createAsyncThunk(
    'complain/copmlainToWish',
    async (obj, { rejectWithValue }) => {
        try {
            const response = await appFetch({
                method: 'POST',
                url: `api/complaints/wish/${obj.complaintId}?text=${obj.title}`,
            })
            showSuccessMessage('Успешно отправлено')
            return response
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const copmlainToGift = createAsyncThunk(
    'complain/copmlainToGift',
    async (obj, { rejectWithValue }) => {
        try {
            const response = await appFetch({
                method: 'POST',
                url: `api/complaints/gift/${obj.complaintId}?text=${obj.title}`,
            })
            showSuccessMessage('Успешно отправлено')
            return response
        } catch (error) {
            return rejectWithValue(error)
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
        obj.dispatch(getFriendProfileAction(obj.userId))
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
        obj.dispatch(getFriendProfileAction(obj.userId))
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
            showSuccessMessage('Успешно добавлено')
            obj.dispatch(getFriendProfileAction(obj.userId))
            return response
        } catch (error) {
            throw new Error(showErrorMessage('Не удалось добавить'))
        }
    }
)
