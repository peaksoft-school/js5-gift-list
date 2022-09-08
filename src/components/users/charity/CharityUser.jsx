import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import toBook from '../../../assets/icons/toBook.svg'
import {
    getCharity,
    getMyCharity,
    toBookCharity,
    toCancelCharity,
} from '../../../store/slices/GiftActions'
// import photo from '../../admin/Rectangle 8 (1).png'
import Button from '../../ui/Button'
import CharityCard from '../../ui/charity/CharityCard'
import Notification from '../../ui/notification/Notification'

const CharityUser = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.addCharity)
    // const myCharity = useSelector((state) => state.addCharity?.myCharity)
    const navigate = useNavigate()
    const link = (b) => {
        navigate(`${b}`)
    }
    useEffect(() => {
        dispatch(getCharity())
        dispatch(getMyCharity())
    }, [])
    const clickCard = (id) => {
        navigate(`/${id}/innerPage`)
    }
    const addCharity = () => {
        navigate('/charity/add_charity')
    }
    const clickmyCharity = (id) => {
        navigate(`/${id}/my_charity`)
    }
    return (
        <div>
            <Notification />
            <Header>
                <div>
                    <h2>Благотворительность</h2>
                    <Img>
                        {state.myCharity?.map((el) => (
                            <img
                                key={el.gift.giftId}
                                src={el.gift.photo}
                                alt="my charities"
                                style={{ cursor: 'pointer' }}
                                onClick={() => clickmyCharity(el.gift.giftId)}
                            />
                        ))}
                    </Img>
                </div>
                <Button onClick={addCharity}>+ Добавить подарок</Button>
            </Header>
            <CardList>
                {state.data?.map((el) => (
                    <CharityCard
                        icon={toBook}
                        clickItem={(id) => dispatch(toBookCharity(id))}
                        cancelBooking={(id) => dispatch(toCancelCharity(id))}
                        userName={el.ownerUser.firstName}
                        bookedUser={el.bookedUser?.userId}
                        key={el.gift.giftId}
                        data={el.gift}
                        clickCard={(event) => {
                            event.stopPropagation()
                            clickCard(el.gift.giftId)
                        }}
                        id={el.gift.giftId}
                        onClickImg={() => link(`/${el.id}/innerPage`)}
                    />
                ))}
            </CardList>
        </div>
    )
}
export default CharityUser
const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1099px;
    margin: 30px auto;
    padding: 0px;
    & div {
        margin: 10px 8px;
    }
`
const Header = styled.div`
    display: flex;
    align-items: flex-start;
    width: 1099px;
    margin: 5px auto;
    padding: 0px;
    justify-content: space-between;
    & button {
        width: auto;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
    }
    & div {
        display: flex;
        justify-content: flex-start;
    }
    & h2 {
        margin: 0px 20px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        /* height: auto; */
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: 0.2px;

        /* black */

        color: #020202;
    }
    & img {
        border-radius: 50%;
        width: 35px;
        height: 35px;
        margin: 5px 3px;
    }
`
const Img = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 80%;
`
