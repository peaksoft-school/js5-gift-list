import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getAllComplaintsAction } from '../../store/slices/getAllComplaintsAction'
import CharityCard from '../ui/charity/CharityCard'

export const Complaints = () => {
    const complaints = useSelector((state) => state.complaints.complaints)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllComplaintsAction())
    }, [])
    // console.log(complaints)
    const meatBallsOptions = [{ id: '1', title: 'dff' }]
    const data = complaints?.find((el) => {
        return {
            key: el?.id,
            image: el?.userWish?.wishPhoto,
            avatar: el?.fromUserPhoto,
            userName: el?.fromUserName,
            giftName: el?.userWish.wishName,
            date: el?.userWish.createdAt,
            toBook: el?.text,
        }
    })
    console.log(data)
    return (
        <div>
            <div>Жалобы</div>
            <div>
                <CharityCard data={data} meatBallsOptions={meatBallsOptions} />
            </div>
        </div>
    )
}
