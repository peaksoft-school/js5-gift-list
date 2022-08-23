import { createAsyncThunk } from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-cycle
import { appFetch, appFetchFile } from '../../api/CustomFetch'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

export const postHoliday = createAsyncThunk(
    'holiday/postHoliday',
    async (props, { dispatch }) => {
        const formData = new FormData()
        try {
            formData.set('file', props.photo)
            const holidayResponse = await appFetchFile({
                url: 'api/file/upload',
                body: formData,
            })
            const response = await appFetch({
                method: 'POST',
                body: {
                    date: props.date,
                    name: props.name,
                    photo: holidayResponse?.link,
                },
                url: 'api/holiday',
            })
            showSuccessMessage('Успешно добавлен')
            dispatch(getHoliday())
            return response
        } catch (error) {
            showErrorMessage('Вышла ошибка!')
            return error
        }
    }
)
export const getHoliday = createAsyncThunk('holiday/getHoliday', async () => {
    const response = await appFetch({ url: 'api/holiday' })
    console.log(response)
    return response
})
export const getHolidayById = createAsyncThunk(
    'holiday/singleHolidayById',
    async (id) => {
        const response = await appFetch({ url: `api/holiday/${id}` })
        console.log(response)

        return response
    }
)

export const putHoliday = createAsyncThunk(
    'holiday/putHoliday',
    async (obj) => {
        const formData = new FormData()
        try {
            const holidayResponse = {}
            if (obj.body.bool) {
                formData.set('file', obj.body.photo)
                holidayResponse.link = await appFetchFile({
                    url: 'api/file/upload',
                    body: formData,
                })
            }
            if (!obj.body.bool) {
                holidayResponse.link = obj.body.photo
            }
            const response = await appFetch({
                method: 'PUT',
                url: `api/holiday/${obj.id}`,
                body: {
                    name: obj.body.name,
                    date: obj.body.date,
                    photo: obj.body.bool
                        ? holidayResponse.link.link
                        : holidayResponse.link,
                },
            })
            showSuccessMessage('Успешно изменен')
            console.log(response)

            return response
        } catch (error) {
            showErrorMessage('Вышла ошибка!')
            return error.message
        }
    }
)

export const deleteHoliday = createAsyncThunk(
    'holiday/deleteHoliday',
    async (id, { dispatch }) => {
        try {
            const resimg = await appFetch({
                url: `api/file/delete?fileLink=${id.link}`,
                method: 'DELETE',
            })
            const response = await appFetch({
                url: `api/holiday/${id.id}`,
                method: 'DELETE',
            })
            showSuccessMessage('Успешное удаление')
            dispatch(getHoliday())
            return {
                data: response,
                img: resimg,
            }
        } catch (error) {
            showErrorMessage('Вышла ошибка')
            return error.message
        }
    }
)
