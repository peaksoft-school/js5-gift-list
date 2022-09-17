import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch, appFetchFile } from '../../api/CustomFetch'
import { GIFTLIST_AUTH } from '../../utils/constants/constants'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

export const profileActions2 = ({
    basicInformation,
    dateOfBirth,
    navigate,
}) => {
    return async (dispatch) => {
        const formData = new FormData()
        try {
            const responseFile = {}
            if (basicInformation.photo.name) {
                formData.set('file', basicInformation.photo)
                responseFile.link = await appFetchFile({
                    url: 'api/file/upload',
                    body: formData,
                })
            }

            const response = await appFetch({
                url: 'api/users/profile/create',
                method: 'POST',
                body: {
                    firstName: basicInformation.firstName,
                    lastName: basicInformation.lastName,
                    email: basicInformation.email,
                    photo: basicInformation.photo.name
                        ? responseFile.link.link
                        : basicInformation.photo,
                    city: basicInformation.city,
                    dateOfBirth,
                    phoneNumber: basicInformation.phoneNumber,
                    clothingSize: basicInformation.clothingSize,
                    shoeSize: basicInformation.shoeSize,
                    hobby: basicInformation.hobby,
                    importantNote: basicInformation.importantNote,
                    instagramLink: basicInformation.instagramLink,
                    telegramLink: basicInformation.telegramLink,
                    facebookLink: basicInformation.facebookLink,
                    vkLink: basicInformation.vkLink,
                },
            })
            showSuccessMessage('SUCCESS')
            dispatch(profileGet())
            navigate()
            return response
        } catch (error) {
            showErrorMessage('ERROR')

            throw new Error('Что-то пошло не так')
        }
    }
}

export const profileGet = createAsyncThunk(
    'profile/fetchProfile',
    async function () {
        const local = JSON.parse(localStorage.getItem(GIFTLIST_AUTH))
        const user = await appFetch({
            url: 'api/users/profile/me',
        })
        // dispatch(actionAuth.getuser(user))
        localStorage.setItem(
            GIFTLIST_AUTH,
            JSON.stringify({
                ...local,
                firstName: user.firstName,
                lastName: user.lastName,
                photo: user.photo,
            })
        )
        return user
    }
)
export const editPost = ({ id, basicInformation, dateOfBirth, navigate }) => {
    console.log(basicInformation.photo)
    return async (dispatch) => {
        const formData = new FormData()
        try {
            const responseFile = {}
            if (basicInformation.photo.name) {
                formData.set('file', basicInformation.photo)
                responseFile.link = await appFetchFile({
                    url: 'api/file/upload',
                    body: formData,
                })
            }
            const response = await appFetch({
                url: `api/users/profile/edit/${id}`,
                method: 'POST',
                body: {
                    firstName: basicInformation.firstName,
                    lastName: basicInformation.lastName,
                    email: basicInformation.email,
                    photo: basicInformation.photo.name
                        ? responseFile.link.link
                        : basicInformation.photo,
                    city: basicInformation.city,
                    dateOfBirth,
                    phoneNumber: basicInformation.phoneNumber,
                    clothingSize: basicInformation.clothingSize,
                    shoeSize: basicInformation.shoeSize,
                    hobby: basicInformation.hobby,
                    importantNote: basicInformation.importantNote,
                    instagramLink: basicInformation.instagramLink,
                    telegramLink: basicInformation.telegramLink,
                    facebookLink: basicInformation.facebookLink,
                    vkLink: basicInformation.vkLink,
                },
            })
            showSuccessMessage('SUCCESS')

            dispatch(profileGet())
            navigate()

            return response
        } catch {
            showErrorMessage('ERROR')

            throw new Error('Что-то пошло не так')
        }
    }
}
export const passwordPost = ({ allPassword, setError, setChangePassword }) => {
    return async () => {
        try {
            const response = await appFetch({
                url: `api/users/profile/password`,
                method: 'POST',
                body: allPassword,
            })
            showSuccessMessage('SUCCESS')
            setChangePassword(false)
            console.log(response)
        } catch (error) {
            showErrorMessage('ERROR')
            setError('старый пароль  не правильный')
        }
    }
}
