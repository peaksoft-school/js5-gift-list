import { useEffect, useState } from 'react'

import styled from '@emotion/styled'
import { createAsyncThunk } from '@reduxjs/toolkit'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { appFetch } from '../api/CustomFetch'
import Button from '../components/ui/Button'
import ViewsDatePicker from '../components/ui/datePicker/ViewsDatePicker'
import ImagePicker from '../components/ui/ImagePicker'
import Input from '../components/ui/Input'
import Notification from '../components/ui/notification/Notification'
import Select from '../components/ui/select/Select'
import Textarea from '../components/ui/Textarea'
import { addGift } from '../store/slices/AddWishCardActions'

const AddWishCard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [dataSelect, setDataSelect] = useState([])
    const getHolidayName = createAsyncThunk(
        'holiday/getHolidayName',
        async () => {
            const response = await appFetch({
                url: 'api/holiday',
            })
            setDataSelect(response)
            return response
        }
    )
    useEffect(() => {
        dispatch(getHolidayName())
    }, [])
    const [wishGift, setWishGift] = useState({
        giftName: '',
        giftLink: '',
        description: '',
    })

    const [holidayName, setHolidayName] = useState('')
    const [wishDate, setDateWishGift] = useState('')
    const [photo, setImageGift] = useState('')
    const cancel = () => {
        navigate('/wish_list')
    }
    const toWishPage = () => {
        navigate('/wish_list')
    }
    const addWishGift = (e) => {
        setWishGift({
            ...wishGift,
            [e.target.name]: e.target.value,
        })
    }
    const addImageGift = (e) => {
        setImageGift(e)
    }
    const addDateWishGift = (e) => {
        const newDate = moment(e).format('YYYY-MM-DD')
        setDateWishGift(newDate)
    }
    const chooseHoliday = (e) => {
        setHolidayName(e.name)
    }

    const addHolidayName = () => {}
    wishGift.holidayName = holidayName
    wishGift.wishDate = wishDate
    const postHandler = (e) => {
        e.preventDefault()
        if (
            wishGift.giftName &&
            wishGift.giftLink &&
            wishGift.description &&
            wishGift.holidayName &&
            wishGift.wishDate
        ) {
            dispatch(addGift({ photo, wishGift, dispatch }))
            toWishPage()
        }
    }
    return (
        <WrapperAll onSubmit={postHandler}>
            <Notification />
            <ImagePicker onChange={addImageGift} />
            <WrapperEdit>
                <H2>Добавление желаемого подарка</H2>
                <WrapperLabels>
                    <Label> Название подарка</Label>
                    <Label>Ссылка на подарок </Label>
                </WrapperLabels>
                <WrapperInputs>
                    <Input
                        name="giftName"
                        value={wishGift.giftName}
                        width="396px"
                        placeholder="Введите название подарка"
                        onChange={addWishGift}
                    />
                    <Input
                        name="giftLink"
                        value={wishGift.giftLink}
                        width="396px"
                        placeholder="Вставьте ссылку на подарок"
                        onChange={addWishGift}
                    />
                </WrapperInputs>
                <WrapperSelects>
                    <DivSelect>
                        <Select
                            getValue={chooseHoliday}
                            placeholder="Выберите праздник"
                            label="Праздник"
                            showButton="button"
                            options={dataSelect}
                            onClickButton={addHolidayName}
                        />
                    </DivSelect>
                    <DivDatePicker>
                        <ViewsDatePicker
                            value={wishDate}
                            placeholder="Укажите дату праздника"
                            label="Дата праздника"
                            onChange={addDateWishGift}
                        />
                    </DivDatePicker>
                </WrapperSelects>
                <Textarea
                    value={wishGift.description}
                    name="description"
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
    background: #fff;
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
    grid-template-columns: 430px 390px;
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
    grid-template-columns: 430px 390px;
    margin-bottom: 20px;
    & .Mui-focused .MuiOutlinedInput-notchedOutline {
        border: 1px solid #8639b5;
    }
`
const WrapperSelects = styled('div')`
    display: grid;
    grid-template-columns: 430px 390px;

    & .css-1na6im6-control {
        height: 36px;
    }
`
const DivSelect = styled('div')`
    width: 396px;
    div {
        height: 35px;
    }
`
const DivDatePicker = styled('div')``
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
