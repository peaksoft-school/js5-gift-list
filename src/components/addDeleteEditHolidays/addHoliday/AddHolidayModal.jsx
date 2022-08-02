import React, { useState } from 'react'

import styled from '@emotion/styled'

import BasicModal from '../../ui/BasicModal'
import Button from '../../ui/Button'
import ViewsDatePicker from '../../ui/datePicker/ViewsDatePicker'
import ImagePicker from '../../ui/ImagePicker'
import Input from '../../ui/Input'

const AddHolidayModal = (props) => {
    const { open, onClose } = props
    const [value, setValue] = useState(null)

    return (
        <div>
            <BasicModal open={open} onClose={onClose}>
                <form>
                    <ModalChildDiv>
                        <AddTitle>Добавление праздника</AddTitle>
                        <ImagePicker />
                        <InModalChildDiv>
                            <LabelInputDiv>
                                <label htmlFor="Название праздника">
                                    Название праздника
                                </label>
                                <Input
                                    type="text"
                                    placholder="Введите название праздника"
                                />
                            </LabelInputDiv>

                            <div>
                                <ViewsDatePicker
                                    width="100%"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue)
                                    }}
                                    label="Дата праздника"
                                    placeholder="Укажите дату праздника"
                                />
                                <CancelAddDiv>
                                    <Button
                                        variant="outlined"
                                        onClick={onClose}
                                    >
                                        Отмена
                                    </Button>
                                    <Button variant="contained">
                                        Добавить
                                    </Button>
                                </CancelAddDiv>
                            </div>
                        </InModalChildDiv>
                    </ModalChildDiv>
                </form>
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
