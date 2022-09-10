import React, { useState } from 'react'

import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { ReactComponent as WarningIcon } from '../assets/icons/warning.svg'
import MainSearchInput from '../components/ui/MainSearchInput'
import SearchInputwithSelect from '../components/ui/searchInputWithSelect/SearchInputWithSelect'
import { mainSearchAction } from '../store/slices/mainSearchAction'

import MenuAccaunt from './MenuAccaount'

export const Header = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const loc = useLocation()
    const { options } = useSelector((state) => state.users)

    const valueChangeHandler = (e) => {
        setValue(e.target.value)
        dispatch(mainSearchAction(e.target.value))
    }
    const searchResultOptionSelecHandler = (id) => {
        navigate(`/friends/${id}`)
        setValue('')
    }

    const stopPropagationHandler = (event) => {
        event.stopPropagation()
    }
    return (
        <Headers>
            <InputDiv>
                {loc.pathname === '/charity_users' ? (
                    <SearchInputwithSelect />
                ) : (
                    <MainSearchInput
                        options={options}
                        onChange={valueChangeHandler}
                        value={value}
                        onClick={searchResultOptionSelecHandler}
                        stopPropagationHandler={stopPropagationHandler}
                    />
                )}
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
    width: 60%;
    display: flex;
    flex-direction: column;
`
