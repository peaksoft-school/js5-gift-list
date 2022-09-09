import * as React from 'react'

import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import MeatBalls from '../meatBall/components/meatBalls'

export default function CharityCard(props) {
    const getIsBookedStaText = () => {
        const booked = 'Забронирован'
        const pending = 'В ожидании'
        if (props.data.toBook === null) {
            return pending
        }
        if (props.data.toBook !== null) {
            return booked
        }
        return booked
    }

    return (
        <StyledCard style={cursor} onClick={props.clickCard}>
            <StyledCardMedia
                style={cursor}
                component="img"
                image={props.data.image}
                alt="green iguana"
            />
            <StyledCardContentFirst>
                <StyledAvatar alt="Cindy Baker" src={props.data.avatar} />
                <UserName>{props.data.userName}</UserName>
            </StyledCardContentFirst>

            <NameGift>
                {props.data.giftName}
                <Status sts={props.data.status}>{props.data.status}</Status>
            </NameGift>

            <StyledCardContentSecond>
                <StyledDate>{props.data.date}</StyledDate>
                <Wrapper>
                    <StyledAvatarOnBook
                        alt="Cindy Baker"
                        src={props.data.avatarInBooking}
                    />
                    <StyledText>{getIsBookedStaText()}</StyledText>
                    <MeatBalls navigations={props.meatBallsOptions} />
                </Wrapper>
            </StyledCardContentSecond>
        </StyledCard>
    )
}

const StyledCard = styled(MuiCard)(() => ({
    width: '349px',
    height: '301px',
    display: 'flex',
    flexDirection: 'column',
}))
const cursor = {
    cursor: 'pointer',
}
const StyledAvatar = styled(Avatar)`
    width: 36px;
    height: 36px;
`
const StyledAvatarOnBook = styled(Avatar)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`
const UserName = styled('h1')`
    font-family: sans-serif;
    font-weight: 650;
    font-size: 16px;
    line-height: 19.36px;
    margin-left: 10px;
`
const Wrapper = styled('div')`
    display: flex;
    align-items: center;
`
const StyledCardContentFirst = styled(CardContent)(() => ({
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    height: '36px',
    width: '317px',
    padding: '0',
    margin: '16px',
    order: '-1',
    gridTemplateColumns: '48px 168px 101px',
}))

const StyledCardContentSecond = styled(CardContent)(() => ({
    height: '20px',
    padding: '10px',
    width: '317px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const StyledCardMedia = styled(CardMedia)(() => ({
    borderRadius: '6px',
    width: '317px',
    height: '149px',
    margin: '0 16px 0 16px',
    order: '0',
}))

const NameGift = styled('span')(() => ({
    fontFamily: 'sans-serif',
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    lineHeight: '18px',
    fontStyle: 'normal',
    padding: '0px',
    color: '#000000',
    margin: '0 16px 10px 16px',
    order: '-1',
}))
const StyledDate = styled('span')(() => ({
    fontFamily: 'sans-serif',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '16.94px',
    color: '#636c84',
}))
const StyledText = styled('span')`
    font-family: sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #636c84;
`
const Status = styled('span')(({ sts }) => ({
    fontFamily: 'sans-serif',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '15px',
    ...(sts === 'Новый' && {
        color: ' #0ba360',
    }),
    ...(sts === 'Б/У' && {
        color: ' #fd5200',
    }),
}))
