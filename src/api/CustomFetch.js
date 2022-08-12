import store from '../store'
import { URL_BASE } from '../utils/constants/Url'

// eslint-disable-next-line consistent-return
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
            throw new Error(response.message)
        }
        return response.json()
    } catch (error) {
        return new Error(error.message)
    }
}

export const formData = async (data) => {
    const { signUp } = store.getState()
    try {
        const requestOptions = {
            method: data.method || 'GET',
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${signUp.user.jwt || ''}`,
            },
        }

        if (data.method !== 'GET' && data.body) {
            // requestOptions.body = JSON.stringify(data.body)
        }
        const response = await fetch(URL_BASE + data.url, requestOptions)
        if (!response.ok) {
            throw new Error(response.message)
        }
        return response.json()
    } catch (error) {
        return new Error(error.message)
    }
}
