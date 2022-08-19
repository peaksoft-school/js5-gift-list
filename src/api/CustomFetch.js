import store from '../store'
import { URL_BASE } from '../utils/constants/Url'

export const appFetch = async (data) => {
    const { signUp } = store.getState()
    try {
        const requestOptions = {
            method: data.method || 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${signUp.user.jwt || ''}`,
            },
        }

        if (data.method !== 'GET' && data.body) {
            requestOptions.body = JSON.stringify(data.body)
        }
        const response = await fetch(URL_BASE + data.url, requestOptions)
        if (!response.ok) {
            throw response.message
        }
        return response.json()
    } catch (error) {
        return error
    }
}
export const appFetchFile = async (config) => {
    const { signUp } = store.getState()
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${signUp.user.jwt || ''}`,
            },
            body: config.body,
        }
        const response = await fetch(URL_BASE + config.url, requestOptions)
        if (!response.ok) {
            throw new Error(response.message)
        }
        return response.json()
    } catch (error) {
        return new Error(error.message)
    }
}