import { appFetch } from '../../api/CustomFetch'
import signInWithGoogle from '../../firebase/Firebase'

import { actionsignUp } from './SignUpSlice'

export const GoogleAuthorization = () => {
    return async (dispatch) => {
        try {
            const user = await signInWithGoogle()

            const response = await appFetch({
                method: 'POST',
                url: `api/public/auth/google?token=${user.accessToken}`,
                token: user.accessToken,

                // body:
            })
            console.log(response)
            const users = {
                id: response.id,
                jwt: response.jwt,
                role: response.role,
                email: response.email,
            }
            const json = JSON.stringify(users)
            localStorage.setItem('sign up', json)
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
