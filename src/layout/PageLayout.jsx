import React from 'react'

import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { RolePaths } from '../utils/constants/constants'

import Header from './Header'

const role = 'USER'

const PageLayout = ({ children }) => {
    return (
        <Layout>
            <>
                <NavbarWrapper>
                    <SaitBar>
                        <TextGift>GIFT LIST</TextGift>
                        <NavWrapper>
                            {RolePaths[role].map((item) => {
                                return (
                                    <NavbarLink
                                        key={item.pathName}
                                        to={item.path}
                                    >
                                        <div>
                                            <span> {item.icon} </span>
                                            <span> {item.pathName}</span>
                                        </div>
                                    </NavbarLink>
                                )
                            })}
                        </NavWrapper>
                    </SaitBar>
                </NavbarWrapper>
                <div>
                    <Header />
                    <Content>{children}</Content>
                </div>
            </>
        </Layout>
    )
}

export default PageLayout
const Layout = styled('div')`
    display: grid;
    grid-template-columns: 290px 1046px;
`
const SaitBar = styled('div')`
    background: linear-gradient(180deg, #8639b5 0%, #092056 100%);
    position: fixed;
    width: 290px;
    height: 100%;
    box-sizing: border-box;
    margin-top: -8px;
    margin-left: -8px;
    text-align: start;
`
const TextGift = styled('h2')`
    text-align: center;
    color: white;
    font-family: 'Inter', sans-serif;
    margin-bottom: 34px;
`
const Content = styled('main')`
    background: #f7f8fa;
    margin-top: 86px;
`

const NavbarWrapper = styled('div')``
const NavWrapper = styled('nav')`
    color: white;
    font-size: 18px;
`
const NavbarLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    display: flex;
    margin-left: 15px;
    letter-spacing: 0.01em;
    width: 254px;
    height: 50px;
    padding-left: 9px;
    font-family: 'Inter', sans-serif;
    align-items: center;
    margin-top: 4px;

    div {
        display: flex;
        align-items: center;
        font-family: 'Inter', sans-serif;

        & :first-child {
            align-self: center;
        }
        & :last-child {
            margin-left: 15px;
        }
    }

    &.active {
        display: flex;
        letter-spacing: 0.01em;
        background-color: rgba(255, 255, 255, 0.1);
        width: 254px;
        height: 50px;
        text-decoration: none;
        font-family: 'Inter', sans-serif;

        border-radius: 8px;
        position: relative;
        z-index: 10;
        div {
            display: flex;

            color: white;
        }
    }
`
