import React, { useEffect } from 'react'

import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'

import deleteUsersIcon from '../../assets/icons/deleteIcon.svg'
import UserCard from '../../components/users/UserCard'
import { getAllUsers } from '../../store/slices/usersPageAction'

export const UsersPage = () => {
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.usersCard)
    const option = [
        {
            icon: deleteUsersIcon,
            title: 'Удалить',
            id: '3',
            // clickItem: () => {},
        },
    ]
    useEffect(() => {
        dispatch(getAllUsers())
        console.log('test')
    }, [])
    console.log(users)
    return (
        <WrapperPage>
            <H1>Пользователи</H1>
            <WrapperCards>
                <UserCard option={option} />
                <UserCard option={option} />
                <UserCard option={option} />
                <UserCard option={option} />
                <UserCard option={option} />
                <UserCard option={option} />
            </WrapperCards>
        </WrapperPage>
    )
}

const WrapperPage = styled('div')`
    margin: 0 0 0 20px;
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
