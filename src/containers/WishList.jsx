import React, { useState } from 'react'

import { styled } from '@mui/system'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as BoardIcon } from '../assets/icons/boardIcon.svg'
import { ReactComponent as ListIcon } from '../assets/icons/listIcon.svg'
import { ReactComponent as Plus } from '../assets/icons/plusIconInTheButton.svg'
import Button from '../components/ui/Button'
import Notification from '../components/ui/notification/Notification'
import GiftCard from '../components/users/GiftCard'

export const array = []

const WishList = () => {
    const { wishCard } = useSelector((data) => data)
    console.log(wishCard)
    console.log('hello')
    const [format, setFormat] = useState(false)
    const navigate = useNavigate()
    const a = (id) => {
        navigate(`${id}`)
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
    // dispatch(getWishGift())
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
                    <Button onClick={() => b('add')} startIcon={<Plus />}>
                        Добавить желание
                    </Button>
                </WrapperIcon>
            </WrapperTop>
            <WrapperCards variant={formatCard}>
                {array?.map((el) => (
                    <GiftCard
                        key={el.id}
                        id={el.id}
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
            <Notification />
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
