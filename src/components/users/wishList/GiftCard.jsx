import * as React from 'react'

import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import deleteIcon from '../../../assets/icons/deleteIcon.svg'
import editIcon from '../../../assets/icons/editIcon.svg'
import MeatBalls from '../../ui/meatBall/components/meatBalls'

const navigation = [
    { icon: editIcon, title: 'Редактировать', id: '1' },
    { icon: deleteIcon, title: 'удалить', id: '2' },
]

export default function GiftCard(props) {
    const {
        variant,
        image,
        nameGift,
        avatar,
        holiday,
        date,
        toBook,
        onClick,
        navigate,
    } = props
    return (
        <StyledCard variants={variant}>
            <StyledCardMedia
                onClick={navigate}
                variants={variant}
                component="img"
                image={image}
                alt="green iguana"
            />
            <Wrapper>
                <StyledCardContentFirst variants={variant}>
                    <NameGift>{nameGift}</NameGift>
                    <StyledBirthday>{holiday}</StyledBirthday>
                </StyledCardContentFirst>
                <StyledCardContentSecond variants={variant}>
                    <StyledDate variants={variant}>{date}</StyledDate>
                    <WrapperToBooking variants={variant}>
                        <StyledAvatar src={avatar} alt="avatar" />
                        <StyledText>{toBook}</StyledText>
                    </WrapperToBooking>
                    <WrapperMeatBalls variants={variant}>
                        <MeatBalls navigations={navigation} onClick={onClick} />
                    </WrapperMeatBalls>
                </StyledCardContentSecond>
            </Wrapper>
        </StyledCard>
    )
}

const WrapperToBooking = styled('div')(({ variants }) => ({
    display: 'flex',
    ...(variants === 'board' && {
        justifyContent: 'flex-end',
    }),
    ...(variants === 'list' && {
        order: '-1',
        justifyContent: 'flex-start',
    }),
}))

const StyledAvatar = styled(Avatar)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`
const StyledCard = styled(Card)(({ variants }) => ({
    ...(variants === 'board' && {
        width: '349px',
        height: '250px',
    }),
    ...(variants === 'list' && {
        display: 'flex',
        width: '533px',
        height: '134px',
    }),
}))
const Wrapper = styled('div')``
const WrapperMeatBalls = styled('div')(({ variants }) => ({
    ...(variants === 'list' && {
        position: 'absolute',
        top: '50px',
        left: '290px',
    }),
}))
const StyledCardContentFirst = styled(CardContent)(({ variants }) => ({
    display: 'flex',
    alignItems: 'center',
    ...(variants === 'board' && {
        justifyContent: 'space-between',
        padding: '3px 16px 3px 16px',
    }),
    ...(variants === 'list' && {
        width: '335px',
        justifyContent: 'space-between',
        paddingLeft: '0',
    }),
}))

const StyledCardContentSecond = styled(CardContent)(({ variants }) => ({
    display: 'grid',
    ...(variants === 'board' && {
        gridTemplateColumns: '80px 190px 10px',
        padding: '10px 16px 0 16px',
    }),
    ...(variants === 'list' && {
        width: '335px',
        position: 'relative',
        gridTemplateColumns: '190px 145px 5px',
        padding: '10px 16px 0 0px',
    }),
}))

const NameGift = styled('span')`
    font-size: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
`
const StyledDate = styled('span')(({ variants }) => ({
    fontSTyle: 'Inter',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#636c84',
    ...(variants === 'list' && {
        display: 'flex',
        justifyContent: 'flex-end',
    }),
}))
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
const StyledCardMedia = styled(CardMedia)(({ variants }) => ({
    borderRadius: '6px',

    ...(variants === 'board' && {
        width: '317px',
        height: '149px',
        margin: '16px',
    }),
    ...(variants === 'list' && {
        width: '146px',
        height: '102px',
        margin: '16px',
    }),
}))
