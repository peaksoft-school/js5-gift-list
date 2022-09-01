import { useState } from 'react'

import styled from '@emotion/styled'

import { ReactComponent as WarningIcon } from '../assets/icons/warning.svg'
import MainSearchInput from '../components/ui/MainSearchInput'

import MenuAccaunt from './MenuAccaount'

const options = [{ name: 'Adilet', id: '1' }]
export const Header = () => {
    const [value, setValue] = useState('')
    const valueChangeHandler = (e) => {
        setValue(e.target.value)
    }
    const inputClickHandler = (user) => {
        console.log(user)
    }
    return (
        <Headers>
            <InputDiv>
                <MainSearchInput
                    options={options}
                    value={value}
                    onChange={valueChangeHandler}
                    onClick={inputClickHandler}
                />
            </InputDiv>
            <WarningSpan>
                <WarningIcon />
            </WarningSpan>
            <MenuAccaunt />
        </Headers>
    )
}

const Headers = styled('header')`
    width: 100%;
    height: 86px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    position: fixed;
    top: 0;
    /* left: 0; */
    background: #ffffff;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.03);
    z-index: 2;
`

const WarningSpan = styled('span')`
    margin-left: 30px;
`
const InputDiv = styled('div')`
    width: 60%;
    display: flex;
    flex-direction: column;
`
