import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'

export const mainSearchAction = createAsyncThunk(
    'users/mainSearchAction',
    async (value) => {
        const response = await appFetch({ url: `api/users/profile/${value}` })
        return response
    }
)
