import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { getHoliday, getHolidayById } from '../../store/slices/HolidayActions'
import MyHolidaysCard from '../users/MyHolidaysCard'

import AddHoliday from './AddHoliday'
import EditHolidaysModal from './EditHolidaysModal'

const AddDeleteEditHolidays = () => {
    const [params, setParams] = useSearchParams()
    const holiday = useSelector((state) => state.holiday)
    const [holidayById, setHolidayById] = useState(params.get('id'))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { editHoliday } = Object.fromEntries([...params])

    const navigateToInnerPage = (id) => {
        navigate(`${id}`)
    }
    const openModalHandler = (id) => {
        setParams({ editHoliday: true, id })
    }
    const closeModalHandler = () => {
        setParams({})
    }
    const getItemChangehandler = (id) => {
        setHolidayById(id)
    }
    useEffect(() => {
        dispatch(getHoliday())
    }, [holiday.editmodal, dispatch])

    useEffect(() => {
        if (holidayById) {
            dispatch(getHolidayById(holidayById))
        }
    }, [holidayById, dispatch])
    return (
        <HolidayCardDiv>
            <AddHoliday />
            <CardDiv>
                {holiday.holiday.map((el) => {
                    return (
                        <MyHolidaysCard
                            key={el.id}
                            id={el.id}
                            img={el.photo}
                            title={el.name}
                            date={el.holidayDate}
                            getId={getItemChangehandler}
                            onOpen={openModalHandler}
                            navigate={() => navigateToInnerPage(el.id)}
                        />
                    )
                })}
            </CardDiv>
            {editHoliday === 'true' && (
                <EditHolidaysModal
                    onClose={closeModalHandler}
                    open={editHoliday === 'true'}
                    data={holiday.getSingleHoliday}
                />
            )}
        </HolidayCardDiv>
    )
}

export default AddDeleteEditHolidays

const HolidayCardDiv = styled('div')`
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
