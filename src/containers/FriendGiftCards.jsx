/* eslint-disable no-return-assign */
import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import cancelBooking from '../assets/icons/cancelBooking.svg'
import complaintIcon from '../assets/icons/complaintss.svg'
import toBookIcon from '../assets/icons/toBook.svg'
import CharityCards from '../components/users/CharityCards'
import ReportModal from '../components/users/ReportModal'
import {
    copmlainToGift,
    cancelBookingGift,
    toBookGift,
} from '../store/slices/friendProfileAction'

function FriendGiftCards({ el, idOfOwnerUser }) {
    const { bookedUser } = el
    const { userId } = useParams()
    const [title, setTitle] = useState('')
    const [complaintId, setcomplaintId] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()

    const checkOwnBook = () => {
        const variantOne = [
            {
                icon: toBookIcon,
                title: 'Забронировать',
                id: '1',
                clickItem: (id) => toBookGiftHandler(id),
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
                id: '2',
                clickItem: (id) => cancelBookingGiftHandler(id),
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
                icon: complaintIcon,
                title: 'Пожаловаться',
                id: '3',
                clickItem: (id) => {
                    openModalHandler(id)
                },
            },
        ]
        if (bookedUser === null) {
            return variantOne
        }
        if (bookedUser.userId === idOfOwnerUser) {
            return variantTwo
        }
        if (bookedUser.userId !== idOfOwnerUser) {
            return variantThree
        }
        return variantOne
    }

    function cancelBookingGiftHandler(id) {
        dispatch(cancelBookingGift({ id, dispatch, userId }))
    }
    function toBookGiftHandler(id) {
        dispatch(toBookGift({ dispatch, id, userId }))
    }

    const sendComplainToGiftHandler = () => {
        dispatch(copmlainToGift({ complaintId, title }))
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
                    onClick={sendComplainToGiftHandler}
                />
            )}

            <div>
                <CharityCards
                    id={el?.gift?.giftId}
                    key={el?.gift?.giftId}
                    variant="board"
                    nameGift={el?.gift?.name}
                    image={el?.gift?.photo}
                    avatarBooked={el?.bookedUser?.photo}
                    holiday={el?.gift?.status}
                    date={el?.gift?.createdAt}
                    isBooked={el?.bookedUser}
                    idOfOwnerUser={idOfOwnerUser}
                    navigation={checkOwnBook()}
                />
            </div>
        </div>
    )
}

export default FriendGiftCards
