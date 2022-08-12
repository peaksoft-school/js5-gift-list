import { useState } from 'react'

import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addGift } from '../../../store/slices/AddWishCardActions'
import Button from '../../ui/Button'
import ViewsDatePicker from '../../ui/datePicker/ViewsDatePicker'
import ImagePicker from '../../ui/ImagePicker'
import Input from '../../ui/Input'
import Select from '../../ui/select/Select'
import Textarea from '../../ui/Textarea'

const AddWishCard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const option = [
        { value: 'Праздник1', label: 'Праздник' },
        { value: 'Праздник2', label: 'Праздникll' },
        { value: 'Праздник3', label: 'Празднlkkик' },
    ]
    const [wishGift, setWishGift] = useState({
        nameGift: '',
        linkGift: '',
        aboutGift: '',
    })
    const [choose, setChoose] = useState('')
    const [imageGift, setImageGift] = useState('')
    console.log(choose)

    // const UserId = useSelector((s) => s.user?.id)
    // console.log(wishGift.nameGift)
    const cancel = () => {
        navigate('/wish_list')
    }
    const addWishGift = (e) => {
        setWishGift({ [e.target.name]: e.target.value })
    }
    const addImageGift = (e) => {
        setImageGift(e)
    }
    // console.log(imageGift)
    const chooseHoliday = (e) => {
        setChoose(e.value)
    }
    // const giftData = {}
    const postHandler = (e) => {
        e.preventDefault()
        dispatch(addGift({ imageGift, wishGift }))
        // dispatch(addGift(giftData))
    }
    return (
        <WrapperAll onSubmit={postHandler}>
            <ImagePicker onChange={addImageGift} />
            <WrapperEdit>
                <H2>Добавление желаемого подарка</H2>
                <WrapperLabels>
                    <Label> Название подарка</Label>
                    <Label>Ссылка на подарок </Label>
                </WrapperLabels>
                <WrapperInputs>
                    <Input
                        name="nameGift"
                        value={wishGift.nameGift}
                        width="396px"
                        placeholder="Введите название подарка"
                        onChange={addWishGift}
                    />
                    <Input
                        name="linkGift"
                        value={wishGift.linkGift}
                        width="396px"
                        placeholder="Вставьте ссылку на подарок"
                        onChange={addWishGift}
                    />
                </WrapperInputs>
                <WrapperSelects>
                    <Select
                        // value={choose}
                        onChange={chooseHoliday}
                        placeholder="Выберите праздник"
                        options={option}
                        label="Праздник"
                    />
                    <DivDatePicker>
                        <ViewsDatePicker
                            // value={dateGift}
                            placeholder="Укажите дату праздника"
                            label="Дата праздника"
                            onChange={addWishGift}
                        />
                    </DivDatePicker>
                </WrapperSelects>
                <Textarea
                    value={wishGift.aboutGift}
                    name="aboutGift"
                    placeholder="Введите описание подарка"
                    label="Описание подарка"
                    onChange={addWishGift}
                />
                <WrapperButton>
                    <Button variant="outlined" onClick={cancel}>
                        Отмена
                    </Button>
                    <Button variant="contained" type="submit">
                        Добавить
                    </Button>
                </WrapperButton>
            </WrapperEdit>
        </WrapperAll>
    )
}

export default AddWishCard

const WrapperAll = styled('form')`
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
