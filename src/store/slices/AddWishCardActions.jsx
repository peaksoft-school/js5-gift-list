import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch, appFetchFile } from '../../api/CustomFetch'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

export const addGift = createAsyncThunk(
    'addWishCard/fetchByIdStatus',
    async ({ wishPhoto, wishGift, dispatch }) => {
        const formData = new FormData()
        const a = []
        try {
            if (wishPhoto) {
                formData.set('file', wishPhoto)
                const response = await appFetchFile({
                    url: 'api/file/upload',
                    body: formData,
                })
                a.push(response)
            }
            const responseAll = await appFetch({
                method: 'POST',
                url: 'api/wish',
                body: {
                    photo: wishPhoto ? a[0].link : null,
                    wishName: wishGift.wishName,
                    wishLink: wishGift.wishLink,
                    description: wishGift.description,
                    holidayId: wishGift.holidayId,
                    wishDate: '2022-09-01',
                },
            })
            if (!responseAll.wish) {
                showErrorMessage('error')
            }
            if (responseAll.wish) {
                showSuccessMessage('успешно!')
            }
            dispatch(getWishGift())
            return responseAll
        } catch (e) {
            throw showErrorMessage('Что-то пошло не так')
        }
    }
)

export const getWishGift = createAsyncThunk('get/wishGift', async () => {
    try {
        const getResponse = await appFetch({
            url: 'api/wish',
        })
        return getResponse
    } catch (error) {
        throw new Error('Что-то пошло не так')
    }
})

export const deleteWishGift = createAsyncThunk(
    'delete/wishGift',
    async (id) => {
        const deleteResponse = await appFetch({
            method: 'DELETE',
            url: `api/wish/${id}`,
        })
        return deleteResponse
    }
)

export const getWishWithId = createAsyncThunk(
    'wishCard/getWishWithId',
    async (id) => {
        const response = await appFetch({
            url: `api/wish/${id}`,
        })
        return response
    }
)

export const putWishCard = createAsyncThunk(
    'wishCard/putWishCard',
    async (object) => {
        const formData = new FormData()
        try {
            const photoresponse = {}
            if (object.wishPhoto.name) {
                formData.set('file', object.wishPhoto)
                photoresponse.link = await appFetchFile({
                    url: `api/file/upload`,
                    body: formData,
                })
            }
            const response = await appFetch({
                method: 'PUT',
                url: `api/wish/${object.id}`,
                body: {
                    photo: object.wishPhoto.name
                        ? photoresponse.link.link
                        : object.wishPhoto,
                    wishName: object.wishGift.wishName,
                    wishLink: object.wishGift.wishLink,
                    description: object.wishGift.description,
                    holidayId: object.wishGift.holidayId,
                    wishDate: '2022-09-01',
                },
            })
            object.dispatch(getWishGift())
            return response
        } catch (error) {
            throw new Error('Что-то пошло не так')
        }
    }
)

export const getHolidaysToSelect = createAsyncThunk(
    'holiday/getHolidayName',
    async () => {
        const response = await appFetch({
            url: 'api/holiday',
        })
        return response
    }
)
