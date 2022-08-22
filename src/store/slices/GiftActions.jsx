import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch, appFetchFile } from '../../api/CustomFetch'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

export const postCharity = createAsyncThunk(
    'addCharity/post_Charity',
    async (props, { dispatch }) => {
        const formData = new FormData()
        try {
            formData.append('file', props.photo)

            const response = await appFetchFile({
                url: 'api/file/upload',
                body: formData,
            })
            const data = { ...props }
            data.photo = response?.link
            const post = await appFetch({
                method: 'POST',
                body: {
                    ...data,
                },
                url: 'api/gifts',
            })
            showSuccessMessage('successfully')
            dispatch(getCharity())
            return post
        } catch (error) {
            showErrorMessage('Failed')
            return error
        }
    }
)
export const getCharity = createAsyncThunk(
    'addCharity/getCharity',
    async () => {
        const response = await appFetch({ url: 'api/gifts' })
        const data = response
        return data
    }
)
export const getSingleCharityById = createAsyncThunk(
    'addCharity/charityById',
    async (id) => {
        const response = await appFetch({ url: `api/gifts/${id}` })
        return response
    }
)
export const putCharity = createAsyncThunk(
    'addCharity/putCharity',
    async (obj) => {
        const formData = new FormData()
        try {
            const charityResponse = {}
            if (obj.body.bool) {
                formData.set('file', obj.body.bool)
                charityResponse.link = await appFetchFile({
                    url: 'api/file/upload',
                    body: formData,
                })
            }
            if (!obj.body.bool) {
                charityResponse.link = obj.body.photo
            }
            const response = await appFetch({
                method: 'PUT',
                url: `api/gifts/${obj.id}`,
                body: {
                    name: obj.body.name,
                    date: obj.body.date,
                    photo: obj.body.bool
                        ? charityResponse.link.link
                        : charityResponse.link,
                },
            })
            return response
        } catch (error) {
            return error.message
        }
    }
)
