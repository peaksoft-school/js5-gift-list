import { createAsyncThunk } from '@reduxjs/toolkit'
import { format } from 'date-fns'

import { appFetch, appFetchFile } from '../../api/CustomFetch'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

export const addGift = createAsyncThunk(
    'addWishCard/fetchByIdStatus',
    async ({ wishPhoto, wishGift, dispatch }) => {
        const formData = new FormData()
        const date = format(wishGift.wishDate, 'yyyy-MM-dd')
        try {
            formData.set('file', wishPhoto)
            const response = await appFetchFile({
                url: 'api/file/upload',
                body: formData,
            })
            const responseAll = await appFetch({
                method: 'POST',
                url: 'api/wish',
                body: {
                    photo: response.link,
                    wishName: wishGift.wishName,
                    wishLink: wishGift.wishLink,
                    description: wishGift.description,
                    holidayId: wishGift.holidayId,
                    wishDate: date,
                },
            })
            if (!responseAll.wish) {
                showErrorMessage('error')
            }
            if (responseAll.wish) {
                showSuccessMessage('Успешно!')
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
        try {
            const deleteResponse = await appFetch({
                method: 'DELETE',
                url: `api/wish/${id}`,
            })
            showSuccessMessage('Успешно!')
            return deleteResponse
        } catch (error) {
            throw new Error(showErrorMessage('Что-то пошло не так'))
        }
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
        const date = format(object.wishGift.wishDate, 'yyyy-MM-dd')

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
                    wishDate: date,
                },
            })
            // console.log(response, 'hello')
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
