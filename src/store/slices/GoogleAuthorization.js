import { appFetch } from '../../api/CustomFetch'
import signInWithGoogle from '../../firebase/Firebase'
import { GIFTLIST_AUTH } from '../../utils/constants/constants'

import { actionAuth } from './AuthSlice'

export const googleAuthorization = () => {
    return async (dispatch) => {
        try {
            const user = await signInWithGoogle()

            const response = await appFetch({
                method: 'POST',
                url: `api/public/auth/google?token=${user.accessToken}`,
            })
            const users = {
                id: response.id,
                jwt: response.jwt,
                role: response.role,
                email: response.email,
                firstName: response.firstName,
                lastName: response.lastName,
                photo: response.photo,
            }
            console.log(response)
            const json = JSON.stringify(users)
            localStorage.setItem(GIFTLIST_AUTH, json)
            dispatch(
                actionAuth.baseAuth({
                    id: response.id,
                    jwt: response.jwt,
                    role: response.role,
                    email: response.email,
                    firstName: response.firstName,
                    lastName: response.lastName,
                    photo: response.photo,
                })
            )
        } catch (e) {
            throw new Error('Что-то пошло не так')
        }
    }
}
