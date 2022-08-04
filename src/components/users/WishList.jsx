import React, { useState } from 'react'

import { styled } from '@mui/system'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as BoardIcon } from '../../assets/icons/boardIcon.svg'
import { ReactComponent as ListIcon } from '../../assets/icons/listIcon.svg'
import { ReactComponent as Plus } from '../../assets/icons/plusIconInTheButton.svg'
import Button from '../ui/Button'

import GiftCard from './wishList/GiftCard'

export const text =
    'Дисплей Super Retina XDR с технологией ProMotion и быстрым, плавным откликом. Грандиозный апгрейд системы камер, открывающий совершенно новые возможности. Исключительная прочность. A15 Bionic — самый быстрый чип для iPhone. И впечатляющее время работы без подзарядки. Всё это Pro.'
export const array = [
    {
        img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHl8ZW58MHx8MHx8&w=1000&q=80',
        nameGift: 'Название подарка',
        holiday: 'День рождения',
        date: '12.04.22',
        id: '1',
        toBooking: 'В ожидании',
        avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
    },
    {
        img: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGltZXxlbnwwfHwwfHw%3D&w=1000&q=80',
        nameGift: 'Название подарка',
        holiday: 'День рождения',
        date: '12.04.22',
        id: '2',
        toBooking: 'В ожидании',
        avatar: 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    },
    {
        img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHl8ZW58MHx8MHx8&w=1000&q=80',
        nameGift: 'Название подарка',
        holiday: 'День рождения',
        date: '12.04.22',
        id: '3',

        toBooking: 'В ожидании',
        avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
    },
    {
        img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHl8ZW58MHx8MHx8&w=1000&q=80',
        nameGift: 'Название подарка',
        holiday: 'День рождения',
        date: '12.04.22',
        id: '4',

        toBooking: 'В ожидании',
        avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
    },
    {
        img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHl8ZW58MHx8MHx8&w=1000&q=80',
        nameGift: 'Название подарка',
        holiday: 'День рождения',
        date: '12.04.22',
        id: '5',

        toBooking: 'В ожидании',
        avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
    },
    {
        img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHl8ZW58MHx8MHx8&w=1000&q=80',
        nameGift: 'Название подарка',
        holiday: 'День рождения',
        date: '12.04.22',
        id: '6',

        toBooking: 'В ожидании',
        avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
    },
    {
        img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHl8ZW58MHx8MHx8&w=1000&q=80',
        nameGift: 'Название подарка',
        holiday: 'День рождения',
        date: '12.04.22',
        id: '7',

        toBooking: 'В ожидании',
        avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
    },
    {
        img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHl8ZW58MHx8MHx8&w=1000&q=80',
        nameGift: 'Название подарка',
        holiday: 'День рождения',
        date: '12.04.22',
        id: '8',

        toBooking: 'В ожидании',
        avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
    },
    {
        img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHl8ZW58MHx8MHx8&w=1000&q=80',
        nameGift: 'Название подарка',
        holiday: 'День рождения',
        date: '12.04.22',
        id: '9',

        toBooking: 'В ожидании',
        avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
    },
    {
        img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHl8ZW58MHx8MHx8&w=1000&q=80',
        nameGift: 'Название подарка',
        holiday: 'День рождения',
        date: '12.04.22',
        id: '10',

        toBooking: 'В ожидании',
        avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3',
    },
]

const WishList = () => {
    const [format, setFormat] = useState(false)
    const navigate = useNavigate()
    // console.log(navigate)
    const a = (id) => {
        navigate(`/wish_list/${id}`)
    }
    const b = (e) => {
        navigate(`/wish_list/${e}`)
    }
    const boardHandler = () => {
        setFormat(false)
    }
    const listHandler = () => {
        setFormat(true)
    }
    const formatCard = format ? 'list' : 'board'
    return (
        <DivWishList>
            <WrapperTop>
                <H2>Список желаний</H2>
                <WrapperIcon>
                    <ButtonIcon onClick={boardHandler}>
                        <BoardIcons fill={formatCard} />
                    </ButtonIcon>
                    <ButtonIcon onClick={listHandler}>
                        <ListIcons fill={formatCard} />
                    </ButtonIcon>
                    <Button onclick={() => b('edit')} startIcon={<Plus />}>
                        Добавить желание
                    </Button>
                </WrapperIcon>
            </WrapperTop>
            <WrapperCards variant={formatCard}>
                {array.map((el) => (
                    <GiftCard
                        key={el.id}
                        variant={formatCard}
                        image={el.img}
                        nameGift={el.nameGift}
                        date={el.date}
                        holiday={el.holiday}
                        toBook={el.toBooking}
                        avatar={el.avatar}
                        navigate={() => a(el.id)}
                    />
                ))}
            </WrapperCards>
        </DivWishList>
    )
}

export default WishList

const DivWishList = styled('div')`
    width: 1086px;
    margin: 32px 40px 0 20px;
`

const WrapperTop = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    button:last-of-type {
        width: 219px;
        height: 39px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 19px;
        margin-left: 16px;
    }
`
const H2 = styled('h2')`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
`
const WrapperIcon = styled('div')`
    display: flex;
    button:first-of-type {
        border-radius: 4px 0 0 4px;
        border-right: none;
    }
`
const ButtonIcon = styled('button')`
    width: 41px;
    height: 39px;
    background: #fbfafc;
    border: 1px solid #ebeaed;
    border-radius: 0px 4px 4px 0px;
    cursor: pointer;
`
const BoardIcons = styled(BoardIcon)(({ fill }) => ({
    ...(fill === 'board' && {
        fill: '#8639B5',
    }),
    ...(fill === 'list' && {
        fill: '#84818a',
    }),
}))

// `
//     fill: ${(props) => (props.fill ? '#84818a' : '#8639B5')};
// `
const ListIcons = styled(ListIcon)(({ fill }) => ({
    ...(fill === 'board' && {
        fill: '#84818a',
    }),
    ...(fill === 'list' && {
        fill: '#8639B5',
    }),
}))
// `
//     fill: ${(props) => (props.fill ? '#8639B5' : '#84818a')};
// `
const WrapperCards = styled('div')(({ variant }) => ({
    ...(variant === 'board' && {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridColumnGap: '19px',
        gridRowGap: '15px',
    }),
    ...(variant === 'list' && {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridColumnGap: '19px',
        gridRowGap: '15px',
    }),
}))
