import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch, appFetchFile } from '../../api/CustomFetch'
import { GIFTLIST_AUTH } from '../../utils/constants/constants'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

export const profileActions = createAsyncThunk(
    'profile/addProfile',
    async function ({ basicInformation, dateOfBirth }, { dispatch }) {
        try {
            const formData = new FormData()
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
            const local = JSON.parse(localStorage.getItem(GIFTLIST_AUTH))

            localStorage.setItem(
                GIFTLIST_AUTH,
                JSON.stringify({
                    ...local,
                    firstName: basicInformation.firstName,
                    lastName: basicInformation.lastName,
                    photo: responseFile?.link.link,
                })
            )
            showSuccessMessage('Успешно добавлено')
            dispatch(profileGet())
            return response
        } catch {
            showErrorMessage('Вышла ошибка!')

            throw new Error('Что-то пошло не так')
        }
    }
)

export const profileGet = createAsyncThunk(
    'profile/fetchProfile',
    async function () {
        const user = await appFetch({
            url: 'api/users/profile/me',
        })
        return user
    }
)
export const editProfile = createAsyncThunk(
    'edit/profile',
    async function (
        { id, basicInformation, dateOfBirth, navigate },
        { dispatch }
    ) {
        const formData = new FormData()

        try {
            const local = JSON.parse(localStorage.getItem(GIFTLIST_AUTH))

            const responseFile = {}
            if (basicInformation.photo.name) {
                formData.set('file', basicInformation.photo)
                responseFile.link = await appFetchFile({
                    url: 'api/file/upload',
                    body: formData,
                })
            }
            const updatedDateOfBirth = dateOfBirth
                .split('.')
                .reverse()
                .join('-')
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
                    dateOfBirth: updatedDateOfBirth,
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
            localStorage.setItem(
                GIFTLIST_AUTH,
                JSON.stringify({
                    ...local,
                    firstName: basicInformation.firstName,
                    lastName: basicInformation.lastName,
                    photo: responseFile?.link.link,
                })
            )
            showSuccessMessage('Успешно редактирован!')

            dispatch(profileGet())
            navigate()

            return response
        } catch {
            showErrorMessage('Вышла ошибка!')
            throw new Error('Что-то пошло не так')
        }
    }
)

export const passwordPost = createAsyncThunk(
    'password/newPassword',
    async ({ allPassword }) => {
        try {
            const response = await appFetch({
                url: `api/users/profile/password`,
                method: 'POST',
                body: allPassword,
            })
            showSuccessMessage('пароль изменен ')

            return response
        } catch (error) {
            throw new Error('старый пароль  не правильный')
        }
    }
)
