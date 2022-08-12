import { createSlice } from '@reduxjs/toolkit'

import { GIFTLIST_AUTH } from '../../utils/constants/constants'

const initialState = {
    user: JSON.parse(localStorage.getItem(GIFTLIST_AUTH)),
} && {
    user: {
        id: null,
        jwt: null,
        role: null,
        email: null,
    },
}
const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        baseSignUp(state, action) {
            const newItem = action.payload
            console.log(newItem)
            state.user.id = newItem.id
            state.user.jwt = newItem.jwt
            state.user.role = newItem.role
            state.user.email = newItem.email
        },
    },
})
export const actionsignUp = signUpSlice.actions
export default signUpSlice
