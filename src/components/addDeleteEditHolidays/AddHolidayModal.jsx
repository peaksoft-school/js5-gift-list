import React, { useState } from 'react'

import styled from '@emotion/styled'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { postHoliday } from '../../store/slices/HolidayActions'
import BasicModal from '../ui/BasicModal'
import Button from '../ui/Button'
import ViewsDatePicker from '../ui/datePicker/ViewsDatePicker'
import ImagePicker from '../ui/ImagePicker'
import Input from '../ui/Input'

const AddHolidayModal = (props) => {
    const { open, onClose } = props
    const [photo, setPhoto] = useState(null)
    const [name, setName] = useState('')
    const [holidayDate, setHolidayDate] = useState(null)

    const dispatch = useDispatch()

    const onChangeImageValue = (file) => {
        if (file.size <= 1000000) {
            setPhoto(file)
        }
    }
    const onChangeInputValue = (e) => {
        setName(e.target.value)
    }
    const onChangeDateValue = (date) => {
        const newDate = moment(date).format('YYYY-MM-DD')
        setHolidayDate(newDate)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        if (holidayDate === null || name === '') {
            return
        }
        dispatch(postHoliday({ photo, name, date: holidayDate }))
        onClose()
        setPhoto(null)
        setName('')
        setHolidayDate(null)
    }

    return (
        <div>
            <BasicModal open={open} onClose={onClose}>
                <ModalChildDiv>
                    <AddTitle>Добавление праздника</AddTitle>
                    <ImagePicker onChange={onChangeImageValue} />
                    <InModalChildDiv>
                        <LabelInputDiv>
                            <label htmlFor="Название праздника">
                                Название праздника
                            </label>
                            <Input
                                value={name}
                                onchange={onChangeInputValue}
                                type="text"
                                placeholder="Введите название праздника"
                            />
                        </LabelInputDiv>

                        <DateDiv>
                            <ViewsDatePicker
                                width="100%"
                                value={holidayDate}
                                onChange={onChangeDateValue}
                                label="Дата праздника"
                                placeholder="Укажите дату праздника"
                            />
                            <CancelAddDiv>
                                <Button variant="outlined" onClick={onClose}>
                                    Отмена
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={submitHandler}
                                >
                                    Добавить
                                </Button>
                            </CancelAddDiv>
                        </DateDiv>
                    </InModalChildDiv>
                </ModalChildDiv>
            </BasicModal>
        </div>
    )
}

export default AddHolidayModal

const ModalChildDiv = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const InModalChildDiv = styled('div')`
    display: flex;
    flex-direction: column;
`
const AddTitle = styled('p')`
    font-family: 'Inter' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin: 0px;
    margin-bottom: 24px;
    color: #23262f;
`

const LabelInputDiv = styled('div')`
    height: 56px;
    margin-top: 32px;
    margin-bottom: 24px;

    & label {
        padding: 0px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #464444;
    }
`

const CancelAddDiv = styled('div')`
    display: flex;
    justify-content: space-between;
    margin-top: 44px;
    & Button {
        width: 232px;
        height: 37px;
    }
`
const DateDiv = styled('div')`
    font-family: 'Inter', sans-serif;
`
