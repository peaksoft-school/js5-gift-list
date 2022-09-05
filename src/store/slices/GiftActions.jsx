import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch, appFetchFile } from '../../api/CustomFetch'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

export const postCharity = createAsyncThunk(
    'addCharity/post_Charity',
    // , { dispatch }
    async (props) => {
        // console.log(props)
        const formData = new FormData()
        try {
            formData.append('file', props.photo)

            const response = await appFetchFile({
                url: 'api/file/upload',
                body: formData,
            })
            // console.log(response)
            const post = await appFetch({
                method: 'POST',
                url: 'api/gifts',
                body: {
                    name: props.name,
                    photo: response?.link,
                    categoryId: props.categoryId,
                    subCategoryId: props.subCategoryId,
                    status: props.status,
                    description: props.description,
                },
            })
            // console.log(post)
            // dispatch(getCharity())
            showSuccessMessage('SUCCESS')
            return post
        } catch (error) {
            showErrorMessage('Failed')
            return error
        }
    }
)
export const getCharity = createAsyncThunk(
    'addCharity/getCharity',
    async (setCharity) => {
        const response = await appFetch({ url: 'api/gifts' })
        setCharity(response)
        return response
    }
)
export const getCategory = createAsyncThunk(
    'addCharity/getCategory',
    async (setData) => {
        const category = await appFetch({
            url: 'api/categories',
            method: 'GET',
        })
        setData(category)
        return category
    }
)
export const getSubCategory = createAsyncThunk(
    'addCharity/getSubCategory',
    async ({ id, setSubCategory }) => {
        const subCategory = await appFetch({
            url: `api/subCategories/${id}`,
            method: 'GET',
        })
        setSubCategory(subCategory)
        return subCategory
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
