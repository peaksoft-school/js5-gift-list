import { useState } from 'react'

import {
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    styled,
} from '@mui/material'
import { useParams } from 'react-router-dom'

import { ReactComponent as Facebook } from '../assets/icons/facebookFriendProfilePage.svg'
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg'
import { ReactComponent as Telegram } from '../assets/icons/telegram.svg'
import { ReactComponent as Vk } from '../assets/icons/vkFriendProfile.svg'
import Button from '../components/ui/Button'
import CharityCard from '../components/ui/charity/CharityCard'
import GiftCard from '../components/users/GiftCard'
import MyHolidays from '../components/users/MyHolidaysCard'

const options = {
    friends: [
        { name: 'Doolot', id: '1', amountOfFriends: '1' },
        { name: 'Burul', id: '2', amountOfFriends: '4' },
    ],
    requestToFriends: [{ name2: 'Ali', id: '3', amountOfFriends: '1' }],
}

const navigation = [
    {
        // icon: blockIcon,
        title: 'Заблокировать',
        id: '1',
        clickItem: () => {},
    },
    {
        // icon: deleteIcon,
        title: 'удалить',
        id: '2',
        // clickItem: props.deleteFunc,
    },
]

const data = [
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
        id: '1',
        date: '20.01.2022',
        title: 'Кадыр тун',
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
        id: '2',
        date: '20.01.2022',
        title: 'Кадыр тун',
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
        id: '3',
        date: '20.01.2022',
        title: 'Кадыр тун',
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
        id: '4',
        date: '20.01.2022',
        title: 'Кадыр тун',
    },
    {
        img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
        id: '5',
        date: '20.01.2022',
        title: 'Кадыр тун',
    },
]

const option = [
    {
        toBook: 'reserved',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&usqp=CAU',
        date: '20.93.2021',
        userName: 'Sakura Chan',
        status: 'Б/У',
        giftName: 'Письма Элджертона',
        avatarInBooking: 'avatarInBooking',
        id: 1,
    },
    {
        toBook: 'reserved',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&usqp=CAU',
        date: '20.93.2021',
        userName: 'Saske',
        status: 'Б/У',
        giftName: 'Письма Элджертона',
        avatarInBooking: 'avatarInBooking',
        id: 2,
    },
    {
        toBook: 'reserved',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&usqp=CAU',
        date: '20.93.2021',
        userName: 'Naruto',
        status: 'Б/У',
        giftName: 'Письма Элджертона',
        avatarInBooking: 'avatarInBooking',
        id: 3,
    },
    {
        toBook: 'reserved',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&usqp=CAU',
        date: '20.93.2021',
        userName: 'Itachi',
        status: 'Б/У',
        giftName: 'Письма Элджертона',
        avatarInBooking: 'avatarInBooking',
        id: 4,
    },
]

const giftData = [
    {
        id: '1',
        image: 'https://poofpoof.com.ua/18263-medium_default/ruchka-s-beloj-pastoj-flowers.jpg',
        nameGift: 'pen',
        avatar: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-320-80.jpg',
        holiday: 'день рождения',
        toBook: 'в ожидании',
        date: '12.04.2022',
    },
    {
        id: '2',

        image: 'https://ae01.alicdn.com/kf/HTB1vlD6c5IRMeJjy0Fbq6znqXXaC/4pcs-lot-Totoro-Toys-DIY-Miyazaki-My-Neighbor-Totoro-Sitting-in-the-Tree-PVC-Action-Figures.jpg_Q90.jpg_.webp',
        nameGift: 'toys',
        avatar: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-320-80.jpg',
        holiday: 'день рождения',
        toBook: 'в ожидании',
        date: '12.04.2022',
    },
    {
        id: '3',

        image: 'https://isakaabengaluru.com/wp-content/uploads/2022/03/He7f88008e87a4391858c412a3dd8664ch.jpg',
        nameGift: 'car',
        avatar: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-320-80.jpg',
        holiday: 'день рождения',
        toBook: 'в ожидании',
        date: '12.04.2022',
    },
    {
        id: '4',

        image: 'https://shopshop.md/upload/catalog/products/thumbs/ej9esz2unk.jpg',
        nameGift: 'bottle',
        avatar: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-320-80.jpg',
        holiday: 'день рождения',
        toBook: 'в ожидании',
        date: '12.04.2022',
    },
    {
        id: '4',

        image: 'https://raskraski.com.ua/content/uploads/images/kartina-po-nomeram-afremova-leonida.jpg',
        nameGift: 'art',
        avatar: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-320-80.jpg',
        holiday: 'день рождения',
        toBook: 'в ожидании',
        date: '12.04.2022',
    },
]

