import React, { useEffect } from 'react'

import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import unBlockIcon from '../../assets/icons/cancelBooking.svg'
import blockIcon from '../../assets/icons/toBooking.svg'
import UserCard from '../../components/users/UserCard'
import {
    getAllUsers,
    toBlockUser,
    toUnBlockUser,
} from '../../store/slices/usersPageAction'

export const UsersPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { users } = useSelector((state) => state.usersCard)
    const blockOption = [
        {
            icon: blockIcon,
            title: 'Заблокировать',
            id: '3',
            clickItem: (id) => {
                blockingUser(id)
            },
        },
    ]
    const unBlockOption = [
        {
            icon: unBlockIcon,
            title: 'Разблокировать',
            id: '3',
            clickItem: (id) => {
                unBlockingUser(id)
            },
        },
    ]
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    const toInnerPage = (id) => {
        navigate(`${id}`)
    }
    function blockingUser(id) {
        dispatch(toBlockUser(id))
    }
    function unBlockingUser(id) {
        dispatch(toUnBlockUser(id))
    }
    return (
        <WrapperPage>
            <H1>Пользователи</H1>
            <WrapperCards>
                {users.map((el) => (
                    <UserCard
                        key={el.id}
                        id={el.id}
                        img={el.photo}
                        amountWishes={el.countGift}
                        lastName={el.last_name}
                        firstName={el.first_name}
                        option={el.isBlock ? unBlockOption : blockOption}
                        onClick={() => toInnerPage(el.id)}
                    />
                ))}
            </WrapperCards>
        </WrapperPage>
    )
}

const WrapperPage = styled('div')`
    margin: 110px 0 0 20px;
`
const H1 = styled('h1')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
`
const WrapperCards = styled('div')`
    display: flex;
    flex-wrap: wrap;
`
