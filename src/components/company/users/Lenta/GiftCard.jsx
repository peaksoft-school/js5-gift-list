import * as React from 'react'

import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import deleteIcon from '../../../../assets/icons/deleteIcon.svg'
import editIcon from '../../../../assets/icons/editIcon.svg'
import MeatBalls from '../../../ui/meatBall/components/meatBalls'

const navigation = [
    { icon: editIcon, title: 'Редактировать' },
    { icon: deleteIcon, title: 'удалить' },
]

export default function GiftCard(props) {
    return (
        <StyledCard>
            <StyledCardMedia
                component="img"
                height="149"
                image={props.image}
                alt="green iguana"
            />
            <StyledCardContentFirst>
                <NameGift>{props.nameGift}</NameGift>
                <StyledBirthday>{props.holiday}</StyledBirthday>
            </StyledCardContentFirst>
            <StyledCardContentSecond>
                <StyledDate>{props.date}</StyledDate>
                <StyledText>{props.toBook}</StyledText>
                <MeatBalls navigations={navigation} onClick={props.onClick} />
            </StyledCardContentSecond>
        </StyledCard>
    )
}
const StyledCardContentFirst = styled(CardContent)`
    display: flex;
    justify-content: space-between;
    padding: 3px 16px 3px 16px;
`
const StyledCardContentSecond = styled(CardContent)`
    display: grid;
    grid-template-columns: 190px 80px 10px;
    padding: 10px 16px 0 16px;
`

const NameGift = styled('span')`
    font-size: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
`
const StyledDate = styled('span')`
    font-size: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #636c84;
`
const StyledText = styled('span')`
    font-size: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #636c84;
`
const StyledBirthday = styled('span')`
    font-size: Inter;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #0ba360;
`
const StyledCard = styled(Card)`
    width: 349px;
    height: 250px;
`

const StyledCardMedia = styled(CardMedia)`
    width: 317px;
    height: 149px;
    border-radius: 6px;
    margin: 16px;
`
