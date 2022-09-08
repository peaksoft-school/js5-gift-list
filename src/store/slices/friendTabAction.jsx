import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'

import { getFriendPageAction } from './friendProfileAction'

export const requestsToFriendAction = createAsyncThunk(
    'requestToFriend/getRequestToFriendAction',
    async (setRequestToFriend) => {
        const response = await appFetch({
            url: `api/users/friends/requests`,
        })
        setRequestToFriend(response)
        return response
    }
)

export const friendsAction = createAsyncThunk(
    'friends/getAllUsersAction',
    async (setUser) => {
        const response = await appFetch({ url: `api/users/friends` })
        setUser(response)
        return response
    }
)

export const acceptRequestToFriend = createAsyncThunk(
    'acceptReques/acceptRequestToFrined',
    async (obj) => {
        console.log(obj.id)
        const response = await appFetch({
            method: 'POST',
            url: `api/users/friends/accept/${obj.id}`,
        })
        obj.dispatch(requestsToFriendAction())
        // obj.dispatch(getFriendPageAction(obj.userId))
        console.log(response)
        return response
    }
)
export const acceptRequestToFriendInnerPage = createAsyncThunk(
    'acceptReques/acceptRequestToFrined',
    async (obj) => {
        const response = await appFetch({
            method: 'POST',
            url: `api/users/friends/accept/${obj.userId}`,
        })
        // obj.dispatch(requestsToFriendAction())
        obj.dispatch(getFriendPageAction(obj.userId))
        console.log(response)
        return response
    }
)

export const rejectRequestToFriendAction = createAsyncThunk(
    'rejectRequest/rejectRequestToFriendAction',
    async (obj) => {
        console.log(obj.id)
        const response = await appFetch({
            method: 'POST',
            url: `api/users/friends/reject/${obj.id}`,
        })
        // dispatch(friendsAction())
        obj.dispatch(requestsToFriendAction())
        // obj.dispatch(getFriendPageAction(obj.userId))
        console.log(response)
        return response
    }
)
export const rejectRequestToFriendActionInnerPage = createAsyncThunk(
    'rejectRequest/rejectRequestToFriendAction',
    async (obj) => {
        console.log(obj.userId)
        const response = await appFetch({
            method: 'POST',
            url: `api/users/friends/reject/${obj.userId}`,
        })
        // dispatch(friendsAction())
        // obj.dispatch(requestsToFriendAction())
        obj.dispatch(getFriendPageAction(obj.userId))
        console.log(response)
        return response
    }
)
