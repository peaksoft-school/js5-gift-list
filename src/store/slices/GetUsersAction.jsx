// import { createAsyncThunk } from '@reduxjs/toolkit'
// // eslint-disable-next-line import/no-cycle
// import { appFetch } from '../../api/CustomFetch'
// export const getUserAction = createAsyncThunk('getUser/fetchById', async () => {
//     const response = await appFetch({ url: 'api/admin/users' })
//     console.log(response)
// })

import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch } from '../../api/CustomFetch'

export const getUsersAction = createAsyncThunk(
    'users/getUsersAction',
    async (value) => {
        console.log(value)
        const response = await appFetch({ url: `api/users/profile/${value}` })
        // console.log(response)
        // setUser(response)
        return response
    }
)
