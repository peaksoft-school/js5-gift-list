import { URL_BASE } from '../utils/constants/Url'

// eslint-disable-next-line consistent-return
export const appFetch = async (data) => {
    try {
        const requestOptions = {
            method: data.method || 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${data.token ? data.token : ''}`,
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
