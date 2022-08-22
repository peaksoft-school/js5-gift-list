import { store } from '../store'
import { URL_BASE } from '../utils/constants/Url'

// let store
// export const injectStore = (_store) => {
//     store = _store
// }

export const appFetch = async (data) => {
    const { authSlice } = store.getState()
    try {
        const requestOptions = {
            method: data.method || 'GET',
            headers: authSlice.user.jwt
                ? {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${authSlice.user.jwt}`,
                  }
                : {
                      'Content-Type': 'application/json',
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
export const appFetchFile = async (photo) => {
    console.log(photo)
    const { authSlice } = store.getState()
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${authSlice.user.jwt}`,
            },
            body: photo.body,
        }
        const response = await fetch(URL_BASE + photo.url, requestOptions)
        if (!response.ok) {
            throw new Error(response.message)
        }
        return response.json()
    } catch (error) {
        return new Error(error.message)
    }
}
