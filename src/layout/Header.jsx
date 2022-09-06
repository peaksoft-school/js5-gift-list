import { useState } from 'react'

import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as WarningIcon } from '../assets/icons/warning.svg'
import MainSearchInput from '../components/ui/MainSearchInput'
import { mainSearchAction } from '../store/slices/mainSearchAction'

import MenuAccaunt from './MenuAccaount'

export const Header = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const data = useSelector((state) => state.users.result)

    const valueChangeHandler = (e) => {
        setValue(e.target.value)
        dispatch(mainSearchAction(e.target.value))
    }
    const inputClickHandler = (id) => {
        navigate(`/friends/${id}`)
        setValue('')
    }

    const stopPropagationFunction = (event) => {
        event.stopPropagation()
    }
    return (
        <Headers>
            <InputDiv>
                <MainSearchInput
                    options={data}
                    onChange={valueChangeHandler}
                    value={value}
                    onClick={inputClickHandler}
                    stopPropagationFunction={stopPropagationFunction}
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
