import React from 'react'

import styled from '@emotion/styled'
import Menu from '@mui/material/Menu'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'

import { ReactComponent as Exit } from '../assets/icons/ExitIcon.svg'
import { ReactComponent as Profile } from '../assets/icons/Profile.svg'
import { ReactComponent as ProfileIcon } from '../assets/icons/ProfileIcon.svg'
import { ReactComponent as Vector } from '../assets/icons/Vector.svg'

const MenuAccaunt = () => {
    return (
        <AccauntProfile>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <>
                        <MenuMui
                            variant="contained"
                            {...bindTrigger(popupState)}
                        >
                            <span>
                                <Profile />
                            </span>
                            <p>Naruto Uzumaki</p>
                            <p>
                                <Vector />
                            </p>
                        </MenuMui>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>
                                <p>
                                    <ProfileIcon />
                                </p>
                                <p>Профиль</p>
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                                <p>
                                    <Exit />
                                </p>

                                <p>Выйти</p>
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </PopupState>
        </AccauntProfile>
    )
}

export default MenuAccaunt
const AccauntProfile = styled('div')`
    display: flex;
`
const MenuMui = styled('div')`
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 24px;
    p {
        margin-left: 6px;
    }
`
const MenuItem = styled('div')`
    display: flex;
    width: 120px;
    height: 44px;
    font-family: 'Inter', sans-serif;
    align-items: center;
    p {
        margin-left: 10px;
        font-family: 'Inter', sans-serif;
    }
`
