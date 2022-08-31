import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch, appFetchFile } from '../../api/CustomFetch'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

export const addGift = createAsyncThunk(
    'addWishCard/fetchByIdStatus',
    async ({ photo, wishGift, dispatch }) => {
        const formData = new FormData()
        try {
            formData.set('file', photo)
            const response = await appFetchFile({
                url: 'api/file/upload',
                body: formData,
            })
            const responseAll = await appFetch({
                method: 'POST',
                url: 'api/wish',
                body: {
                    photo: response.link,
                    giftName: wishGift.giftName,
                    giftLink: wishGift.giftLink,
                    description: wishGift.description,
                    holidayName: wishGift.holidayName,
                    wishDate: wishGift.wishDate,
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
            if (object.isnewPhoto) {
                formData.set('file', object.photo)
                photoresponse.link = await appFetchFile({
                    url: `api/file/upload`,
                    body: formData,
                })
            }
            const response = await appFetch({
                method: 'PUT',
                url: `api/wish/${object.id}`,
                body: {
                    photo: object.isnewPhoto
                        ? photoresponse.link.link
                        : object.photo,
                    giftName: object.wishGift.giftName,
                    giftLink: object.wishGift.giftLink,
                    description: object.wishGift.description,
                    holidayName: object.wishGift.holidayName,
                    wishDate: object.wishGift.wishDate,
                },
            })
            return response
        } catch (error) {
            throw new Error('error')
        }
    }
)
