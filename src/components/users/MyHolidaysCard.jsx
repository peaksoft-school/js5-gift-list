import * as React from 'react'

import { Card, CardMedia, styled } from '@mui/material'
import { useDispatch } from 'react-redux'

import deleteIcon from '../../assets/icons/deleteIcon.svg'
import editIcon from '../../assets/icons/editIcon.svg'
import defaultimage from '../../assets/images/placeholder.webp'
import {
    deleteHoliday,
    getHolidayById,
} from '../../store/slices/HolidayActions'
import MeatBalls from '../ui/meatBall/components/meatBalls'

export default function MyHolidaysCard({
    id,
    img,
    title,
    date,
    onOpen,
    getId,
    navigate,
}) {
    const dispatch = useDispatch()
    const navigations = [
        {
            id: '1',
            icon: editIcon,
            title: 'Редактировать',
            clickItem: () => {
                onOpen(id)
                getId(id)
                dispatch(getHolidayById(id))
            },
        },
        {
            id: '2',
            icon: deleteIcon,
            title: 'Удалить',
            clickItem: () => {
                dispatch(deleteHoliday({ id, link: img }))
            },
        },
    ]
    const dateReverse = date.split('-').reverse('').join('.')
    const image = {
        image: img,
    }
    if (!img) {
        image.image = defaultimage
    }
    return (
        <StyledCard onClick={navigate}>
            <StyledCardMedia alt="green iguana" image={image.image} />
            <HolidayTitleDiv>
                <HolidayTitle>{title}</HolidayTitle>
            </HolidayTitleDiv>
            <StyledFooter>
                <StyledDate>{dateReverse}</StyledDate>
                <MeatBallsWrapper onClick={(e) => e.stopPropagation()}>
                    <MeatBalls navigations={navigations} />
                </MeatBallsWrapper>
            </StyledFooter>
        </StyledCard>
    )
}
const MeatBallsWrapper = styled('div')`
    width: auto;
`
const StyledCard = styled(Card)`
    box-sizing: border-box;
    width: 100%;
    height: 38vh;
    border-radius: 8px;
    padding: 16px;
    margin-top: 24px;
`
const StyledCardMedia = styled(CardMedia)`
    width: 100%;
    height: 67%;
    border-radius: 6px;
`
const HolidayTitleDiv = styled('div')`
    margin-top: 16px;
`
const HolidayTitle = styled('span')`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #020202;
`
const StyledFooter = styled('div')`
    display: grid;
    grid-template-columns: 85% 1fr;
    margin-top: 14px;
`
const StyledDate = styled('span')`
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #636c84;
`
