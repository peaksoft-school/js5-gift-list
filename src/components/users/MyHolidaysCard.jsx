import * as React from 'react'

import { Card, CardMedia, styled } from '@mui/material'

import deleteIcon from '../../assets/icons/deleteIcon.svg'
import editIcon from '../../assets/icons/editIcon.svg'
import MeatBalls from '../ui/meatBall/components/meatBalls'

export default function MyHolidaysCard({ img, title, date }) {
    const navigations = [
        {
            id: '1',
            icon: editIcon,
            title: 'Редактировать',
            clickItem: () => {},
        },
        { id: '2', icon: deleteIcon, title: 'Удалить', clickItem: () => {} },
    ]
    return (
        <StyledCard>
            <StyledCardMedia alt="green iguana" image={img} />
            <HolidayTitleDiv>
                <HolidayTitle>{title}</HolidayTitle>
            </HolidayTitleDiv>
            <StyledFooter>
                <StyledDate>{date}</StyledDate>
                <MeatBalls navigations={navigations} />
            </StyledFooter>
        </StyledCard>
    )
}
const StyledCard = styled(Card)`
    box-sizing: border-box;
    width: 349px;
    height: 250px;
    border-radius: 8px;
    padding: 16px;
`
const StyledCardMedia = styled(CardMedia)`
    width: 317px;
    height: 149px;
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