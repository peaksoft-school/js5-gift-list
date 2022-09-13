import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../../api/CustomFetch'
import { showSuccessMessage } from '../../../utils/helpers'

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async () => {
        try {
            const response = await appFetch({
                url: 'api/categories',
            })
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)
export const getSubCategories = createAsyncThunk(
    'subCategories/getSubCategories',
    async (id) => {
        try {
            const response = appFetch({
                url: `api/subCategories/${id}`,
            })
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)
export const getCharitiesWithFilter = createAsyncThunk(
    'charities/getCharitiesWithFilter',
    async (requestSetting) => {
        try {
            const response = await appFetch({
                url: `api/gifts/filter?${requestSetting}`,
            })
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)
export const getGiftsById = createAsyncThunk(
    'giftById/getGiftsById',
    async (id, { rejectWithValue }) => {
        try {
            const response = await appFetch({
                url: `api/gifts/${id}`,
            })
            return response
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const toBlockGifts = createAsyncThunk(
    'toBlock/toBlockGifts',
    async ({ id, dispatch, userId }) => {
        try {
            const response = await appFetch({
                method: 'PUT',
                url: `api/admin/blockGift/${id}`,
            })
            showSuccessMessage('успешно Заблокировать!')
            dispatch(getCharitiesWithFilter())
            dispatch(getGiftsById(userId))
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)
export const toUnBlockGifts = createAsyncThunk(
    'toUnBlock/toUnBlockGifts',
    async ({ id, userId, dispatch }) => {
        try {
            const response = await appFetch({
                method: 'PUT',
                url: `api/admin/unBlockGift/${id}`,
            })
            showSuccessMessage('успешно Разблокировать!')
            dispatch(getCharitiesWithFilter())
            dispatch(getGiftsById(userId))
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)
