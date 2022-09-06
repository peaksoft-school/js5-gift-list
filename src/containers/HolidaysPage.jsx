import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as PlusIcon } from '../assets/icons/plusIcon.svg'
import Button from '../components/ui/Button'
import MyHolidaysCard from '../components/users/MyHolidaysCard'
import { getHoliday, getHolidayById } from '../store/slices/HolidayActions'

import AddHolidayModal from './AddHolidayModal'
import EditHolidaysModal from './EditHolidaysModal'

const HolidaysPage = () => {
    const [params, setParams] = useSearchParams()
    const holiday = useSelector((state) => state.holiday)
    const [holidayById, setHolidayById] = useState(params.get('id'))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { editHoliday, addHoliday } = Object.fromEntries([...params])
    const navigateToInnerPage = (id) => {
        navigate(`${id}`)
    }
    const openEditModalHandler = (id) => {
        setParams({ editHoliday: true, id })
    }
    const openAddModalHandler = () => {
        setParams({ addHoliday: true })
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
    const location = useLocation()
    const locaionId = location.search.split('=')[2]
    return (
        <HolidayCardDiv>
            <TitleButtonWrapper>
                <NamePage>Мои праздники</NamePage>
                <Button
                    startIcon={<PlusIcon />}
                    variant="addButton"
                    onClick={openAddModalHandler}
                >
                    Добавить праздник
                </Button>
            </TitleButtonWrapper>
            <AddHolidayModal
                onOpen={openAddModalHandler}
                open={addHoliday === 'true'}
                onClose={closeModalHandler}
            />
            <CardDiv>
                {holiday?.holiday?.map((el) => {
                    return (
                        <MyHolidaysCard
                            key={el.id}
                            id={el.id}
                            img={el.photo}
                            title={el.name}
                            date={el.holidayDate}
                            getId={getItemChangehandler}
                            onOpen={openEditModalHandler}
                            navigate={() => navigateToInnerPage(el.id)}
                        />
                    )
                })}
            </CardDiv>
            {editHoliday === 'true' && (
                <EditHolidaysModal
                    locaionId={locaionId}
                    onOpen={openEditModalHandler}
                    onClose={closeModalHandler}
                    open={editHoliday === 'true'}
                    data={holiday.getSingleHoliday}
                />
            )}
        </HolidayCardDiv>
    )
}

export default HolidaysPage

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
const TitleButtonWrapper = styled('div')`
    height: 39px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NamePage = styled('h1')`
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #020202;
`
