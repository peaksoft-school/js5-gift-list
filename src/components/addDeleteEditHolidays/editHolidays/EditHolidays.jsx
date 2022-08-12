import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { getHoliday } from '../../../store/slices/HolidaySlice'
import MyHolidaysCard from '../../users/MyHolidaysCard'
import AddHoliday from '../addHoliday/AddHoliday'

// eslint-disable-next-line import/no-named-as-default
import EditHolidaysModal from './EditHolidaysModal'

const EditHolidays = () => {
    const [open, setOpen] = useState(false)
    const [id, setid] = useState('')

    const dispatch = useDispatch()
    const [click, setclick] = useState(false)
    const holiday = useSelector((state) => state.holiday)
    console.log(holiday)

    const onCloseHandler = () => {
        setOpen((prev) => !prev)
    }
    const openModalHandler = () => {
        setOpen(!open)
    }
    const getclick = () => setclick((p) => !p)
    const editarr = holiday.holiday.find((el) => el.id === +id)

    useEffect(() => {
        dispatch(getHoliday())
    }, [dispatch, click])
    return (
        <HolidayCardDiv>
            <AddHoliday click={getclick} />
            <CardDiv>
                {holiday.holiday.map((el) => {
                    return (
                        <MyHolidaysCard
                            key={el.id}
                            id={el.id}
                            img={el.photo}
                            title={el.name}
                            date={el.holidayDate}
                            getid={setid}
                            onOpen={openModalHandler}
                        />
                    )
                })}
            </CardDiv>
            <EditHolidaysModal
                open={open}
                data={editarr}
                onClose={onCloseHandler}
            />
        </HolidayCardDiv>
    )
}

export default EditHolidays

const HolidayCardDiv = styled('div')`
    width: 1086px;
    padding-top: 32px;
    margin-left: 20px;
    margin-right: 40px;
`
const CardDiv = styled('div')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 19px;
    grid-row-gap: 15px;
`
