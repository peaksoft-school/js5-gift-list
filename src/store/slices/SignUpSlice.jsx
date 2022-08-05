import { createSlice } from '@reduxjs/toolkit'

const initialState = { user: JSON.parse(localStorage.getItem('sign up')) } || {
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
            state.user.id = newItem.id
            state.user.jwt = newItem.jwt
            state.user.role = newItem.role
            state.user.email = newItem.email
        },
    },
})
export const actionsignUp = signUpSlice.actions
export default signUpSlice
