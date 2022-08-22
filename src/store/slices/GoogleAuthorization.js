import { appFetch } from '../../api/CustomFetch'
import signInWithGoogle from '../../firebase/Firebase'
import { GIFTLIST_AUTH } from '../../utils/constants/constants'

import { actionsignUp } from './SignUpSlice'

export const googleAuthorization = () => {
    return async (dispatch) => {
        try {
            const user = await signInWithGoogle()

            const response = await appFetch({
                method: 'POST',
                url: `api/public/auth/google?token=${user.accessToken}`,
            })
            console.log(response)
            const users = {
                id: response.id,
                jwt: response.jwt,
                role: response.role,
                email: response.email,
            }
            const json = JSON.stringify(users)
            localStorage.setItem(GIFTLIST_AUTH, json)
            dispatch(
                actionsignUp.baseSignUp({
                    id: response.id,
                    jwt: response.jwt,
                    role: response.role,
                    email: response.email,
                })
            )
        } catch (e) {
            throw new Error('Что-то пошло не так')
        }
    }
}
