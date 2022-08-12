import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch, formData } from '../../api/CustomFetch'

export const addGift = createAsyncThunk(
    'addWishCard/fetchByIdStatus',
    async ({ imageGift, wishGift }) => {
        console.log(wishGift)
        try {
            const file = new FormData()
            file.append('file', imageGift)
            console.log(file)
            const responseImg = await formData({
                method: 'POST',
                url: `api/files/{userProfileId}/image/upload`,
                body: file,
            })
            const response = await appFetch({
                method: 'POST',
                url: 'api/wish',
                body: wishGift,
            })
            console.log(response)
            // const response = await appFetch({
            //     method: 'POST',
            //     url: 'api/wish',
            //     body: giftData,
            // })
            return responseImg
            // console.log(response)
        } catch (e) {
            throw new Error('Что-то пошло не так')
        }
    }
)
