import { useEffect, useState } from 'react'

import styled from '@emotion/styled'
import MenuItem from '@mui/material/MenuItem'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import Button from '../components/ui/Button'
import ViewsDatePicker from '../components/ui/datePicker/ViewsDatePicker'
import ImagePicker from '../components/ui/ImagePicker'
import Input from '../components/ui/Input'
import Select from '../components/ui/select/Select'
import Textarea from '../components/ui/Textarea'
import {
    getHolidaysToSelect,
    getWishWithId,
    putWishCard,
} from '../store/slices/AddWishCardActions'

const EditWishCardPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const dispatch = useDispatch()

    const { dataWishCardWithId, holidaysToSelect } = useSelector(
        (state) => state.wishCard
    )
    const [wishPhoto, setWishPhoto] = useState(null)
    const [wishGift, setWishGift] = useState({
        wishName: '',
        wishLink: '',
        description: '',
    })
    const [dateWish, setDateWish] = useState('')
    const [wishSelect, setWishSelect] = useState('')

    useEffect(() => {
        dispatch(getWishWithId(id))
    }, [dataWishCardWithId?.wish?.photo])
    useEffect(() => {
        dispatch(getHolidaysToSelect())
    }, [])

    useEffect(() => {
        setWishGift({
            wishName: dataWishCardWithId?.wish?.wishName,
            wishLink: dataWishCardWithId?.wish?.wishLink,
            description: dataWishCardWithId?.wish?.description,
        })
        setDateWish(dataWishCardWithId?.wish?.wishDate)
        setWishSelect(dataWishCardWithId?.wish?.holiday.id)
        setWishPhoto(dataWishCardWithId?.wish?.photo)
    }, [dataWishCardWithId?.wish?.photo])

    const cancel = () => {
        navigate('/wish_list')
    }
    const holidayNameHandler = (e) => {
        setWishSelect(e.id)
    }

    const editImageHandler = (file) => {
        setWishPhoto(file)
    }

    const wishGiftHandler = (e) => {
        setWishGift({
            ...wishGift,
            [e.target.name]: e.target.value,
        })
    }
    const DateHandler = (e) => {
        setDateWish(e)
    }
    wishGift.wishDate = dateWish
    wishGift.holidayId = wishSelect

    const putDataWishCard = (e) => {
        e.preventDefault()
        dispatch(
            putWishCard({
                id,
                wishGift,
                wishPhoto,
                dispatch,
            })
        )
        // navigate('/wish_list')
    }
    const addHolidayHandler = () => {}
    const img = wishPhoto?.name ? null : wishPhoto
    return (
        <WrapperAll onSubmit={putDataWishCard}>
            <ImagePicker newFile={img} onChange={editImageHandler} />
            <WrapperEdit>
                <H2>Добавление желаемого подарка</H2>
                <WrapperLabels>
                    <Label> Название п одарка</Label>
                    <Label>Ссылка на подарок </Label>
                </WrapperLabels>
                <WrapperInputs>
                    <Input
                        name="wishName"
                        width="396px"
                        value={wishGift.wishName}
                        onChange={wishGiftHandler}
                    />
                    <Input
                        name="wishLink"
                        width="396px"
                        value={wishGift.wishLink}
                        onChange={wishGiftHandler}
                    />
                </WrapperInputs>
                <WrapperSelects>
                    <DivSelect>
                        <Select
                            holidayName={
                                dataWishCardWithId?.wish?.holiday?.name
                            }
                            options={holidaysToSelect}
                            label="Праздник"
                            getValue={holidayNameHandler}
                            additionalOption={
                                <MenuItemButton onClick={addHolidayHandler}>
                                    <Plus>+</Plus> Добавить праздник
                                </MenuItemButton>
                            }
                        />
                    </DivSelect>
                    <DivDatePicker>
                        <ViewsDatePicker
                            value={dateWish}
                            label="Дата праздника"
                            onChange={DateHandler}
                        />
                    </DivDatePicker>
                </WrapperSelects>
                <Textarea
                    name="description"
                    label="Описание подарка"
                    value={wishGift.description}
                    onChange={wishGiftHandler}
                />
                <WrapperButton>
                    <Button variant="outlined" onClick={cancel}>
                        Отмена
                    </Button>
                    <Button variant="contained" onClick={putDataWishCard}>
                        Сохранить
                    </Button>
                </WrapperButton>
            </WrapperEdit>
        </WrapperAll>
    )
}

export default EditWishCardPage
const Plus = styled('span')`
    font-size: 25px;
    margin-right: 7px;
`
const MenuItemButton = styled(MenuItem)`
    color: #8639b5;
    padding: 0 0 0 15px;
`

const WrapperAll = styled('form')`
    padding: 20px;
    display: flex;
    background: #fff;
    width: 100%;
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
    grid-template-columns: 430px 395px;
    margin-bottom: 20px;
    & .Mui-focused .MuiOutlinedInput-notchedOutline {
        border: 1px solid #8639b5;
    }
`
const WrapperSelects = styled('div')`
    display: grid;
    grid-template-columns: 430px 390px;
`
const DivSelect = styled('div')`
    width: 396px;
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
