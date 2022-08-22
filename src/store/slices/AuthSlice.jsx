import { createSlice } from '@reduxjs/toolkit'

import { DEFAULT_ROUTES, GIFTLIST_AUTH } from '../../utils/constants/constants'
import { store } from '../index'

export const logout = (navigateToIndex) => {
    localStorage.removeItem(GIFTLIST_AUTH)
    store.dispatch(actionAuth.logaut())
    navigateToIndex(DEFAULT_ROUTES.INDEX.PATH)
}

const initialState = {
    user: JSON.parse(localStorage.getItem(GIFTLIST_AUTH)) || {
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
export const authSlice = createSlice({
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
        logaut(state) {
            state.user.jwt = null
            state.user.email = null
            state.user.role = null
            state.user.firstName = null
            state.user.lastName = null
        },
    },
})
export const actionAuth = authSlice.actions
