import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import deleteIcon from '../../../assets/icons/deleteIcon.svg'
import editIcon from '../../../assets/icons/editIcon.svg'
import defaultImage from '../../../assets/images/placeholder.webp'
import { getHoliday } from '../../../store/slices/HolidayActions'
import { getHolidayWish } from '../../../store/slices/HolidayGiftsActions'
import GiftCard from '../../users/GiftCard'

const navigation = [
    { icon: editIcon, title: 'Редактировать', id: '1' },
    { icon: deleteIcon, title: 'удалить', id: '2' },
]
const HolidayCardInnerPage = ({ img }) => {
    const { holidayGifts } = useParams()
    const dispatch = useDispatch()
    const holidayUserGifts = useSelector((state) => state)

    useEffect(() => {
        dispatch(getHolidayWish(holidayGifts))
        dispatch(getHoliday())
    }, [holidayGifts])

    const nameHoliday = holidayUserGifts?.holiday?.holiday?.filter(
        (i) => i.id === +holidayGifts
    )
    console.log(nameHoliday)
    const image = {
        image: img,
    }
    if (!img) {
        image.image = defaultImage
    }
    return (
        <HolidayInnerDiv>
            <HolidayTitle>
                <Title>{nameHoliday[0]?.name}</Title>
            </HolidayTitle>
            <GiftCardDiv>
                {holidayUserGifts?.holidayUserGifts?.holidayUserGifts?.map(
                    (el) => {
                        return (
                            <GiftCard
                                id={el.wish.id}
                                date={el.wish.wishDate}
                                variant="board"
                                nameGift={el.wish.wishName}
                                holiday={el.wish.holiday.name}
                                image={el.wish.photo || defaultImage}
                                toBook={el.wish.booking}
                                navigation={navigation}
                            />
                        )
                    }
                )}
            </GiftCardDiv>
        </HolidayInnerDiv>
    )
}

export default HolidayCardInnerPage

const HolidayInnerDiv = styled('div')`
    padding-top: 20px;
    margin-left: 20px;
    margin-right: 40px;
`
const GiftCardDiv = styled('div')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 19px;
    grid-row-gap: 15px;
`
const HolidayTitle = styled('div')`
    height: 39px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const Title = styled('h1')`
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #020202;
`
