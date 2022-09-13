import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'

export const giftsComplaintsAction = createAsyncThunk(
    'complaints/giftsComplaints',
    async () => {
        const response = await appFetch({
            url: `api/complaints/gifts`,
        })
        return response
    }
)
export const wishesComplaintsAction = createAsyncThunk(
    'complaints/wisheComplaints',
    async () => {
        const response = await appFetch({
            url: `api/complaints/wishes`,
        })
        return response
    }
)
// export const deleteComplaintAction = createAsyncThunk(
//     'deleteComplaint/deleteComplaintAction',
//     async (obj) => {
//         console.log(obj.complaintId)
//         const response = await appFetch({
//             method: 'DELETE',
//             url: `api/complaints/${obj.complaintId}`,
//         })
//         obj.dispatch(getAllComplaintsAction())
//         // console.log(response)
//         return response
//     }
// )
