import React from 'react'

import { styled } from '@mui/material'

import FriendTabs from '../components/users/FriendTabs'

const options = {
    friends: [{ name: 'Ann', id: '1', amountOfFriends: '1' }],
    requestToFriends: [{ name: 'Ali', id: '1', amountOfFriends: '1' }],
}

export const Friends = () => {
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
