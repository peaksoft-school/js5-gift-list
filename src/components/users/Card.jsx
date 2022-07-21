import * as React from 'react'

import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import editIcon from '../../assets/icons/addInMyGifts.svg'
import deleteIcon from '../../assets/icons/toBook.svg'
import MeatBalls from '../ui/meatBall/components/meatBalls'

const navigation = [
    { icon: editIcon, title: 'Редактировать', id: '1' },
    { icon: deleteIcon, title: 'удалить', id: '2' },
    { icon: deleteIcon, title: 'удалить', id: '3' },
]

export default function Card(props) {
    const { variant, onClick } = props
    return (
        <StyledCard variants={variant}>
            <StyledCardMedia
                variants={variant}
                component="img"
                height="149"
                image="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/colorize-black-and-white-photos/desktop/colorize_black_and_white_photos_P1_900x420.jpg.img.jpg"
                alt="green iguana"
            />

            <StyledCardContentFirst variants={variant}>
                <StyledAvatar
                    alt="Cindy Baker"
                    src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg"
                />
                <UserName>Aida Karimova</UserName>
                <StyledBirthday>День рождения</StyledBirthday>
            </StyledCardContentFirst>
            <NameGift variants={variant}>Iphone 13 pro</NameGift>
            <StyledCardContentSecond variants={variant}>
                <StyledDate variants={variant}>13 22 2222</StyledDate>
                <Wrapper>
                    <StyledAvatarOnBook
                        alt="Cindy Baker"
                        src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                    />
                    <StyledText>{props.toBook}Забронирован</StyledText>
                </Wrapper>
                <MeatBalls navigations={navigation} onClick={onClick} />
            </StyledCardContentSecond>
        </StyledCard>
    )
}

const StyledCard = styled(MuiCard)(({ variants }) => ({
    ...(variants === 'board' && {
        width: '349px',
        height: '301px',
        display: 'flex',
        flexDirection: 'column',
    }),
    ...(variants === 'list' && {
        width: '533px',
        height: '138px',
        display: 'flex',
        position: 'relative',
    }),
}))

const StyledAvatar = styled(Avatar)`
    width: 36px;
    height: 36px;
`
const StyledAvatarOnBook = styled(Avatar)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`
const UserName = styled('span')`
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    line-height: 19.36px;
`
const Wrapper = styled('div')`
    display: flex;
    justify-content: flex-end;
`
const StyledCardContentFirst = styled(CardContent)(({ variants }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '36px',
    ...(variants === 'board' && {
        width: '317px',
        height: '36px',
        padding: '0',
        margin: '16px',
        order: '-1',
        display: 'grid',
        gridTemplateColumns: '48px 168px 101px',
    }),
    ...(variants === 'list' && {
        display: 'grid',
        gridTemplateColumns: '48px 188px 101px',
        width: '341px',
        padding: '0',
        margin: '16px 16px 0 0',
    }),
}))

const StyledCardContentSecond = styled(CardContent)(({ variants }) => ({
    display: 'grid',
    height: '20px',
    padding: '0',
    ...(variants === 'board' && {
        gridTemplateColumns: '80px 192px 10px',
        order: '1',
        width: '317px',
        margin: '15px 16px 0 16px',
    }),
    ...(variants === 'list' && {
        gridTemplateColumns: '80px 214px 10px',
        position: 'absolute',
        width: '357px',
        top: '100px',
        left: '180px',
    }),
}))

const StyledCardMedia = styled(CardMedia)(({ variants }) => ({
    borderRadius: '6px',
    ...(variants === 'board' && {
        width: '317px',
        height: '149px',
        margin: '0 16px 0 16px',
        order: '0',
    }),
    ...(variants === 'list' && {
        width: '146px',
        height: '106px',
        margin: '16px 14px 16px 16px',
    }),
}))

const NameGift = styled('span')(({ variants }) => ({
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '18px',
    color: '#000000',
    ...(variants === 'board' && {
        margin: '0 0 10px 16px',
        order: '-1',
    }),
    ...(variants === 'list' && {
        position: 'absolute',
        left: '180px',
        top: '70px',
    }),
}))
const StyledDate = styled('span')(({ variants }) => ({
    fontStyle: 'Inter',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '16.94px',
    color: '#636c84',
    ...(variants === 'board' && {}),
    ...(variants === 'list' && {}),
}))
const StyledText = styled('span')`
    font-size: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #636c84;
`
const StyledBirthday = styled('span')`
    display: flex;
    justify-content: flex-end;
    font-size: Inter;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #0ba360;
`
