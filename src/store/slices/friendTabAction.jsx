import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'

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
        const response = await appFetch({
            method: 'POST',
            url: `api/users/friends/accept/${obj.id}`,
        })
        obj.dispatch(requestsToFriendAction())
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
