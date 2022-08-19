import { useState } from 'react'

import { Card } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import photo from '../../admin/Rectangle 8 (1).png'
import CharityCard from '../../ui/charity/CharityCard'

const CharityUser = () => {
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
    const [filtered, setFiltered] = useState(options)
    const deleteFunc = (id) => {
        setFiltered((current) =>
            current.filter((el) => {
                return el.id !== id
            })
        )
    }
    const navigate = useNavigate()
    const link = (b) => {
        navigate(`${b}`)
    }

    return (
        <Card>
            <h2>CHARITY</h2>
            <CardList>
                {filtered.map((el) => (
                    <CharityCard
                        key={el.id}
                        data={el}
                        onClickImg={() =>
                            link(`/charity/${el.id}/edit_charity`)
                        }
                        deleteFunc={() => {
                            deleteFunc(el.id)
                        }}
                    />
                ))}
            </CardList>
        </Card>
    )
}
export default CharityUser
const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    & div {
        margin: 5px;
    }
`
