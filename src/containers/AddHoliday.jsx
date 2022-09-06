import React, { useState } from 'react'

import styled from '@emotion/styled'
import { useSearchParams } from 'react-router-dom'

import { ReactComponent as PlusIcon } from '../assets/icons/plusIcon.svg'
import Button from '../components/ui/Button'

import AddHolidayModal from './AddHolidayModal'

const AddHoliday = () => {
    const [params, setParams] = useSearchParams()
    const [open, setOpen] = useState(params.get('addHoliday'))
    const { addHoliday } = Object.fromEntries([...params])

    const onCloseHandler = () => {
        setOpen((prev) => !prev)
        setParams({})
    }
    const openModalHandler = () => {
        setOpen(!open)
        setParams({ addHoliday: true })
    }

    return (
        <>
            <TitleButtonWrapper>
                <NamePage>Мои праздники</NamePage>
                <Button
                    startIcon={<PlusIcon />}
                    variant="addButton"
                    onClick={openModalHandler}
                >
                    Добавить праздник
                </Button>
            </TitleButtonWrapper>
            <AddHolidayModal
                open={addHoliday === 'true'}
                onClose={onCloseHandler}
            />
        </>
    )
}

export default AddHoliday

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
