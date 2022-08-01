import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}
const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        baseSignUp(state, action) {
            const newItem = action.payload
            state.items.push({
                id: newItem.id,
                jwt: newItem.jwt,
                role: newItem.role,
            })
        },
    },
})
export const actionsignUp = signUpSlice.actions
export default signUpSlice
