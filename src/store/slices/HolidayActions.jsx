import { createAsyncThunk } from '@reduxjs/toolkit'
import { format } from 'date-fns'

// eslint-disable-next-line import/no-cycle
import { appFetch, appFetchFile } from '../../api/CustomFetch'
import { showErrorMessage, showSuccessMessage } from '../../utils/helpers'

export const postHoliday = createAsyncThunk(
    'holiday/postHoliday',
    async (props, { dispatch }) => {
        const formatDate = format(props.date, 'yyyy-MM-dd')
        const formData = new FormData()
        try {
            formData.set('file', props.photo)
            const fileResponse = await appFetchFile({
                url: 'api/file/upload',
                body: formData,
            })

            const response = await appFetch({
                method: 'POST',
                url: 'api/holiday',
                body: {
                    date: formatDate,
                    name: props.holidayName,
                    photo: fileResponse.link,
                },
            })
            props.onClose()
            showSuccessMessage('Успешно добавлен')
            dispatch(getHoliday())
            return response
        } catch (error) {
            showErrorMessage('Вышла ошибка!')
            throw new Error(error.message)
        }
    }
)
export const getHoliday = createAsyncThunk('holiday/getHoliday', async () => {
    const response = await appFetch({ url: 'api/holiday' })
    return response
})
export const getHolidayById = createAsyncThunk(
    'holiday/singleHolidayById',
    async (id) => {
        const response = await appFetch({ url: `api/holiday/${id}` })
        return response
    }
)

export const putHoliday = createAsyncThunk(
    'holiday/putHoliday',
    async (obj, { dispatch }) => {
        const formatDate = format(obj.body.date, 'yyyy-MM-dd')
        const formData = new FormData()
        try {
            const holidayResponse = {}
            if (obj.body.photo.name) {
                formData.set('file', obj.body.photo)
                holidayResponse.link = await appFetchFile({
                    url: 'api/file/upload',
                    body: formData,
                })
            }
            const response = await appFetch({
                method: 'PUT',
                url: `api/holiday/${obj.id}`,
                body: {
                    name: obj.body.name,
                    date: formatDate,
                    photo: obj.body.photo.name
                        ? holidayResponse.link.link
                        : obj.body.photo,
                },
            })
            dispatch(getHoliday())
            obj.onClose()
            showSuccessMessage('Успешно изменен')
            return response
        } catch (error) {
            showErrorMessage('Вышла ошибка!')
            throw new Error(error.message)
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
            throw new Error(error.message)
        }
    }
)
