import React, { useEffect } from 'react'

import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import cancelBooking from '../../assets/icons/cancelBooking.svg'
import deleteIcon from '../../assets/icons/deleteIcon.svg'
import block from '../../assets/icons/toBook.svg'
import {
    deleteComplaintAction,
    getAllComplaintsAction,
} from '../../store/slices/getAllComplaintsAction'
import BookedWishesCard from '../ui/BookedWishesCard'

const WITHBOTTOMTITLE = 'WITHBOTTOMTITLE'
export const Complaints = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const complaints = useSelector((state) => state.complaints.complaints)
    console.log(complaints)
    useEffect(() => {
        dispatch(getAllComplaintsAction())
    }, [])
    const meatBallsOptionBlock = [
        { id: '1', title: 'Блокировать', icon: block, clickItem: () => {} },
        {
            id: '2',
            title: 'Удалить',
            icon: deleteIcon,
            clickItem: (id) => deleteComplaintHandler(id),
        },
    ]
    const meatBallsOptionsUnBlock = [
        {
            id: '1',
            title: 'Разблокировать',
            icon: cancelBooking,
            clickItem: () => {},
        },
        {
            id: '2',
            title: 'Удалить',
            icon: deleteIcon,
            clickItem: (id) => deleteComplaintHandler(id),
        },
    ]
    const deleteComplaintHandler = (complaintId) => {
        dispatch(deleteComplaintAction({ complaintId, dispatch }))
    }
    const goToInnerPage = (id) => {
        console.log(id)
        navigate(`/complaints/${id}`)
    }
    return (
        <Div>
            <ComplaintTitle>Жалобы</ComplaintTitle>
            <div>
                <Container>
                    {complaints.map((el) => (
                        <BookedWishesCard
                            key={el?.id}
                            id={el?.id}
                            giftName={
                                el?.userWish
                                    ? el.userWish.wishName
                                    : el.userGift.name
                            }
                            holiday={
                                el?.userWish?.holidayName
                                    ? el?.userWish.holidayName
                                    : ''
                            }
                            date={
                                el?.userWish
                                    ? el.userWish?.wishDate
                                    : el?.userGift?.createdAt
                            }
                            img={
                                el?.userWish
                                    ? el?.userWish?.wishPhoto
                                    : el?.userGift.photo
                            }
                            navigation={
                                el?.userWish === null ||
                                (el?.userGift?.isBlock === false &&
                                    el?.userWish?.isBlock === false) ||
                                el?.userGift === null
                                    ? meatBallsOptionBlock
                                    : meatBallsOptionsUnBlock
                            }
                            text="причина жалобы"
                            complaintUser={el?.fromUserPhoto}
                            variant={WITHBOTTOMTITLE}
                            complaintBorder="orange"
                            firstName={el?.userName}
                            lastName={el?.userLastName}
                            avatar={el?.fromUserPhoto}
                            status={
                                el?.userWish
                                    ? el?.userWish.isBlock
                                    : el?.userGift.isBlock
                            }
                            onClick={() => {
                                goToInnerPage(el.id)
                            }}
                        />
                    ))}
                </Container>
            </div>
        </Div>
    )
}

const Div = styled('div')`
    width: 94%;
    margin-top: 100px;
    margin-left: 20px;
`
const Container = styled('div')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
`
const ComplaintTitle = styled('div')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
    color: #020202;
    margin-bottom: 31px;
`
