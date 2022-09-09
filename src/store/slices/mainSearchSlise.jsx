import { createSlice } from '@reduxjs/toolkit'

import { mainSearchAction } from './mainSearchAction'

const initialState = { options: [], status: null }
const mainSearchSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [mainSearchAction.fulfilled]: (state, action) => {
            state.options = action.payload
            state.status = 'success'
        },
    },
})
export const mainSearchSliceActions = mainSearchSlice.actions
export default mainSearchSlice
