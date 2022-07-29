import * as React from 'react'
import { useState } from 'react'

import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import addInMyGifts from '../../assets/icons/addInMyGifts.svg'
import toBookanonymously from '../../assets/icons/toBookanonymously.svg'
import toBooking from '../../assets/icons/toBooking.svg'
import reportIcon from '../../assets/icons/reportIcon.svg'
import cacelBooking from '../../assets/icons/cacelBooking.svg'
import MeatBalls from '../ui/meatBall/components/meatBalls'

import ReportModal from './ReportModal'

export default function Card({
    variant,
    toBook,
    image,
    avatar,
    date,
    userName,
    holiday,
    giftName,
    avatarInBooking,
}) {
    const navigationFirst = [
        {
            icon: toBooking,
            title: 'Забронировать',
            id: '1',
            clickItem: toBookHandler,
        },
        {
            icon: toBookanonymously,
            title: 'Забронировать ананимно',
            id: '2',
            clickItem: toBookHandler,
        },
        {
            icon: addInMyGifts,
            title: 'Добавить в мои подарки',
            id: '3',
            clickItem: () => {},
        },
        {
            icon: reportIcon,
            title: 'Пожаловаться',
            id: '4',
            clickItem: click,
        },
    ]
    const navigationSecond = [
        {
            icon: addInMyGifts,
            title: 'Добавить в мои подарки',
            id: '3',
            clickItem: () => {},
        },
        {
            icon: cacelBooking,
            title: 'снять бронь',
            id: '2',
            clickItem: toBookHandler,
        },
        {
            icon: reportIcon,
            title: 'Пожаловаться',
            id: '4',
            clickItem: click,
        },
    ]

    const [open, setState] = useState(false)
    const [booking, setTobooking] = useState(false)
    console.log(booking)

    function toBookHandler() {
        setTobooking((prev) => !prev)
    }
    function click() {
        setState((prev) => !prev)
    }
    const onCloseModal = () => {
        setState((prev) => !prev)
    }
    const navigation = booking ? navigationSecond : navigationFirst
    return (
        <StyledCard variants={variant}>
            <StyledCardMedia
                variants={variant}
                component="img"
                image={image}
                alt="green iguana"
            />

            <StyledCardContentFirst variants={variant}>
                <StyledAvatar alt="Cindy Baker" src={avatar} />
                <UserName>{userName}</UserName>
                <StyledBirthday>{holiday}</StyledBirthday>
            </StyledCardContentFirst>
            <NameGift variants={variant}>{giftName}</NameGift>
            <StyledCardContentSecond variants={variant}>
                <StyledDate variants={variant}>{date}</StyledDate>
                <Wrapper>
                    <StyledAvatarOnBook
                        alt="Cindy Baker"
                        src={avatarInBooking}
                    />
                    <StyledText>{toBook}</StyledText>
                </Wrapper>
                <MeatBalls navigations={navigation} />
                <ReportModal open={open} onClose={onCloseModal} />
            </StyledCardContentSecond>
        </StyledCard>
    )
}

const StyledCard = styled(MuiCard)(({ variants }) => ({
    ...(variants === 'board' && {
        width: '349px',
        height: '301px',
        display: 'flex',
        flexDirection: 'column',
    }),
    ...(variants === 'list' && {
        width: '533px',
        height: '138px',
        display: 'flex',
        position: 'relative',
    }),
}))

const StyledAvatar = styled(Avatar)`
    width: 36px;
    height: 36px;
`
const StyledAvatarOnBook = styled(Avatar)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`
const UserName = styled('h1')`
    font-family: 'Inter' sans-serif;
    font-weight: 650;
    font-size: 16px;
    line-height: 19.36px;
`
const Wrapper = styled('div')`
    display: flex;
    justify-content: flex-end;
`
const StyledCardContentFirst = styled(CardContent)(({ variants }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '36px',
    ...(variants === 'board' && {
        width: '317px',
        height: '36px',
        padding: '0',
        margin: '16px',
        order: '-1',
        display: 'grid',
        gridTemplateColumns: '48px 168px 101px',
    }),
    ...(variants === 'list' && {
        display: 'grid',
        gridTemplateColumns: '48px 188px 101px',
        width: '341px',
        padding: '0',
        margin: '16px 16px 0 0',
    }),
}))

const StyledCardContentSecond = styled(CardContent)(({ variants }) => ({
    display: 'grid',
    height: '20px',
    padding: '0',
    ...(variants === 'board' && {
        gridTemplateColumns: '80px 192px 10px',
        order: '1',
        width: '317px',
        margin: '15px 16px 0 16px',
    }),
    ...(variants === 'list' && {
        gridTemplateColumns: '80px 214px 10px',
        position: 'absolute',
        width: '357px',
        top: '100px',
        left: '180px',
    }),
}))

const StyledCardMedia = styled(CardMedia)(({ variants }) => ({
    borderRadius: '6px',
    ...(variants === 'board' && {
        width: '317px',
        height: '149px',
        margin: '0 16px 0 16px',
        order: '0',
    }),
    ...(variants === 'list' && {
        width: '146px',
        height: '106px',
        margin: '16px 14px 16px 16px',
    }),
}))

const NameGift = styled('span')(({ variants }) => ({
    fontFamily: 'Inter sans-serif',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '18px',
    fontStyle: 'normal',
    color: '#000000',
    ...(variants === 'board' && {
        margin: '0 0 10px 16px',
        order: '-1',
    }),
    ...(variants === 'list' && {
        position: 'absolute',
        left: '180px',
        top: '70px',
    }),
}))
const StyledDate = styled('span')(({ variants }) => ({
    fontStyle: 'Inter',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '16.94px',
    color: '#636c84',
    ...(variants === 'board' && {}),
    ...(variants === 'list' && {}),
}))
const StyledText = styled('span')`
    font-size: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #636c84;
`
const StyledBirthday = styled('span')`
    display: flex;
    justify-content: flex-end;
    font-size: Inter;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #0ba360;
`
