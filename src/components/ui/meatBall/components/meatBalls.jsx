import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import balls from '../../../../assets/images/Vector (4).png'
import anonim from '../../../../assets/images/анонимно.png'
import reserve from '../../../../assets/images/Забронировать.png'
import dislike from '../../../../assets/images/Пожаловаться.png'
import present from '../../../../assets/images/подарки.png';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        console.log('selecteda an item');
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img src={balls} />
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
                <MenuItem onClick={handleClose}><img src={reserve} />Забронировать</MenuItem>
                <MenuItem onClick={handleClose}><img src={anonim} />Забронировать анонимно</MenuItem>
                <MenuItem onClick={handleClose}><img src={present} />Добавить в мои подарки</MenuItem>
                <MenuItem onClick={handleClose}><img src={dislike} />Пожаловаться</MenuItem>
            </Menu>
        </div>
    );
}