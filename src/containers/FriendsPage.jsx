import { useEffect, useState } from 'react'

import { styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import FriendTabs from '../components/users/FriendTabs'
import {
    getFriendsAction,
    requestsToFriendAction,
} from '../store/slices/friendTabAction'

export const FriendsPage = () => {
    const dispatch = useDispatch()
    const [friends, setFriends] = useState()
    const [requestToFriend, setRequestToFriend] = useState()
    const store = useSelector((state) => state.users.friends)
    const requestToFriendData = useSelector(
        (state) => state.users.requestToFriend
    )

    useEffect(() => {
        dispatch(getFriendsAction(setFriends)).unwrap()
    }, [])

    useEffect(() => {
        setFriends(store)
    }, [store])

    useEffect(() => {
        dispatch(requestsToFriendAction(setRequestToFriend)).unwrap()
    }, [])

    useEffect(() => {
        setRequestToFriend(requestToFriendData)
    }, [requestToFriendData])
    return (
        <MainDiv>
            <StyledMainTitle>Друзья</StyledMainTitle>
            <StyledDivTab>
                {friends && (
                    <FriendTabs
                        friends={friends}
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
    margin-top: 113px;
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
