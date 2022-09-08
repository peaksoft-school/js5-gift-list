import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'

export const getAllComplaintsAction = createAsyncThunk(
    'complaints/getAllComplaints',
    async () => {
        const response = await appFetch({
            url: `api/complaints`,
        })
        return response
    }
)
