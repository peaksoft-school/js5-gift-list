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
    const myCharity = [photo, photo, photo, photo]
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
    const navigation = [
        {
            // icon: blockIcon,
            title: 'Заблокировать',
            id: '1',
            clickItem: () => {},
        },
        {
            // icon: deleteIcon,
            title: 'удалить',
            id: '2',
            clickItem: () => {},
        },
    ]
    return (
        <Card>
            <Header>
                <h2>Благотворительность</h2>
                <Img>
                    {myCharity.map((el) => (
                        <img src={el} alt="my charities" />
                    ))}
                </Img>
            </Header>
            <CardList>
                {filtered.map((el) => (
                    <CharityCard
                        key={el.id}
                        meatBallsOptions={navigation}
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
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 20px 0px;
    & h2 {
        margin: 0px 20px;
    }
    & img {
        border-radius: 50%;
        width: 39px;
        height: 39px;
        margin: 0px 10px;
    }
`
const Img = styled.div`
    display: flex;
`
