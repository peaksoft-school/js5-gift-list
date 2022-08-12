import { URL_BASE } from '../utils/constants/Url'

export const appFetch = async (data) => {
    console.log(data)
    try {
        const requestOptions = {
            method: data.method || 'GET',
            headers: {
                'Content-Type': 'application/json',
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
