import { useEffect } from 'react'

import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import Button from '../components/ui/Button'
import {
    deleteWishGift,
    getWishWithId,
} from '../store/slices/AddWishCardActions'

const InnerPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { innerPage } = useSelector((state) => state.wishCard)
    const { wishListId } = useParams()
    useEffect(() => {
        dispatch(getWishWithId(wishListId))
    }, [])

    const toEditPage = () => {
        navigate(`/wish_list/${wishListId}/edit`)
    }
    const deleteGift = () => {
        dispatch(deleteWishGift(wishListId))
        navigate('/wish_list')
    }
    const date = innerPage?.wish?.wishDate?.split('-').reverse('-').join('.')

    return (
        <WrapperAll>
            <Img src={innerPage?.wish?.photo} alt="image" />
            <WrapperDiv>
                <User>
                    <StyledAvatar src={innerPage?.user?.photo} alt="avatar" />
                    <UserName>
                        {innerPage?.user?.firstName} {innerPage?.user?.lastName}
                    </UserName>
                    <ToBooking>
                        {!innerPage?.bookedUser ? (
                            <SpanAvatar>
                                <AvatarToBooking
                                    src={innerPage?.bookedUser?.photo}
                                />
                                Забронирован
                            </SpanAvatar>
                        ) : (
                            'В ожидании'
                        )}
                    </ToBooking>
                </User>
                <WrapperNameGiftAndDate>
                    <NameGift>Название праздника:</NameGift>
                    <DateGift>Дата праздника:</DateGift>
                </WrapperNameGiftAndDate>
                <WrapperPropsGiftAndDate>
                    <NameGiftProps>
                        {innerPage?.wish?.holidayName}
                    </NameGiftProps>
                    <DateGiftProps>{date}</DateGiftProps>
                </WrapperPropsGiftAndDate>
                <StyledH1>{innerPage?.wish?.giftName}</StyledH1>
                <Styledp>{innerPage?.wish?.description} </Styledp>
                <WrapperButtons>
                    <Button variant="contained" onClick={toEditPage}>
                        Редактировать
                    </Button>
                    <Button variant="contained" onClick={deleteGift}>
                        Удалить
                    </Button>
                </WrapperButtons>
            </WrapperDiv>
        </WrapperAll>
    )
}
export default InnerPage
const WrapperAll = styled('div')`
    display: flex;
    padding: 20px;
    max-width: 1046px;
    max-height: 871px;
`
const Img = styled('img')`
    width: 343px;
    height: 343px;
    border-radius: 8px;
`
const WrapperDiv = styled('div')`
    padding-left: 20px;
    padding-top: 50px;
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
const AvatarToBooking = styled(Avatar)`
    width: 20px;
    height: 20px;
    display: inline-flex;
    margin-right: 5px;
`
const SpanAvatar = styled('span')`
    display: flex;
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
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`
const WrapperNameGiftAndDate = styled('div')`
    display: grid;
    grid-template-columns: 211px 472px;
    margin-bottom: 6px;
`
const NameGift = styled('div')`
    color: #5c5c5c;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
`
const DateGift = styled('div')`
    color: #5c5c5c;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
`
const WrapperPropsGiftAndDate = styled('div')`
    display: grid;
    grid-template-columns: 211px 472px;
    margin-bottom: 20px;
`
const NameGiftProps = styled('div')`
    color: #0ba360;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
`
const DateGiftProps = styled('div')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    line-height: 130%;
`
const StyledH1 = styled('h1')`
    color: #3774d0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    border-bottom: 2px solid #3774d0;
    display: inline;
`
const Styledp = styled('h1')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    margin-bottom: 50px;
`
const WrapperButtons = styled('div')`
    display: flex;
    justify-content: flex-end;
    & button {
        margin-left: 24px;
    }
`
