import { useState, useEffect } from 'react'

import {
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    styled,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import addInMyGiftIcon from '../assets/icons/addInMyGifts.svg'
import cancelBooking from '../assets/icons/cancelBooking.svg'
import complaintIcon from '../assets/icons/complaintss.svg'
import { ReactComponent as Facebook } from '../assets/icons/facebookFriendProfilePage.svg'
import { ReactComponent as GrayFacebook } from '../assets/icons/grayFacebook.svg'
import { ReactComponent as GrayInstagram } from '../assets/icons/grayInstagram.svg'
import { ReactComponent as GrayTelegram } from '../assets/icons/grayTelegram.svg'
import { ReactComponent as GrayVk } from '../assets/icons/grayVk.svg'
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg'
import { ReactComponent as Telegram } from '../assets/icons/telegram.svg'
import toBookIcon from '../assets/icons/toBook.svg'
import { ReactComponent as Vk } from '../assets/icons/vkFriendProfile.svg'
import Button from '../components/ui/Button'
import Notification from '../components/ui/notification/Notification'
import CharityCards from '../components/users/CharityCards'
import GiftCard from '../components/users/GiftCard'
import MyHolidays from '../components/users/MyHolidaysCard'
import ReportModal from '../components/users/ReportModal'
import {
    friendDeleteAction,
    addToRequestFriendAction,
    friendProfileAction,
    toBookWish,
    cancelBookingWish,
    copmlainToWish,
    toBookGift,
    cancelBookingGift,
    copmlainToGift,
    addtoMyWish,
} from '../store/slices/friendProfileAction'
import {
    acceptRequestToFriend,
    rejectRequestToFriendAction,
} from '../store/slices/friendTabAction'

const FriendProfile = () => {
    const [showMoreWishCard, setShowMoreWishCard] = useState(false)
    const [showMoreHolidayCard, setShowMoreHolidayCard] = useState(false)
    const [showMoreCharityCard, setShowMoreCharityCard] = useState(false)
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const idOfUser = useSelector((state) => state.authSlice.user.id)
    const { userId } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(friendProfileAction(userId))
    }, [userId])

    const { friend, userInfo, gifts, holidays, wishes } = useSelector(
        (state) => state.friend
    )
    const friendId = useSelector((state) => state.friend.friend.id)

    const toBookWishNavigatian = [
        {
            icon: toBookIcon,
            title: 'Забронировать',
            id: '1',
            clickItem: (id) => toBookFunction(id),
        },
        {
            icon: addInMyGiftIcon,
            title: 'Добавить в мои подарки',
            id: '2',
            clickItem: (id) => addToMyWishHandler(id),
        },
        {
            icon: complaintIcon,
            title: 'Пожаловаться',
            id: '3',
            clickItem: (id) => {
                openModal(id)
            },
        },
    ]
    const cancelBookingWishNavigation = [
        {
            icon: toBookIcon,
            title: ' Снять бронь',
            id: '1',
            clickItem: (id) => cancelBookingWishFunction(id),
        },
        {
            icon: addInMyGiftIcon,
            title: 'Добавить в мои подарки',
            id: '2',
            clickItem: (id) => addToMyWishHandler(id),
        },
        {
            icon: complaintIcon,
            title: 'Пожаловаться',
            id: '3',
            clickItem: (id) => {
                openModal(id)
            },
        },
    ]
    const toBookGiftNavigation = [
        {
            icon: toBookIcon,
            title: 'Забронировать',
            id: '1',
            clickItem: (id) => toBookGiftFunction(id),
        },
        {
            icon: complaintIcon,
            title: 'Пожаловаться',
            id: '2',
            clickItem: openModal,
        },
    ]
    const cancelBookingGiftNavigation = [
        {
            icon: cancelBooking,
            title: ' Снять бронь',
            id: '1',
            clickItem: (id) => cancelBookingGiftFunction(id),
        },
        {
            icon: complaintIcon,
            title: 'Пожаловаться',
            id: '2',
            clickItem: openModal,
        },
    ]
    const [idRep, setIdRep] = useState('')
    function openModal(id) {
        setIdRep(id)
        setOpen(!open)
    }
    function cancelBookingGiftFunction(id) {
        dispatch(cancelBookingGift({ id, dispatch, userId }))
    }
    function toBookGiftFunction(id) {
        dispatch(toBookGift({ dispatch, id, userId }))
    }
    function toBookFunction(id) {
        dispatch(toBookWish({ id, userId, dispatch }))
    }

    function cancelBookingWishFunction(id) {
        dispatch(cancelBookingWish({ id, friendId, dispatch }))
    }
    // function addToMyWishFunction(id) {
    //     dispatch(addToMyWish(id))
    // }

    const addToFriendHandler = () => {
        dispatch(addToRequestFriendAction({ friendId, dispatch }))
    }
    const deleteFriendHandler = () => {
        dispatch(friendDeleteAction({ dispatch, friendId }))
    }
    const acceptToFriendHandler = () => {
        dispatch(acceptRequestToFriend({ dispatch, friendId }))
    }
    const rejectRequestHandler = () => {
        dispatch(rejectRequestToFriendAction({ dispatch, friendId }))
    }

    const isShowMoreHandler = () => {
        setShowMoreHolidayCard(!showMoreHolidayCard)
    }
    const isShowMoreWishHandler = () => {
        setShowMoreWishCard(!showMoreWishCard)
    }
    const isShowMoreGiftHandler = () => {
        setShowMoreCharityCard(!showMoreCharityCard)
    }
    const sendComplainToWishHandler = () => {
        dispatch(copmlainToWish({ idRep, title }))
        setOpen(false)
        console.log('wish')
    }
    const sendComplainToGiftHandler = (id) => {
        dispatch(copmlainToGift(id, title))
        setOpen(false)
        console.log('gift')
    }
    const addToMyWishHandler = (id) => {
        dispatch(addtoMyWish(id))
    }
    const holidayLength = holidays.length
    const wichIsShowHoliday = showMoreHolidayCard ? holidayLength : 3
    const whichTextHoliday = wichIsShowHoliday < 4 ? 'Смотреть все' : 'Скрыть'
    const wishesLength = wishes.length
    const wichIsShowWish = showMoreWishCard ? wishesLength : 3
    const whichTextWish = wichIsShowWish < 4 ? 'Смотреть все' : 'Скрыть'
    const giftLength = gifts.length
    const wichIsShowGift = showMoreCharityCard ? giftLength : 3
    const whichIsTextGift = wichIsShowGift < 4 ? 'Смотреть все' : 'Скрыть'
    const renderButtons = () => {
        if (friend.friendStatus === 'FRIEND') {
            return (
                <ButtonDiv>
                    <Button variant="outlined" onClick={deleteFriendHandler}>
                        Удалить из друзей
                    </Button>
                </ButtonDiv>
            )
        }
        if (friend.friendStatus === 'NOT_FRIEND') {
            return (
                <ButtonDiv>
                    <Button variant="contained" onClick={addToFriendHandler}>
                        Добавить в друзья
                    </Button>
                </ButtonDiv>
            )
        }
        if (friend.friendStatus === 'REQUEST_TO_FRIEND') {
            return (
                <ButtonDiv>
                    <Button variant="contained" onClick={acceptToFriendHandler}>
                        Принять заявку
                    </Button>
                    <Button variant="outlined" onClick={rejectRequestHandler}>
                        Отклонить
                    </Button>
                </ButtonDiv>
            )
        }

        return (
            <ButtonDiv>
                <Button variant="contained">Запрос отправлен</Button>
            </ButtonDiv>
        )
    }

    const change = (e) => {
        setTitle(e.title)
    }
    const closeModalHandler = () => {
        setOpen(false)
    }
    console.log(title, wishes)

    return (
        <ContainerDiv>
            {open && (
                <ReportModal
                    open={open}
                    onClose={closeModalHandler}
                    onChange={change}
                    onClick={sendComplainToWishHandler}
                />
            )}
            {open && (
                <ReportModal
                    open={open}
                    onClose={closeModalHandler}
                    onChange={change}
                    onClick={sendComplainToGiftHandler}
                />
            )}
            <div>
                <RouteTitle>
                    {friend.friendStatus === 'FRIEND'
                        ? 'Друзья'
                        : 'Запросы в друзья'}
                    <RouteNameTitle>/{friend?.firstName}</RouteNameTitle>
                </RouteTitle>
            </div>

            <ContentDiv>
                <div>
                    <StyledCard>
                        <StyledCardMedia
                            image={friend?.photo}
                            alt="green iguana"
                        />
                        <CardContent>
                            <UserName>
                                <StyledTypography>
                                    {friend?.firstName}
                                </StyledTypography>
                                <StyledTypography>
                                    {friend?.lastName}
                                </StyledTypography>
                            </UserName>
                            {renderButtons()}
                        </CardContent>
                        <StyledCardActions>
                            <a href={userInfo?.facebookLink}>
                                {userInfo?.facebookLink ? (
                                    <Facebook />
                                ) : (
                                    <GrayFacebook />
                                )}
                            </a>{' '}
                            <a href={userInfo?.instagramLink}>
                                {userInfo?.instagramLink ? (
                                    <Instagram />
                                ) : (
                                    <GrayInstagram />
                                )}
                            </a>
                            <a href={userInfo?.telegramLink}>
                                {userInfo?.telegramLink ? (
                                    <Telegram />
                                ) : (
                                    <GrayTelegram />
                                )}
                            </a>
                            <a href={userInfo?.vkLink}>
                                {userInfo?.vkLink ? <Vk /> : <GrayVk />}
                            </a>
                        </StyledCardActions>
                    </StyledCard>
                </div>
                <InfoDiv>
                    <MainTitle>Основная информация</MainTitle>

                    {userInfo?.city ? (
                        <div>
                            <GrayTitle>Город:</GrayTitle>
                            <StyledTitle>{userInfo?.city}</StyledTitle>
                        </div>
                    ) : (
                        ''
                    )}

                    {friend?.email ? (
                        <div>
                            <GrayTitle>Email:</GrayTitle>
                            <StyledTitle>{friend?.email}</StyledTitle>
                        </div>
                    ) : (
                        ''
                    )}
                    {userInfo?.dateOfBirth ? (
                        <div>
                            <GrayTitle>Дата рождения:</GrayTitle>
                            <StyledTitle>{userInfo?.dateOfBirth}</StyledTitle>
                        </div>
                    ) : (
                        ''
                    )}
                    {userInfo?.phoneNumber ? (
                        <div>
                            <GrayTitle>Номер телефона:</GrayTitle>
                            <StyledTitle>{userInfo?.phoneNumber}</StyledTitle>
                        </div>
                    ) : (
                        ''
                    )}
                </InfoDiv>
                <InfoDiv>
                    {userInfo?.hobby ? (
                        <div>
                            <MainTitle>Интересы, хобби</MainTitle>
                            <GrayTitle>Интересы, хобби:</GrayTitle>
                            <StyledTitle>{userInfo?.hobby}</StyledTitle>
                        </div>
                    ) : (
                        ''
                    )}
                    {userInfo?.clothingSize ||
                    userInfo?.shoeSize ||
                    userInfo?.importantNote ? (
                        <MainTitle>Дополнительное информация</MainTitle>
                    ) : (
                        ''
                    )}
                    {userInfo?.clothingSize ? (
                        <div>
                            <GrayTitle>Размер одежды:</GrayTitle>
                            <StyledTitle>{userInfo?.clothingSize}</StyledTitle>
                        </div>
                    ) : (
                        ''
                    )}
                    {userInfo?.shoeSize ? (
                        <div>
                            <GrayTitle>Размер обуви:</GrayTitle>
                            <StyledTitle>{userInfo?.shoeSize}</StyledTitle>
                        </div>
                    ) : (
                        ''
                    )}
                    {userInfo?.importantNote ? (
                        <div>
                            <GrayTitle>Важно знать:</GrayTitle>
                            <StyledTitle>{userInfo?.importantNote}</StyledTitle>
                        </div>
                    ) : (
                        ''
                    )}
                </InfoDiv>
            </ContentDiv>
            {wishes.length > 0 ? (
                <MainCardTitle>Желаемые подарки</MainCardTitle>
            ) : (
                ''
            )}
            {wishesLength <= 3 ? (
                ''
            ) : (
                <StyledShowMoreDiv onClick={isShowMoreWishHandler}>
                    <p>{whichTextWish}</p>
                </StyledShowMoreDiv>
            )}

            <StyledCardDiv>
                {wishes.slice(0, wichIsShowWish).map((el) => {
                    return (
                        <GiftCard
                            key={el.wish?.wishId}
                            variant="board"
                            id={el.wish?.wishId}
                            nameGift={el.wish?.wishName}
                            image={el?.wish?.photo}
                            avatarBooked={el?.bookedUser?.photo}
                            holiday={el.wish?.holiday?.name}
                            date={el.wish?.wishDate}
                            isBooked={el?.bookedUser}
                            idOfUser={idOfUser}
                            navigation={
                                el?.bookedUser === null
                                    ? toBookWishNavigatian
                                    : cancelBookingWishNavigation
                            }
                        />
                    )
                })}
            </StyledCardDiv>
            {holidays.length > 0 ? (
                <MainCardTitle>Праздники</MainCardTitle>
            ) : (
                ''
            )}
            {holidayLength <= 3 ? (
                ''
            ) : (
                <StyledShowMoreDiv onClick={isShowMoreHandler}>
                    <p>{whichTextHoliday}</p>
                </StyledShowMoreDiv>
            )}

            <StyledCardDiv>
                {holidays.slice(0, wichIsShowHoliday).map((el) => {
                    return (
                        <MyHolidays
                            key={el.id}
                            id={el.id}
                            date={el.holidayDate}
                            title={el.name}
                            img={el.photo}
                            variant="withoutMeatBalls"
                        />
                    )
                })}
            </StyledCardDiv>
            {gifts.length > 0 ? (
                <MainCardTitle>Благотворительность</MainCardTitle>
            ) : (
                ''
            )}
            {giftLength <= 3 ? (
                ''
            ) : (
                <StyledShowMoreDiv onClick={isShowMoreGiftHandler}>
                    <p>{whichIsTextGift}</p>
                </StyledShowMoreDiv>
            )}

            <div>
                <StyledCardDiv>
                    {gifts.slice(0, wichIsShowGift).map((el) => {
                        return (
                            <CharityCards
                                id={el.gift?.giftId}
                                key={el.gift?.giftId}
                                variant="board"
                                nameGift={el.gift?.name}
                                image={el.ownerUser?.photo}
                                avatarBooked={el.bookedUser?.photo}
                                holiday={el.gift?.status}
                                date={el.gift?.createdAt}
                                isBooked={el?.bookedUser}
                                idOfUser={idOfUser}
                                navigation={
                                    el?.bookedUser === null
                                        ? toBookGiftNavigation
                                        : cancelBookingGiftNavigation
                                }
                            />
                        )
                    })}
                </StyledCardDiv>
            </div>
            <Notification />
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
    width: 1118px;
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

const UserName = styled('div')`
    display: flex;
    justify-content: space-around;
`
const MainCardTitle = styled('div')`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: bolder;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.2px;
    margin-top: 54px;
    color: #020202;
`
const MainTitle = styled('p')`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
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
    margin-top: -34px;
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
    padding-top: 20px;
    padding-bottom: 20px;
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
        margin-bottom: 16px;
    }
`
