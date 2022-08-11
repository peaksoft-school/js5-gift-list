// import * as React from 'react'
//
import {
    // Avatar,
    // Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    styled,
} from '@mui/material'
import { Link } from 'react-router-dom'

import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg'
import { ReactComponent as Instagram } from '../../../assets/icons/instagram.svg'
import { ReactComponent as Telegram } from '../../../assets/icons/telegram.svg'
import { ReactComponent as Wk } from '../../../assets/icons/wk.svg'
import Button from '../../ui/Button'

const FriendProfile = () => {
    return (
        <div style={{ border: '2px solid green' }}>
            <h4>Мои друзья/ Аида Каримова</h4>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginLeft: '20px',
                }}
            >
                <div>
                    surot
                    <StyledCard>
                        <StyledCardMedia
                            image="https://drakemall-files-new.s3.eu-central-1.amazonaws.com/Totoro%20F-cjn62uqi702zt01s6g9cm57nw.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <StyledTypography>Аида Каримова</StyledTypography>
                            <div>
                                <Button
                                    variant="addButton"
                                    onClick={() => {
                                        console.log('add')
                                    }}
                                >
                                    Добавить в друзья
                                </Button>

                                {/* <Button>Принять заявку</Button>
                                <Button variant="outlined">Отклонить</Button>
                                <Button variant="outlined">
                                    Удалить из друзей
                                </Button> */}
                            </div>
                        </CardContent>
                        <CardActions>
                            <Link to="https://www.instagram.com/">
                                <Facebook />
                            </Link>
                            <Link to="./">
                                <Instagram />
                            </Link>
                            <Link to="./">
                                <Telegram />
                            </Link>
                            <Link to="./">
                                <Wk />
                            </Link>
                        </CardActions>
                    </StyledCard>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <h4>Основная информация</h4>
                    </div>
                    <div>
                        <div>
                            <p>Город:</p>
                            <h6>Бишкек</h6>
                            <p>Email:</p>
                            <h6>Aika1998@gmail.com</h6>
                        </div>
                        <div>
                            <p>Дата рождения:</p>
                            <h6>12.04.1998</h6>
                            <p>Номер телефона:</p>
                            <h6>+9967052364</h6>
                        </div>
                    </div>
                    <div>
                        <h4>Интересы, хобби</h4>
                    </div>
                    <div>
                        <div>
                            <p>Интересы,хобби:</p>
                            <h6>Танцы, иностранные языки, готовка</h6>
                        </div>
                        <div>
                            <p>Важно знать:</p>
                            <h6>Против спиртных напитков</h6>
                        </div>
                    </div>
                    <div>
                        <h4>Доп. инфа</h4>
                    </div>
                    <div>
                        <div>
                            <p>Размер одежды:</p>
                            <h6>Танцы, иностранные языки, готовка</h6>
                        </div>
                        <div>
                            <p>Важно знать:</p>
                            <h6>Против спиртных напитков</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FriendProfile

const StyledCard = styled('div')`
    /* outline-style: none; */
`
const StyledCardMedia = styled(CardMedia)`
    width: 187px;
    height: 190px;
    border-radius: 8px;
    border: 1px solid gray;
`
const StyledTypography = styled(Typography)`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
    color: #020202;
`
