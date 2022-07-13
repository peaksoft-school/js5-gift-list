import React, { useState } from 'react'

import styled from '@emotion/styled'

import { ReactComponent as WarningIcon } from '../assets/icons/warning.svg'
import MainSearchInput from '../components/ui/MainSearchInput'

import MenuAccaunt from './MenuAccaount'

const USERS = [
    { id: '1', name: 'A' },
    { id: '2', name: 'd' },
    { id: '3', name: 'f' },
]
const Header = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    const openHandler = () => {
        setOpen(true)
    }

    const inputValueChangeHandler = (e) => {
        setValue(e.target.value)
    }
    return (
        <Headers>
            <MainSearchInput
                USERS={USERS}
                onClick={openHandler}
                open={open}
                value={value}
                onChange={inputValueChangeHandler}
            />

            <WarningSpan>
                <WarningIcon />
            </WarningSpan>
            <MenuAccaunt />
        </Headers>
    )
}

export default Header
const Headers = styled('header')`
    width: 1146px;
    height: 86px;
    margin-left: 290px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    background: #ffffff;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.03);
`

const WarningSpan = styled('span')`
    margin-left: 30px;
`
