import { createSlice } from '@reduxjs/toolkit'

import { GIFTLIST_AUTH } from '../../utils/constants/constants'

const initialState = {
    user: JSON.parse(localStorage.getItem(GIFTLIST_AUTH)),
} || {
    user: {
        id: null,
        jwt: null,
        role: null,
        email: null,
        memorize: null,
        firstName: null,
        lastName: null,
        photo: null,
    },
}
const AuthSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        baseAuth(state, action) {
            const newItem = action.payload
            state.user.id = newItem.id
            state.user.jwt = newItem.jwt
            state.user.role = newItem.role
            state.user.email = newItem.email
            state.user.memorize = newItem.memorizee
            state.user.firstName = newItem.firstName
            state.user.lastName = newItem.lastName
            state.user.photo = newItem.photo
        },
    },
})
export const actionAuth = AuthSlice.actions
export default AuthSlice
