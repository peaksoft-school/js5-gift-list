import { useState } from 'react'

import styled from '@emotion/styled'

import { ReactComponent as WarningIcon } from '../assets/icons/warning.svg'
import MainSearchInput from '../components/ui/MainSearchInput'

import MenuAccaunt from './MenuAccaount'

const options = [
    { name: 'A', id: '1' },
    { name: 'B', id: '2' },
]

const Header = () => {
    const [value, setValue] = useState('')
    const valueChangeHandler = (e) => {
        setValue(e.target.value)
    }
    const userFrofileHandler = (user) => {
        console.log(user)
    }
    return (
        <Headers>
            <InputDiv>
                <MainSearchInput
                    options={options}
                    value={value}
                    onChange={valueChangeHandler}
                    onClick={userFrofileHandler}
                />
            </InputDiv>
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
    margin-left: 294px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    position: fixed;
    top: 0;
    left: 0;
    background: #ffffff;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.03);
    z-index: 2;
`

const WarningSpan = styled('span')`
    margin-left: 30px;
`
const InputDiv = styled('div')`
    display: flex;
    flex-direction: column;
`
