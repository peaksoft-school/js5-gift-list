import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import toBook from '../../../assets/icons/toBook.svg'
import { getCharity } from '../../../store/slices/GiftActions'
import photo from '../../admin/Rectangle 8 (1).png'
import Button from '../../ui/Button'
import CharityCard from '../../ui/charity/CharityCard'

const CharityUser = () => {
    const dispatch = useDispatch()
    const [charity, setCharity] = useState()
    const [isReserved, setIsReserved] = useState(false)
    const myCharity = [photo, photo, photo, photo]
    const navigate = useNavigate()
    const link = (b) => {
        navigate(`${b}`)
    }
    useEffect(() => {
        dispatch(getCharity(setCharity))
    }, [])
    const navigation = [
        {
            icon: toBook,
            title: isReserved ? 'снять бронь' : 'забронировать',
            id: '1',
            clickItem: () => {
                setIsReserved((prev) => !prev)
            },
        },
    ]
    console.log(charity)
    const clickCard = (id) => {
        console.log(id)
        navigate(`/${id}/innerPage`)
    }
    const addCharity = () => {
        navigate('/charity/add_charity')
    }
    return (
        <div>
            <Header>
                <div>
                    <h2>Благотворительность</h2>
                    <Img>
                        {myCharity.map((el) => (
                            <img src={el} alt="my charities" />
                        ))}
                    </Img>
                </div>
                <Button onClick={addCharity}>+ Добавить подарок</Button>
            </Header>
            <CardList>
                {charity &&
                    charity.map((el) => (
                        <CharityCard
                            userName={el.user.firstName}
                            key={el.gift.giftId}
                            meatBallsOptions={navigation}
                            data={el.gift}
                            clickCard={() => clickCard(el.gift.giftId)}
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
    align-items: center;
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

        /* primary / white */

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
        margin: 0px 10px;
    }
`
const Img = styled.div`
    display: flex;
`
