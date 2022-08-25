// import React, { useState } from 'react'

// import { useEffect, useState } from 'react'

import { styled } from '@mui/material'
// import { useDispatch, useSelector } from 'react-redux'

// import { appFetch } from '../api/CustomFetch'
import FriendTabs from '../components/users/FriendTabs'
// import { getUsersAction } from '../store/slices/getUsersAction'

const options = {
    friends: [
        { name: 'Doolot', id: '1', amountOfFriends: '1' },
        { name: 'Burul', id: '2', amountOfFriends: '4' },
    ],
    requestToFriends: [{ name2: 'Ali', id: '3', amountOfFriends: '1' }],
}

export const Friends = () => {
    // const [user, setUser] = useState()
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getUsersAction(setUser))
    // }, [])
    // const store = useSelector((state) => state.users)
    // console.log(store)
    // const [data, setData] = useState([])

    // const getData = async () => {
    //     const user = await appFetch({
    //         url: 'api/users/friends',
    //     })
    //     setData(user)
    // }
    // getData()
    // console.log(user)
    return (
        <MainDiv>
            <StyledMainTitle>Друзья</StyledMainTitle>
            <StyledDivTab>
                <FriendTabs options={options} />
            </StyledDivTab>
        </MainDiv>
    )
}

const MainDiv = styled('div')`
    width: 1086px;
    height: 1224px;
    margin-top: 73px;
    margin-left: 20px;
    background-color: #f4f6f6;
`

const StyledMainTitle = styled('span')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
    color: #020202;
    margin-bottom: 33px;
`
const StyledDivTab = styled('div')`
    margin-left: 10px;
`
