import { createSlice } from '@reduxjs/toolkit'

import { getUsersAction } from './getUsersAction'

const initialState = { result: null, status: null }
const getUserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [getUsersAction.fulfilled]: (state, action) => {
            state.result = action.payload
            console.log(action.payload)
            state.status = 'success'
        },
    },
})
export const getUserSliceActions = getUserSlice.actions
export default getUserSlice

// import { createSlice } from '@reduxjs/toolkit'

// import { GetUsersAction } from './GetUsersAction'

// const initialState = { users: [], status: null }

// const GetUsersSlice = createSlice({
//     name:'users',
//     initialState,
//     reducers{},
//     extraReducers:{
//         [GetUsersAction.fulfilled]:(state, action) =>{
//             state.users = action.payload
//             state.status = 'success'
//         },
//     },
// })

// export const GetUSersSliceAction = GetUsersSlice.actions
// export default GetUsersSlice
