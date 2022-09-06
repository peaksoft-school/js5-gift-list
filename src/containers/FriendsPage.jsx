import { useEffect, useState } from 'react'

import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import FriendTabs from '../components/users/FriendTabs'
import {
    friendsAction,
    requestsToFriendAction,
} from '../store/slices/friendTabAction'

export const Friends = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState()
    const [requestToFriend, setRequestToFriend] = useState()

    useEffect(() => {
        dispatch(friendsAction(setUser))
    }, [])

    const store = useSelector((state) => state.users.friends)

    const requestToFriendData = useSelector(
        (state) => state.users.requestToFriend
    )

    useEffect(() => {
        setUser(store)
    }, [store])

    useEffect(() => {
        dispatch(requestsToFriendAction(setRequestToFriend))
    }, [])

    useEffect(() => {
        setRequestToFriend(requestToFriendData)
    }, [requestToFriendData])
    return (
        <MainDiv>
            <StyledMainTitle>Друзья</StyledMainTitle>
            <StyledDivTab>
                {user && (
                    <FriendTabs
                        options={user}
                        requestToFriend={requestToFriend}
                    />
                )}
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
