import { useState } from 'react'

import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'

import Button from '../../ui/Button'
import ViewsDatePicker from '../../ui/datePicker/ViewsDatePicker'
import ImagePicker from '../../ui/ImagePicker'
import Input from '../../ui/Input'
import Select from '../../ui/select/Select'
import Textarea from '../../ui/Textarea'

const EditWishCard = (props) => {
    const navigate = useNavigate()
    const option = [
        { value: 'Праздник1', label: 'Праздник1' },
        { value: 'Праздник2', label: 'Праздник2' },
        { value: 'Праздник3', label: 'Праздник3' },
    ]

    const [image, setImage] = useState(
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHl8ZW58MHx8MHx8&w=1000&q=80'
    )
    const [nameGift, setnameGift] = useState(props.data.nameGift)
    const [link, setLink] = useState(props.data.link)
    const [date, setDate] = useState(props.data.date)
    const [select, setSelect] = useState('')
    const [textarea, setTextarea] = useState(props.data.aboutGift)
    console.log(select)
    const cancel = () => {
        navigate('/wish_list')
    }

    const editImageHandler = (file) => {
        setImage(file)
    }
    console.log(image)

    const nameGiftHandler = (e) => {
        setnameGift(e.target.value)
    }
    const LinkHandler = (e) => {
        setLink(e.target.value)
    }
    const DateHandler = (date) => {
        setDate(date)
    }
    // const selectHandler = (e) => {
    //     setSelect(e.target.value)
    // }
    const onChangeTextarea = (e) => {
        setTextarea(e.target.value)
    }
    // const [nameGift, setNameGift] = useState('')
    // useEffect(() => {
    //     if (props.data.nameGift) {
    //         setNameGift(props.data.nameGift)
    //     }
    // }, [props.data.nameGift])
    // console.log(props.data.aboutGift)
    return (
        <WrapperAll>
            <ImagePicker onChange={editImageHandler} />
            <WrapperEdit>
                <H2>Добавление желаемого подарка</H2>
                <WrapperLabels>
                    <Label> Название подарка</Label>
                    <Label>Ссылка на подарок </Label>
                </WrapperLabels>
                <WrapperInputs>
                    <Input
                        width="396px"
                        placholder="Введите название подарка"
                        value={nameGift}
                        onChange={nameGiftHandler}
                    />
                    <Input
                        width="396px"
                        placholder="Вставьте ссылку на подарок"
                        value={link}
                        onChange={LinkHandler}
                    />
                </WrapperInputs>
                <WrapperSelects>
                    <Select
                        placeholder="Выберите праздник"
                        options={option}
                        label="Праздник"
                        onChange={(e) => setSelect(e.value)}
                    />
                    <DivDatePicker>
                        <ViewsDatePicker
                            value={date}
                            placeholder="Укажите дату праздника"
                            label="Дата праздника"
                            onChange={DateHandler}
                        />
                    </DivDatePicker>
                </WrapperSelects>
                <Textarea
                    placeholder="Введите описание подарка"
                    label="Описание подарка"
                    value={textarea}
                    onChange={onChangeTextarea}
                />
                <WrapperButton>
                    <Button variant="outlined" onClick={cancel}>
                        Отмена
                    </Button>
                    <Button variant="contained">Добавить</Button>
                </WrapperButton>
            </WrapperEdit>
        </WrapperAll>
    )
}

export default EditWishCard

const WrapperAll = styled('div')`
    padding: 20px;
    display: flex;
`

const WrapperEdit = styled('div')`
    padding-left: 20px;
    width: 808px;
`
const H2 = styled('h2')`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin: 0;
`
const WrapperLabels = styled('div')`
    display: grid;
    grid-template-columns: 418px 390px;
    margin-top: 17px;
    margin-bottom: 6px;
`
const Label = styled('label')`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #464444;
`
const WrapperInputs = styled('div')`
    display: grid;
    grid-template-columns: 416px 390px;
    margin-bottom: 20px;
    & .Mui-focused .MuiOutlinedInput-notchedOutline {
        border: 1px solid #8639b5;
    }
`
const WrapperSelects = styled('div')`
    display: grid;
    grid-template-columns: 418px 390px;

    & .css-1na6im6-control {
        height: 36px;
    }
`
const DivDatePicker = styled('div')`
    padding-top: 3px;
`
const WrapperButton = styled('div')`
    display: flex;
    justify-content: flex-end;
    margin-top: 56px;
    button {
        width: 113px;
        height: 37px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin-left: 16px;
        padding: 10px 26px 10px 26px;
    }
`
