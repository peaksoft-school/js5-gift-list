import React from 'react'

import { Card } from '@mui/material'
import styled from 'styled-components'

import toBook from '../../assets/icons/toBook.svg'
import toBookanonymously from '../../assets/icons/toBookanonymously.svg'
import photo from '../admin/Rectangle 8 (1).png'
import CharityCard from '../ui/charity/CharityCard'

export const Charity = () => {
    return (
        <Card style={style}>
            <Title>Благотворительность</Title>
            <CardList>
                {options.map((el) => (
                    <CharityCard
                        meatBallsOptions={meatBallsOptions}
                        key={el.id}
                        data={el}
                    />
                ))}
            </CardList>
        </Card>
    )
}
const meatBallsOptions = [
    {
        icon: toBook,
        title: 'Забронировать',
        id: '1',
        clickItem: () => {},
    },
    {
        icon: toBookanonymously,
        title: 'Забронировать анонимно',
        id: '2',
        clickItem: () => {},
    },
]
const Title = styled.h2`
    font-family: 'Inter';
`
const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    & div {
        margin: 5px;
    }
`
const style = {
    width: '1086px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
}
const options = [
    {
        toBook: 'reserved',
        image: photo,
        date: '20.93.2021',
        userName: 'Sakura Chan',
        status: 'Б/У',
        giftName: 'Письма Элджертона',
        avatarInBooking: 'avatarInBooking',
        id: 1,
    },
    {
        toBook: 'reserved',
        image: photo,
        date: '20.93.2021',
        userName: 'Saske',
        status: 'Б/У',
        giftName: 'Письма Элджертона',
        avatarInBooking: 'avatarInBooking',
        id: 2,
    },
    {
        toBook: 'reserved',
        image: photo,
        date: '20.93.2021',
        userName: 'Naruto',
        status: 'Б/У',
        giftName: 'Письма Элджертона',
        avatarInBooking: 'avatarInBooking',
        id: 3,
    },
    {
        toBook: 'reserved',
        image: photo,
        date: '20.93.2021',
        userName: 'Itachi',
        status: 'Б/У',
        giftName: 'Письма Элджертона',
        avatarInBooking: 'avatarInBooking',
        id: 4,
    },
]
