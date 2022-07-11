import React from 'react'

import styled from '@emotion/styled'

import { ReactComponent as WarningIcon } from '../assets/icons/warning.svg'

import MenuAccaunt from './Menu'

const Header = () => {
    return (
        <Headers>
            <HeaderInput type="text" />
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
    margin-left: 290px;
    display: flex;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    background: #ffffff;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.03);
`
const HeaderInput = styled('input')`
    width: 740px;
    height: 19px;

    margin-left: 30px;
`
const WarningSpan = styled('span')`
    margin-left: 30px;
`
