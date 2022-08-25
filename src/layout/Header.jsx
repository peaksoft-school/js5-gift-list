import { useState } from 'react'

import styled from '@emotion/styled'
// import { useSelector } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

// import { appFetch } from '../api/CustomFetch'
import { ReactComponent as WarningIcon } from '../assets/icons/warning.svg'
import MainSearchInput from '../components/ui/MainSearchInput'
// import { getUsersAction } from '../store/slices/getUsersAction'
// import { getUserSliceActions } from '../store/slices/getUsersSlise'
import { getUsersAction } from '../store/slices/getUsersAction'

import MenuAccaunt from './MenuAccaount'

export const Header = () => {
    // const options = [{ name: 'Ann', id: '1' }]
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const data = useSelector((state) => state)
    console.log(data)
    // const [user, setUser] = useState([])
    // console.log(user)
    // const valueChangeHandler = async (e) => {
    //     setValue(e.target.value)
    //     // dispatch(getUsersAction(e.target.value))
    //     if (e.target.value.trim() === '') {
    //         setUser([])
    //     }
    //     const user = await appFetch({
    //         url: `api/users/profile/${e.target.value}`,
    //     })
    //     setUser(user)
    // }
    const inputClickHandler = () => {
        // console.log(user)
    }
    const valueChangeHandler = (e) => {
        setValue(e.target.value)
        dispatch(getUsersAction(e.target.value))
        console.log(value)
    }
    return (
        <Headers>
            <InputDiv>
                <MainSearchInput
                    options={data}
                    onChange={valueChangeHandler}
                    value={value}
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
    display: flex;
    flex-direction: column;
`
