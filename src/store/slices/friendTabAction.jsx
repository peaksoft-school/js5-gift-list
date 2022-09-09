import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'

import { getFriendProfileAction } from './friendProfileAction'

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

export const getFriendsAction = createAsyncThunk(
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
        const response = await appFetch({
            method: 'POST',
            url: `api/users/friends/accept/${obj.id}`,
        })
        obj.dispatch(requestsToFriendAction())
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
        obj.dispatch(getFriendProfileAction(obj.userId))
        return response
    }
)

export const rejectRequestToFriendAction = createAsyncThunk(
    'rejectRequest/rejectRequestToFriendAction',
    async (obj) => {
        const response = await appFetch({
            method: 'POST',
            url: `api/users/friends/reject/${obj.id}`,
        })
        obj.dispatch(requestsToFriendAction())
        return response
    }
)
export const rejectRequestToFriendActionInnerPage = createAsyncThunk(
    'rejectRequest/rejectRequestToFriendAction',
    async (obj) => {
        const response = await appFetch({
            method: 'POST',
            url: `api/users/friends/reject/${obj.userId}`,
        })
        obj.dispatch(getFriendProfileAction(obj.userId))
        return response
    }
)
