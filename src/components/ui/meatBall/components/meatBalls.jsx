import { useState } from 'react'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import styled from 'styled-components'

import balls from '../../../../assets/images/Vector (4).png'
import anonim from '../../../../assets/images/анонимно.png'
import reserve from '../../../../assets/images/Забронировать.png'
import present from '../../../../assets/images/подарки.png'
import dislike from '../../../../assets/images/Пожаловаться.png'

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img src={balls} alt="balls" />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Img src={reserve} alt="reserve" />
                    Забронировать
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Img src={anonim} alt="anonimPhtot" />
                    Забронировать анонимно
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Img src={present} alt="present" />
                    Добавить в мои подарки
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Img src={dislike} alt="dislike" />
                    Пожаловаться
                </MenuItem>
            </Menu>
        </div>
    )
}
const Img = styled.img`
    margin-right: 10px;
`
