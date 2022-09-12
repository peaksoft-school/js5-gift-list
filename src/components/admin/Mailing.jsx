import React, { useState } from 'react'

import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'

// import defaultImage from '../../assets/images/placeholder.webp'
// import { postMailingAction } from '../../store/slices/postMailingAction'
import BasicModal from '../ui/BasicModal'
import Button from '../ui/Button'
import ImagePicker from '../ui/ImagePicker'
import Input from '../ui/Input'

const CreatingMailingList = (props) => {
    const { open, onClose } = props
    const [photo, setPhoto] = useState(null)
    const [mailingTitle, setMailingTitle] = useState('')
    const [mailingText, setMailingText] = useState('')
    const dispatch = useDispatch()
    const onChangeImageValue = (file) => {
        if (file.size <= 1000000) {
            setPhoto(file)
        }
    }
    const onChangeInputTitle = (e) => {
        setMailingTitle(e.target.value)
    }
    const onChangeInputText = (date) => {
        setMailingText(date)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            postMailingAction({
                photo,
                mailingTitle,
                mailingText,
                onClose,
            })
        )
        setPhoto(null)
        setMailingText('')
        setMailingText('')
    }
    return (
        <BasicModal open={open} onClose={onClose}>
            <form onSubmit={submitHandler}>
                <ModalChildDiv>
                    <AddTitle>Создание рассылки</AddTitle>
                    <ImagePicker onChange={onChangeImageValue} />
                    <InModalChildDiv>
                        <LabelInputDiv>
                            <label htmlFor="Заголовок">Заголовок</label>
                            <Input
                                name="Заголовок"
                                value={mailingTitle}
                                onChange={onChangeInputTitle}
                                type="text"
                                placeholder="Введите заголовок рассылки"
                            />
                        </LabelInputDiv>
                        <DateDiv>
                            <label
                                htmlFor="Текст рассылки"
                                style={{ fontSize: '12px', color: '#464444' }}
                            >
                                Текст рассылки
                            </label>
                            <Input
                                name="Текст рассылки"
                                // width="100%"
                                type="text"
                                value={mailingText}
                                onChange={onChangeInputText}
                                placeholder="Введите текст рассылки"
                            />
                            <CancelAddDiv>
                                <Button variant="outlined" onClick={onClose}>
                                    Отмена
                                </Button>
                                <Button type="submit" variant="contained">
                                    Добавить
                                </Button>
                            </CancelAddDiv>
                        </DateDiv>
                    </InModalChildDiv>
                </ModalChildDiv>
            </form>
        </BasicModal>
    )
}
export default CreatingMailingList
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
