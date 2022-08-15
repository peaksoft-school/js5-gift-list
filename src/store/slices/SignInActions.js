import { appFetch } from '../../api/CustomFetch'
import { GIFTLIST_AUTH } from '../../utils/constants/constants'

import { actionAuth } from './AuthSlice'

export const singInActions = ({ userData, setError, memorizee }) => {
    return async (dispatch) => {
        try {
            const response = await appFetch({
                method: 'POST',
                url: 'api/public/login',
                body: userData,
            })
            setError(response.message)
            const users = {
                id: response.id,
                jwt: response.jwt,
                role: response.role,
                memorizee,
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
                    memorizee,
                    fisrtName: response.fisrtName,
                    lastName: response.lastName,
                })
            )
        } catch (error) {
            setError('не правильный пароль или логин')
        }
    }
}
