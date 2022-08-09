import { appFetch } from '../../api/CustomFetch'
import { GIFTLIST_AUTH } from '../../utils/constants/constants'

import { actionsignUp } from './SignUpSlice'

export const singInActions = ({ userData, setError }) => {
    return async (dispatch) => {
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
        }

        const json = JSON.stringify(users)
        localStorage.setItem(GIFTLIST_AUTH, json)
        dispatch(
            actionsignUp.baseSignUp({
                id: response.id,
                jwt: response.jwt,
                role: response.role,
            })
        )
    }
}
