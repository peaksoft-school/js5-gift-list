// import React, { useState, useEffect } from 'react'
import React, { useState, useEffect } from 'react'

import styled from '@emotion/styled'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { putHoliday } from '../../store/slices/HolidayActions'
import { clearHoliday } from '../../store/slices/HolidaySlice'
import BasicModal from '../ui/BasicModal'
import Button from '../ui/Button'
import ViewsDatePicker from '../ui/datePicker/ViewsDatePicker'
import ImagePicker from '../ui/ImagePicker'
import Input from '../ui/Input'

const EditHolidaysModal = (props) => {
    const { open, onClose } = props
    const [prevHolidayDate, setPrevHolidayDate] = useState('')
    const [prevImage, setPrevImage] = useState(null)
    const [prevName, setPrevName] = useState('')
    const [imglink, setimglink] = useState(null)
    const [oldPhotoBoolean, setOldPhotoBoolean] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        setPrevHolidayDate(props.data.holidayDate)
        setPrevName(props.data.name)
        setimglink(props.data.photo)
    }, [props.data.name])

    const booleanValue = (e) => {
        setOldPhotoBoolean(e)
    }

    const editCardHandler = () => {
        const newDate = moment(prevHolidayDate).format('YYYY-MM-DD')
        dispatch(
            putHoliday({
                id: props.data.id,
                body: {
                    bool: oldPhotoBoolean,
                    photo: oldPhotoBoolean ? prevImage : props.data.photo,
                    name: prevName,
                    date: newDate,
                },
            })
        )
        onClose()
    }

    useEffect(() => {
        return () => dispatch(clearHoliday())
    }, [])

    return (
        <div>
            <BasicModal open={open} onClose={onClose}>
                <ModalChildDiv>
                    <AddTitle>Редактировать праздник</AddTitle>
                    <ImagePicker
                        onChange={setPrevImage}
                        newFile={prevImage}
                        value={imglink}
                        oldPhotoBoolean={booleanValue}
                    />
                    <InModalChildDiv>
                        <LabelInputDiv>
                            <label htmlFor="Название праздника">
                                Название праздника
                            </label>
                            <Input
                                onchange={(e) => setPrevName(e.target.value)}
                                value={prevName}
                                type="text"
                                placholder="Введите название праздника"
                            />
                        </LabelInputDiv>

                        <div>
                            <ViewsDatePicker
                                width="100%"
                                value={prevHolidayDate}
                                onChange={(newValue) => {
                                    setPrevHolidayDate(newValue)
                                }}
                                label="Дата праздника"
                                placeholder="Укажите дату праздника"
                            />
                            <CancelAddDiv>
                                <Button variant="outlined" onClick={onClose}>
                                    Отмена
                                </Button>
                                <Button
                                    onClick={editCardHandler}
                                    variant="contained"
                                >
                                    Сохранить
                                </Button>
                            </CancelAddDiv>
                        </div>
                    </InModalChildDiv>
                </ModalChildDiv>
            </BasicModal>
        </div>
    )
}

export default EditHolidaysModal

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
