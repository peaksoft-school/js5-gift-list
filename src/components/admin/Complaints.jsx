import React, { useEffect } from 'react'

import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import cancelBooking from '../../assets/icons/cancelBooking.svg'
import deleteIcon from '../../assets/icons/deleteIcon.svg'
import block from '../../assets/icons/toBook.svg'
import {
    deleteComplaintAction,
    giftsComplaintsAction,
    wishesComplaintsAction,
    // getAllComplaintsAction,
} from '../../store/slices/complaintsAction'
import BookedWishesCard from '../ui/BookedWishesCard'

const WITHBOTTOMTITLE = 'WITHBOTTOMTITLE'
export const Complaints = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const giftComplaints = useSelector(
        (state) => state.giftComplaints.complaintOnGifts
    )
    console.log(giftComplaints)
    const wishComplaints = useSelector(
        (state) => state.wishesComplaints.complaintOnWishes
    )
    console.log(wishComplaints)
    console.log(giftComplaints)
    useEffect(() => {
        dispatch(giftsComplaintsAction())
    }, [])
    useEffect(() => {
        dispatch(wishesComplaintsAction())
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
        console.log(complaintId)
        dispatch(deleteComplaintAction({ complaintId, dispatch }))
    }
    const goToInnerPage = (id) => {
        console.log(id)
        navigate(`/complaints/${id}`)
    }
    return (
        <Div>
            {/* <ComplaintTitle>Жалобы</ComplaintTitle> */}
            <div>
                <div>
                    {giftComplaints?.length ? (
                        <ComplainCardTitle>Жалобы на подарки</ComplainCardTitle>
                    ) : (
                        ''
                    )}
                    <Container>
                        {giftComplaints?.map((el) => (
                            <BookedWishesCard
                                key={el?.gift?.giftId}
                                id={el?.gift?.complaints.map(
                                    (el) => el?.complaintId
                                )}
                                giftName={el?.gift?.name}
                                date={el?.gift?.createdAt}
                                img={el?.gift?.photo}
                                navigation={
                                    el?.gift.isBlock === false
                                        ? meatBallsOptionBlock
                                        : meatBallsOptionsUnBlock
                                }
                                text="причина жалобы"
                                complaintUser={el?.gift?.complaints.map(
                                    (el) => el?.fromUser?.photo
                                )}
                                variant={WITHBOTTOMTITLE}
                                complaintBorder="orange"
                                firstName={el?.ownerUser?.firstName}
                                lastName={el?.ownerUser?.lastName}
                                avatar={el?.ownerUser?.photo}
                                status={el?.gift?.isBlock}
                                onClick={() => {
                                    goToInnerPage(el?.gift.giftId)
                                }}
                            />
                        ))}
                    </Container>
                    <div>
                        {wishComplaints?.length ? (
                            <ComplainCardTitle>
                                Жалобы на желание
                            </ComplainCardTitle>
                        ) : (
                            ''
                        )}
                        <Container>
                            {wishComplaints?.map((el) => (
                                <BookedWishesCard
                                    key={el?.wish?.wishId}
                                    id={el?.wish?.complaints.map(
                                        (el) => el?.complaintId
                                    )}
                                    giftName={el?.userWish?.wishName}
                                    holiday={el?.wish?.holiday?.name}
                                    date={el?.wish?.wishDate}
                                    img={el?.wish?.photo}
                                    navigation={
                                        el?.wish.isBlock === false
                                            ? meatBallsOptionBlock
                                            : meatBallsOptionsUnBlock
                                    }
                                    text="причина жалобы"
                                    complaintUser={el?.wish?.complaints.map(
                                        (el) => el?.fromUser?.photo
                                    )}
                                    variant={WITHBOTTOMTITLE}
                                    complaintBorder="orange"
                                    firstName={el?.ownerUser?.firstName}
                                    lastName={el?.ownerUser?.lastName}
                                    avatar={el?.ownerUser?.photo}
                                    status={el?.wish?.isBlock}
                                    onClick={() => {
                                        goToInnerPage(el?.wish.wishId)
                                    }}
                                />
                            ))}
                        </Container>
                    </div>
                </div>
            </div>
        </Div>
    )
}

const ComplainCardTitle = styled('p')`
    /* display: inline; */
    padding: 20px;
    /* margin-bottom: 30px; */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
    color: #020202;
    /* border-bottom: 4px solid #fd5200; */
    /* color: #fd5200; */
`
const Div = styled('div')`
    width: 94%;
    margin-top: 100px;
    margin-left: 20px;
`
const Container = styled('div')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
`
// const ComplaintTitle = styled('div')`
//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 20px;
//     line-height: 24px;
//     display: flex;
//     align-items: center;
//     letter-spacing: 0.2px;
//     color: #020202;
//     margin-bottom: 31px;
// `
