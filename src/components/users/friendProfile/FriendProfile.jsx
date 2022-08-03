// import * as React from 'react'
//
import {
    // Avatar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

import { ReactComponent as Abc } from '../../../assets/icons/facebook.svg'
import AddButton from '../../ui/Button'

const FriendProfile = () => {
    return (
        <div>
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
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://drakemall-files-new.s3.eu-central-1.amazonaws.com/Totoro%20F-cjn62uqi702zt01s6g9cm57nw.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Аида Каримова
                            </Typography>
                            <div>
                                <AddButton
                                    variant="addButton"
                                    onClick={() => {
                                        console.log('add')
                                    }}
                                >
                                    Добавить в друзья
                                </AddButton>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Link to="https://www.instagram.com/">
                                <Abc />
                                <p>aaaaaaaaaaa</p>
                            </Link>
                            <Button size="small">Learn More</Button>
                            <p>aaaaaaaaaaa</p>
                        </CardActions>
                    </Card>
                </div>
                <div>inf</div>
            </div>
        </div>
    )
}
export default FriendProfile