const FriendProfile = () => {
    const [showMoreWishCard, setShowMoreWishCard] = useState(false)
    const [showMoreHolidayCard, setShowMoreHolidayCard] = useState(false)
    const [showMoreCharityCard, setShowMoreCharityCard] = useState(false)

    const { friendId } = useParams()
    console.log(friendId)

    const selectedUser = options.friends.find((el) => el.id === friendId)
    const selectedUserTo = options.requestToFriends.find(
        (el) => el.id === friendId
    )
    // console.log(selectedUserTo)
    // console.log(options.requestToFriends)
    const data2 = data.map((el) => {
        return (
            <MyHolidays
                key={el.id}
                id={el.id}
                img={el.img}
                title={el.title}
                date={el.date}
            />
        )
    })

    const dataCharity = option.map((el) => {
        return (
            <CharityCard key={el.id} data={el} meatBallsOptions={navigation} />
        )
    })

    const giftData2 = giftData.map((el) => {
        return (
            <GiftCard
                key={el.id}
                variant="board"
                id={el.id}
                nameGift={el.nameGift}
                image={el.image}
                avatar={el.avatar}
                holiday={el.holiday}
                date={el.date}
                toBook={el.toBook}
                onClick={() => {
                    console.log('add')
                }}
            />
        )
    })
    return (
        <ContainerDiv>
            <div>
                <RouteTitle>
                    Друзья
                    <RouteNameTitle>
                        / {selectedUserTo.name2 || selectedUser.name}
                    </RouteNameTitle>
                </RouteTitle>
            </div>

            <ContentDiv>
                <div>
                    <StyledCard>
                        <StyledCardMedia
                            image="https://storage.ws.pho.to/s2/408d0e5ca2a34fa8022d6c840a789f177eed35e6_m.jpeg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <StyledTypography>
                                {selectedUserTo.name2 || selectedUser.name}
                            </StyledTypography>
                            <ButtonDiv>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        console.log('add')
                                    }}
                                >
                                    Добавить в друзья
                                </Button>
                            </ButtonDiv>
                        </CardContent>
                        <StyledCardActions>
                            <a href="https://www.facebook.com">
                                <Facebook />
                            </a>
                            <a href="https://www.instagram.com">
                                <Instagram />
                            </a>
                            <a href="https://desktop.telegram.org">
                                <Telegram />
                            </a>
                            <a href="https://vk.com">
                                <Vk />
                            </a>
                        </StyledCardActions>
                    </StyledCard>
                </div>
                <InfoDiv>
                    <MainTitle>Основная информация</MainTitle>
                    <GrayTitle>Город:</GrayTitle>
                    <StyledTitle>Бишкек</StyledTitle>
                    <GrayTitle>Email:</GrayTitle>
                    <StyledTitle>Aika1998@gmail.com</StyledTitle>
                    <GrayTitle>Дата рождения:</GrayTitle>
                    <StyledTitle>12.04.1998</StyledTitle>
                    <GrayTitle>Номер телефона:</GrayTitle>
                    <StyledTitle>+9967052364</StyledTitle>
                </InfoDiv>
                <InfoDiv>
                    <MainTitle>Интересы, хобби</MainTitle>
                    <GrayTitle>Интересы, хобби:</GrayTitle>
                    <StyledTitle>Танцы, иностранные языки, готовка</StyledTitle>
                    <MainTitle>Доп. инфо</MainTitle>
                    <GrayTitle>Размер одежды:</GrayTitle>
                    <StyledTitle>S</StyledTitle>
                    <GrayTitle>Размер обуви:</GrayTitle>
                    <StyledTitle>36</StyledTitle>
                    <GrayTitle>Важно знать:</GrayTitle>
                    <StyledTitle>Против спиртных напитков</StyledTitle>
                </InfoDiv>
            </ContentDiv>
            <div>
                <MainCardTitle>Желаемые подарки</MainCardTitle>
                <StyledShowMoreDiv>
                    <p onClick={() => setShowMoreWishCard(!showMoreWishCard)}>
                        Смотреть все
                    </p>
                </StyledShowMoreDiv>
                <StyledCardDiv>
                    {showMoreWishCard ? (
                        giftData2
                    ) : (
                        <StyledCardDiv>
                            {' '}
                            {giftData.slice(0, 3).map((el) => {
                                return (
                                    <GiftCard
                                        key={el.id}
                                        variant="board"
                                        id={el.id}
                                        nameGift={el.nameGift}
                                        image={el.image}
                                        avatar={el.avatar}
                                        holiday={el.holiday}
                                        date={el.date}
                                        toBook={el.toBook}
                                        onClick={() => {
                                            console.log('add')
                                        }}
                                    />
                                )
                            })}
                        </StyledCardDiv>
                    )}
                </StyledCardDiv>
            </div>
            <div>
                <MainCardTitle>Праздники</MainCardTitle>
                <StyledShowMoreDiv>
                    <p
                        onClick={() =>
                            setShowMoreHolidayCard(!showMoreHolidayCard)
                        }
                    >
                        Смотреть все
                    </p>
                </StyledShowMoreDiv>

                <StyledCardDiv>
                    {showMoreHolidayCard ? (
                        data2
                    ) : (
                        <StyledCardDiv>
                            {' '}
                            {data.slice(0, 3).map((el) => {
                                return (
                                    <MyHolidays
                                        key={el.id}
                                        id={el.id}
                                        date={el.date}
                                        title={el.title}
                                        img={el.img}
                                    />
                                )
                            })}
                        </StyledCardDiv>
                    )}
                </StyledCardDiv>
            </div>
            <div>
                <MainCardTitle>Благотворительность</MainCardTitle>
                <StyledShowMoreDiv>
                    <p
                        onClick={() =>
                            setShowMoreCharityCard(!showMoreCharityCard)
                        }
                    >
                        Смотреть все
                    </p>
                </StyledShowMoreDiv>

                <StyledCardDiv>
                    {showMoreCharityCard ? (
                        dataCharity
                    ) : (
                        <StyledCardDiv>
                            {' '}
                            {option.slice(0, 3).map((el) => {
                                return (
                                    <CharityCard
                                        key={el.id}
                                        data={el}
                                        meatBallsOptions={navigation}
                                    />
                                )
                            })}
                        </StyledCardDiv>
                    )}
                </StyledCardDiv>
            </div>
        </ContainerDiv>
    )
}
export default FriendProfile

