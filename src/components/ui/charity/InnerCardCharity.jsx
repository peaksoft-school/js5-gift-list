import { useState } from 'react'

import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'

const InnerPage = (props) => {
    const [reserved, setReserved] = useState()
    const navigate = useNavigate()
    const link = () => {
        navigate(`/charity/${props.data.id}/edit_charity`)
    }
    const reserve = () => {
        setReserved(true)
    }
    return (
        <div style={styleForCard}>
            <Img src={props.data.img} alt="image" />
            <WrapperDiv>
                <User>
                    <StyledAvatar src={props.data.avatar} alt="avatar" />
                    <UserName>{props.data.userName}</UserName>
                    <ToBooking>{props.data.status}</ToBooking>
                </User>
                <StyledH1>{props.data.nameGift}</StyledH1>
                <Styledp>{props.data.aboutGift}</Styledp>
                <WrapperNameGiftAndDate>
                    <NameGift>Категория:</NameGift>
                    <DateGift>Состояние:</DateGift>
                </WrapperNameGiftAndDate>
                <WrapperPropsGiftAndDate>
                    <NameGiftProps>{props.data.category}</NameGiftProps>
                    <DateGiftProps>{props.data.state}</DateGiftProps>
                </WrapperPropsGiftAndDate>
                <WrapperNameGiftAndDate>
                    <NameGift>Подкатегория:</NameGift>
                    <DateGift>Дата добавления:</DateGift>
                </WrapperNameGiftAndDate>
                <WrapperPropsGiftAndDate>
                    <NameGiftProps>{props.data.subcategory}</NameGiftProps>
                    <DateGiftProps>{props.data.addDate}</DateGiftProps>
                </WrapperPropsGiftAndDate>
                {/* --------------------------------------------- */}
                <WrapperButtons>
                    {props.my && (
                        <>
                            <Button variant="outlined">Удалить</Button>
                            <Button onClick={link}>Редактировать</Button>
                        </>
                    )}
                    {props.notMy && (
                        <>
                            {!reserved && (
                                <>
                                    <label>
                                        <input type="checkbox" />
                                        Забронировать анонимно
                                    </label>
                                    <Button onClick={reserve}>
                                        Забронировать
                                    </Button>
                                </>
                            )}
                            {reserved && <Button>Отменить бронь</Button>}
                        </>
                    )}
                    {props.admin && <Button>Заблокировать</Button>}
                </WrapperButtons>
            </WrapperDiv>
            {/* </WrapperAll> */}
        </div>
    )
}
export default InnerPage
const styleForCard = {
    display: 'flex',
    margin: '30px',
    padding: '20px',
    width: '1086px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
}
const Img = styled('img')`
    width: 343px;
    height: 343px;
    border-radius: 8px;
`
const WrapperDiv = styled('div')`
    padding-left: 20px;
    padding-top: 50px;
    width: 683px;
`
const User = styled('div')`
    align-items: center;
    display: grid;
    grid-template-columns: 48px 500px 135px;
    margin-bottom: 14px;
`
const StyledAvatar = styled(Avatar)`
    width: 36px;
    height: 36px;
`
const UserName = styled('h2')`
    box-sizing: border-box;
    margin: 0;
`
const ToBooking = styled('p')`
    display: flex;
    justify-content: flex-end;
    color: #3774d0;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
`
const WrapperNameGiftAndDate = styled('div')`
    display: grid;
    grid-template-columns: 211px 472px;
    margin-bottom: 6px;
`
const NameGift = styled('div')`
    color: #5c5c5c;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
`
const DateGift = styled('div')`
    color: #5c5c5c;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
`
const WrapperPropsGiftAndDate = styled('div')`
    display: grid;
    grid-template-columns: 211px 472px;
    margin-bottom: 20px;
`
const NameGiftProps = styled('div')`
    color: #0ba360;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
`
const DateGiftProps = styled('div')`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    line-height: 130%;
`
const StyledH1 = styled('h1')`
    color: #3774d0;
    font-size: 24px;
    font-weight: 500;
`
const Styledp = styled('h1')`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 50px;
    width: 683px;
`
const WrapperButtons = styled('div')`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & button {
        margin: 15px;
    }
`
