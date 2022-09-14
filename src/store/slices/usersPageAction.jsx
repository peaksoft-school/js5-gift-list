import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'
import { showSuccessMessage } from '../../utils/helpers'

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
                url: `api/admin/${id}`,
            })
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)
export const toBlockUser = createAsyncThunk(
    'toBlock/toBlockUser',
    async (id, { dispatch }) => {
        try {
            const response = await appFetch({
                method: 'PUT',
                url: `api/admin/blockUser/${id}`,
            })
            dispatch(getUserProfileWithId(id))
            showSuccessMessage('Успешно!')
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)
export const toUnBlockUser = createAsyncThunk(
    'toUnBlock/toUnBlockUser',
    async (id, { dispatch }) => {
        try {
            const response = await appFetch({
                method: 'PUT',
                url: `api/admin/unBlockUser/${id}`,
            })
            dispatch(getUserProfileWithId(id))
            showSuccessMessage('Успешно!')
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)
export const toBlockGift = createAsyncThunk(
    'blockGift/toBlockGift',
    async ({ id, dispatch }) => {
        try {
            const response = await appFetch({
                method: 'PUT',
                url: `api/admin/blockGift/${id}`,
            })
            dispatch(getAllUsers())
            showSuccessMessage('Успешно!')
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)
export const toUnBlockGift = createAsyncThunk(
    'unBlockGift/toUnBlockGift',
    async ({ id, dispatch }) => {
        try {
            const response = await appFetch({
                method: 'PUT',
                url: `api/admin/unBlockGift/${id}`,
            })
            dispatch(getAllUsers())
            showSuccessMessage('Успешно!')
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)
