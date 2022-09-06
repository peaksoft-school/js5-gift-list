import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

import { requestsToFriendAction, friendsAction } from './friendTabAction'

export const friendProfileAction = createAsyncThunk(
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
        obj.dispatch(friendsAction())
        return response
    }
)

export const addToRequestFriendAction = createAsyncThunk(
    'requstToFrined/requstToFriendAction',
    async (obj) => {
        const response = await appFetch({
            method: 'POST',
            url: `api/users/friends/request/${obj.friendId}`,
        })
        obj.dispatch(requestsToFriendAction())
        return response
    }
)

export const toBookWish = createAsyncThunk('toBook/toBookWish', async (obj) => {
    // console.log(id)
    const response = await appFetch({
        method: 'POST',
        url: `api/bookings/wish-create/${obj.id}`,
    })
    obj.dispatch(friendProfileAction(obj.userId))
    return response
})
export const cancelBookingWish = createAsyncThunk(
    'cancelBooking/cancelBookingWish',
    async (obj) => {
        const response = await appFetch({
            method: 'POST',
            url: `api/bookings/wish-cancel/${obj.id}`,
        })
        obj.dispatch(friendProfileAction(obj.friendId))
        return response
    }
)

// export const addToMyWish = createAsyncThunk(
//     'addToMyWish/addToMyWish',
//     async (obj) => {
//         const response = await appFetch({
//             method: 'POST',
//             url: `api/wish/add/${obj.id}`,
//         })
//         obj.dispatch(friendProfileAction(obj.friendId))
//         return response
//     }
// )

// export const copmlainToWish = createAsyncThunk(
//     'complain/copmlainToWish',
//     async (obj) => {
//         // console.log(obj.idRep, obj.title)
//         console.log(typeof obj.title)
//         const response = await appFetch({
//             method: 'POST',
//             url: `api/complaints/wish/${obj.idRep}`,
//             body: obj.title,
//         })
//         console.log(response)
//         return response
//     }
// )

export const copmlainToWish = createAsyncThunk(
    'complain/copmlainToWish',
    async (obj) => {
        try {
            const response = await appFetch({
                method: 'POST',
                url: `api/complaints/wish/${obj.idRep}`,
            })
            showSuccessMessage('SuccessFull')
            return response
        } catch (error) {
            throw new Error(showErrorMessage('error'))
        }
    }
)

export const copmlainToGift = createAsyncThunk(
    'complain/copmlainToWish',
    async (id, title) => {
        console.log(title)
        const response = await appFetch({
            method: 'POST',
            url: `api/complaints/gift/${id}`,
            body: title,
        })
        console.log(response)
        return response
    }
)
export const toBookGift = createAsyncThunk(
    'BookingGift/toBookGift',
    async (obj) => {
        const response = await appFetch({
            method: 'POST',
            url: `api/bookings/gift-create/${obj.id}`,
        })
        obj.dispatch(friendProfileAction(obj.userId))
        console.log(response)
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
        obj.dispatch(friendProfileAction(obj.userId))
        console.log(response)
        return response
    }
)

export const addtoMyWish = createAsyncThunk(
    'addToMyWish/addToMyWish',
    async (id) => {
        try {
            const response = await appFetch({
                method: 'POST',
                url: `api/wish/add/${id}`,
            })
            showSuccessMessage('SuccessFull')
            return response
        } catch (error) {
            throw new Error(showErrorMessage('error'))
        }
    }
)
