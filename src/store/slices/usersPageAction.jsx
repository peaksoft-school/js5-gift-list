import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'

export const getAllUsers = createAsyncThunk(
    'usersCard/getAllUsers',
    async () => {
        try {
            const response = await appFetch({
                url: 'api/admin/users',
            })
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)

export const getUserProfileWithId = createAsyncThunk(
    'userCard/getUserProfileWithId',
    async (id) => {
        try {
            const response = await appFetch({
                url: `api/admin/users/${id}`,
            })
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)
export const toBlockUser = createAsyncThunk(
    'toBlock/toBlockUser',
    async (obj) => {
        try {
            const response = await appFetch({
                method: 'PUT',
                url: `api/admin/users/block/${obj.id}`,
            })
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)
export const toUnBlockUser = createAsyncThunk(
    'toBlock/toBlockUser',
    async (obj) => {
        try {
            const response = await appFetch({
                method: 'PUT',
                url: `api/admin/users/unBlock/${obj.id}`,
            })
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)
