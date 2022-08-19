import { useState } from 'react'

import { Card } from '@mui/material'
import styled from 'styled-components'

import gift from '../../assets/images/gift.png'
import CharityCard from '../ui/charity/CharityCard'

import photo from './Rectangle 8 (1).png'

// import CharityCard from './CharityCard'

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
const CharityAdmin = () => {
    const [filtered, setFiltered] = useState(options)
    const deleteFunc = (id) => {
        setFiltered((current) =>
            current.filter((el) => {
                return el.id !== id
            })
        )
    }

    return (
        <Card style={style}>
            <Title>Благотворительность</Title>
            <CardList>
                {filtered.map((el) => (
                    <CharityCard
                        key={el.id}
                        data={el}
                        deleteFunc={() => {
                            deleteFunc(el.id)
                        }}
                    />
                ))}
            </CardList>
            {filtered.length === 0 && (
                <Section>
                    <GiftImg src={gift} alt="gift " />
                    <NotFound>Not found</NotFound>
                </Section>
            )}
        </Card>
    )
}

export default CharityAdmin

const Title = styled.h2`
    font-family: sans-serif;
`
const style = {
    width: '1086px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
}
const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    & div {
        margin: 5px;
    }
`
const NotFound = styled.h2`
    font-family: 'Inter';
`
const GiftImg = styled.img`
    width: 100px;
    height: 'auto';
`
const Section = styled.div`
    text-align: center;
`
