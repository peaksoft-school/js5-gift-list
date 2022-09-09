import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getAllComplaintsAction } from '../../store/slices/getAllComplaintsAction'
// import CharityCard from '../ui/charity/CharityCard'
import BookedWishesCard from '../ui/BookedWishesCard'

export const Complaints = () => {
    const complaints = useSelector((state) => state.complaints.complaints)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllComplaintsAction())
    }, [])
    console.log(complaints)
    const meatBallsOptions = [{ id: '1', title: 'dff' }]
    // const data = complaints?.map((el) => {
    //     return {
    //         id: el.id,
    //         key: el?.id,
    //         image: el?.userWish?.wishPhoto,
    //         avatar: el?.userPhoto,
    //         userName: el?.userName,
    //         userLastName: el?.userLastName,
    //         giftName: el?.userWish?.wishName,
    //         date: el?.userWish?.createdAt,
    //         toBook: el?.text,
    //     }
    // })
    return (
        <div>
            <div>Жалобы</div>
            <div>
                {complaints.map((el) => (
                    <div style={{ border: '1px solid red' }}>
                        <BookedWishesCard
                            key={el?.id}
                            id={el?.id}
                            giftName={el?.userWish?.wishName}
                            // holiday={el.wish.holiday.name}
                            date={el?.userWish.createdAt}
                            img={el?.userWish.wishPhoto}
                            navigation={meatBallsOptions}
                            firstName={el?.firstName}
                            lastName={el?.lastName}
                            avatar={el?.fromUserPhoto}
                        />
                    </div>
                ))}
                {/* {data?.map((i) => (
                    <CharityCard data={i} meatBallsOptions={meatBallsOptions} />
                ))} */}
            </div>
        </div>
    )
}
