import * as React from 'react'

import {
    // Avatar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

import abc from '../../../assets/icons/1.png'
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
                            <span>
                                <abc />
                            </span>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                <div>inf</div>
            </div>
        </div>
    )
}
export default FriendProfile
