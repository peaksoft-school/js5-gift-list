import React from 'react'

import { styled } from '@mui/material'

import Tabs from './freindPage/Tabs'

const options = {
    friends: [],
    requestToFriends: [],
}

const Friends = () => {
    return (
        <MainDiv>
            <StyledMainTitle>Друзья</StyledMainTitle>
            <Tabs options={options} />
        </MainDiv>
    )
}

export default Friends
const MainDiv = styled('div')`
    width: 1086px;
    height: 100%;
    margin-top: 73px;
    margin-left: 30px;
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
