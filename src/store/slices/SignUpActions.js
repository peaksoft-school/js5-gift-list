import { appFetch } from '../../api/CustomFetch'
import { GIFTLIST_AUTH } from '../../utils/constants/constants'

import { actionAuth } from './AuthSlice'

export const signUp = (userData) => {
    return async (dispatch) => {
        try {
            const response = await appFetch({
                method: 'POST',
                url: 'api/public/register',
                body: userData,
            })
            const users = {
                id: response.id,
                jwt: response.jwt,
                role: response.role,
                fisrtName: response.fisrtName,
                lastName: response.lastName,
            }
            const json = JSON.stringify(users)
            localStorage.setItem(GIFTLIST_AUTH, json)
            dispatch(
                actionAuth.baseAuth({
                    id: response.id,
                    jwt: response.jwt,
                    role: response.role,
                    fisrtName: response.fisrtName,
                    lastName: response.lastName,
                })
            )
        } catch (e) {
            throw new Error('Что-то пошло не так')
        }
    }
}
