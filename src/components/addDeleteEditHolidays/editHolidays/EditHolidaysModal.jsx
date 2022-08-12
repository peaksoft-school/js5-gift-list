// import React, { useState, useEffect } from 'react'
import React from 'react'

import styled from '@emotion/styled'
// import { useDispatch } from 'react-redux'

// import { putHoliday } from '../../../store/slices/HolidaySlice'
import BasicModal from '../../ui/BasicModal'
import Button from '../../ui/Button'
import ViewsDatePicker from '../../ui/datePicker/ViewsDatePicker'
import ImagePicker from '../../ui/ImagePicker'
import Input from '../../ui/Input'

const EditHolidaysModal = (props) => {
    const { open, onClose } = props
    // console.log(props.data)
    // const [holidayDate, setHolidayDate] = useState('')
    // const [editImage, setEditImage] = useState('')
    // const [editName, setEditName] = useState('')
    // useEffect(() => {
    //     setHolidayDate(props.data?.holidayDate)
    //     setEditImage(props.data?.photo)
    //     setEditName(props.data?.name)
    // }, [])

    // const dispatch = useDispatch()
    // console.log(editName)
    // const editCardHandler = () => {
    //     dispatch(
    //         putHoliday({
    //             id: props.data.id,
    //             body: {
    //                 photo: editImage,
    //                 name: editName,
    //                 date: holidayDate,
    //             },
    //         })
    //     )
    // }

    return (
        <div>
            <BasicModal open={open} onClose={onClose}>
                <ModalChildDiv>
                    <AddTitle>Редактировать праздник</AddTitle>
                    {/* <ImagePicker onChange={setEditImage} newFile={editImage} /> */}
                    <ImagePicker />
                    <InModalChildDiv>
                        <LabelInputDiv>
                            <label htmlFor="Название праздника">
                                Название праздника
                            </label>
                            <Input
                                // onchange={(e) => setEditName(e.target.value)}
                                // value={editName}
                                type="text"
                                placholder="Введите название праздника"
                            />
                        </LabelInputDiv>

                        <div>
                            <ViewsDatePicker
                                width="100%"
                                // value={holidayDate}
                                // onChange={(newValue) => {
                                //     setHolidayDate(newValue)
                                // }}
                                label="Дата праздника"
                                placeholder="Укажите дату праздника"
                            />
                            <CancelAddDiv>
                                <Button variant="outlined" onClick={onClose}>
                                    Отмена
                                </Button>
                                <Button
                                    // onClick={editCardHandler}
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
