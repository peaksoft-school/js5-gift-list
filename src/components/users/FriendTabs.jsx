import React, { useState, useEffect } from 'react'

import styled from '@emotion/styled'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Box, Tab } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import FriendsCard from './FriendsCard'

export default function FriendTabs({ options }) {
    const [value, setValue] = useState('1')

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(value))
    }, [value])
    useEffect(() => {
        const value = JSON.parse(localStorage.getItem('items'))
        if (value) {
            setValue(value)
        }
    }, [])
    const navigate = useNavigate()

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const handleInnerPage = (id) => {
        navigate(`/friends/${id}`)
    }

    const myFriends = (
        <StyledSpan>
            Мои друзья
            <h4>{options.friends.length}</h4>
        </StyledSpan>
    )

    const requstToFriends = (
        <StyledSpan>
            Запросы в друзья
            <h4>{options.requestToFriends.length}</h4>
        </StyledSpan>
    )
    return (
        <StyledBoxContainer>
            <TabContext value={value}>
                <StyledBox>
                    <StyledTabList onChange={handleChange}>
                        <StyledTab label={myFriends} value="1" />
                        <StyledTab label={requstToFriends} value="2" />
                    </StyledTabList>
                </StyledBox>
                <StyledTabPanel value="1">
                    {options.friends.map((el) => {
                        return (
                            <FriendsCard
                                name={el.name}
                                id={el.id}
                                key={el.id}
                                amountOfHolidays={el.amountOfHolidays}
                                amountOfWishes={el.amountOfWishes}
                                onClick={() => {
                                    handleInnerPage(el.id)
                                }}
                            />
                        )
                    })}
                </StyledTabPanel>
                <StyledTabPanel value="2">
                    <StyledDivRequestToFriends>
                        {options.requestToFriends.map((el) => {
                            return (
                                <FriendsCard
                                    name={el.name}
                                    id={el.id}
                                    key={el.id}
                                    onClick={() => {
                                        handleInnerPage(el.id)
                                    }}
                                    amountOfHolidays={el.amountOfHolidays}
                                    amountOfWishes={el.amountOfWishes}
                                    variant="requestToFriends"
                                />
                            )
                        })}
                    </StyledDivRequestToFriends>
                </StyledTabPanel>
            </TabContext>
        </StyledBoxContainer>
    )
}

const StyledBoxContainer = styled(Box)`
    width: 1086px;
    height: 100%;
    background: #f7f8fa;
`
const StyledDivRequestToFriends = styled('div')`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 14px;
    grid-row-gap: 20px;
`
const StyledTabList = styled(TabList)`
    & .MuiTabs-indicator {
        display: none;
    }
    & .Mui-selected {
        background-color: #8639b5;
        span {
            color: white;
        }
        h4 {
            color: #8639b5;
            background-color: white;
        }
    }
`
const StyledBox = styled(Box)`
    width: 1086px;
    height: 33px;
    border-radius: 9px;
    padding-bottom: 10px;
    box-sizing: border-box;
    border: 0.5px solid #797979;
    margin-left: -10px;
    margin-top: 22px;
    display: flex;
    align-items: center;
`
const StyledTab = styled(Tab)`
    min-width: 541px;
    height: 28px;
    background: #ffffff;
    border-radius: 7px;
    box-sizing: border-box;
    padding: 0;
    margin-top: 15.3px;
    left: 2px;
    min-width: 541px;
    min-height: 10px;
    list-style: none;
`

const StyledSpan = styled('span')`
    width: 100%;
    text-transform: none;
    color: #8d949e;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    padding-left: 361px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;

    h4 {
        width: 20px;
        border-radius: 50%;
        background: #595656;
        color: #ffffff;
        margin-left: 11px;
        justify-content: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.02em;
    }
`

const StyledTabPanel = styled(TabPanel)`
    position: absolute;
    margin-left: -30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
`
