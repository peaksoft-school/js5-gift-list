/* eslint-disable no-return-assign */
import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import addInMyGiftIcon from '../assets/icons/addInMyGifts.svg'
import cancelBooking from '../assets/icons/cancelBooking.svg'
import complaintIcon from '../assets/icons/complaintss.svg'
import toBookIcon from '../assets/icons/toBook.svg'
// import CharityCards from '../components/users/CharityCards'
import GiftCard from '../components/users/GiftCard'
import ReportModal from '../components/users/ReportModal'
import {
    toBookWish,
    addtoMyWish,
    copmlainToWish,
    cancelBookingWish,
} from '../store/slices/friendProfileAction'

function FriendWishCards({ el, idOfOwnerUser }) {
    const { bookedUser } = el
    const { wish } = el
    const { userId } = useParams()
    const [title, setTitle] = useState('')
    const [complaintId, setcomplaintId] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const friendId = useSelector((state) => state.friend.friend.id)
    const checkOwnBook = () => {
        const variantOne = [
            {
                icon: toBookIcon,
                title: 'Забронировать',
                id: '1',
                clickItem: (id) => toBookWishHandler(id),
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
                    openModalHandler(id)
                },
            },
        ]

        const variantTwo = [
            {
                icon: cancelBooking,
                title: 'Снять бронь',
                id: '1',
                clickItem: (id) => cancelBookingWishHandler(id),
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
                    openModalHandler(id)
                },
            },
        ]
        const variantThree = [
            {
                icon: cancelBooking,
                title: 'Снять бронь',
                id: '2',
                clickItem: (id) => cancelBookingWishHandler(id),
            },
            {
                icon: complaintIcon,
                title: 'Пожаловаться',
                id: '3',
                clickItem: (id) => {
                    openModalHandler(id)
                },
            },
        ]
        const variantFour = [
            {
                icon: toBookIcon,
                title: 'Забронировать',
                id: '1',
                clickItem: (id) => toBookWishHandler(id),
            },
            {
                icon: complaintIcon,
                title: 'Пожаловаться',
                id: '3',
                clickItem: (id) => {
                    openModalHandler(id)
                },
            },
        ]

        const variantFive = [
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
                    openModalHandler(id)
                },
            },
        ]

        const variantSix = [
            {
                icon: complaintIcon,
                title: 'Пожаловаться',
                id: '3',
                clickItem: (id) => {
                    openModalHandler(id)
                },
            },
        ]
        if (bookedUser === null && wish?.addWishStatus === 'NOT_ADD') {
            return variantOne
        }
        if (bookedUser === null && wish?.addWishStatus === 'ADDED') {
            return variantFour
        }
        if (
            bookedUser?.userId === idOfOwnerUser &&
            wish?.addWishStatus === 'NOT_ADD'
        ) {
            return variantTwo
        }
        if (
            bookedUser?.userId === idOfOwnerUser &&
            wish?.addWishStatus === 'ADDED'
        ) {
            return variantThree
        }
        if (
            bookedUser?.userId !== idOfOwnerUser &&
            wish?.addWishStatus === 'NOT_ADD'
        ) {
            return variantFive
        }
        if (
            bookedUser?.userId !== idOfOwnerUser &&
            wish?.addWishStatus === 'ADDED'
        ) {
            return variantSix
        }
        return variantOne
    }

    function toBookWishHandler(id) {
        dispatch(toBookWish({ id, userId, dispatch }))
    }

    function cancelBookingWishHandler(id) {
        dispatch(cancelBookingWish({ id, friendId, dispatch }))
    }
    const addToMyWishHandler = (id) => {
        dispatch(addtoMyWish({ id, userId, dispatch }))
    }
    const sendComplainToWishHandler = () => {
        dispatch(copmlainToWish({ complaintId, title }))
        setOpenModal(false)
    }

    function openModalHandler(id) {
        setcomplaintId(id)
        setOpenModal(!openModal)
    }
    const valueChangeHandler = (e) => {
        setTitle(e.title)
    }
    const closeModalHandler = () => {
        setOpenModal(false)
    }
    return (
        <div>
            {openModal && (
                <ReportModal
                    open={openModal}
                    onClose={closeModalHandler}
                    onChange={valueChangeHandler}
                    onClick={sendComplainToWishHandler}
                />
            )}
            <div>
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
                    idOfOwnerUser={idOfOwnerUser}
                    navigation={checkOwnBook()}
                />
            </div>
        </div>
    )
}

export default FriendWishCards