const ContainerDiv = styled('div')`
    width: 1086px;
    margin: 0 auto;
    padding: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 60px;
`

const ContentDiv = styled('div')`
    background-color: white;
    width: 1086px;
    height: 464px;
    display: grid;
    grid-template-columns: 230px 290px 300px;
    border-radius: 10px;
    position: sticky;
`
const InfoDiv = styled('div')`
    width: 284px;
    margin-top: 47px;
    margin-left: 40px;
`
const RouteTitle = styled('p')`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #b4b4b4;
`
const RouteNameTitle = styled('span')`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
`
const MainCardTitle = styled('div')`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.2px;
    color: #020202;
    margin-bottom: -28px;
`
const MainTitle = styled('p')`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
    color: #8639b5;
`

const GrayTitle = styled('span')`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-top: 6px;
    display: flex;
    align-items: center;
    color: #5c5c5c;
    padding: 5px 0;
`
const StyledTitle = styled('span')`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
`

const StyledShowMoreDiv = styled('div')`
    display: flex;
    justify-content: flex-end;
    & p {
        display: inline;
        color: blue;
        cursor: pointer;
        border-bottom: 1px solid blue;
    }
`

const StyledCardDiv = styled('div')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 36px;
    grid-row-gap: 36px;
    margin-bottom: 15px;
`
const StyledCard = styled('div')`
    display: flex;
    align-items: center;
    flex-direction: column;
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
    justify-content: center;
    letter-spacing: 0.2px;
    color: #020202;
    margin-bottom: 24px;
`

const StyledCardActions = styled(CardActions)`
    width: 197px;
    display: flex;
    justify-content: space-evenly;
`
const ButtonDiv = styled('div')`
    button {
        width: 197px;
        height: 39px;
        text-transform: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
    }
`
