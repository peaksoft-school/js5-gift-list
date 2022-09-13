import { createAsyncThunk } from '@reduxjs/toolkit'

import { appFetch, appFetchFile } from '../../api/CustomFetch'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

export const mailingAction = createAsyncThunk(
    'mailing/mailingAction',
    async (props) => {
        const formData = new FormData()
        try {
            formData.set('file', props.photo)
            const fileResponse = await appFetchFile({
                url: 'api/file/upload',
                body: formData,
            })
            const response = await appFetch({
                method: 'POST',
                url: 'api/mailing/send',
                body: {
                    photo: fileResponse.photo,
                    title: props.mailingTitle,
                    text: props.mailingText,
                },
            })
            props.onClose()
            showSuccessMessage('Успешно добавлен')
            return response
        } catch (error) {
            showErrorMessage('Вышла ошибка!')
            throw new Error(error.message)
        }
    }
)
