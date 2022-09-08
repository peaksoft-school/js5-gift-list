import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'

export const getAllUsers = createAsyncThunk(
    'usersCard/getAllUsers',
    async () => {
        try {
            const response = await appFetch({
                url: 'api/admin/users',
            })
            console.log('test1')
            console.log(response)
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)

export const getUserProfileWithId = createAsyncThunk(
    'userCard/getUserProfileWithId',
    async () => {
        try {
            const response = await appFetch({
                url: `api/admin/users/${'2'}`,
            })
            // console.log(response, 'one')
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
)
