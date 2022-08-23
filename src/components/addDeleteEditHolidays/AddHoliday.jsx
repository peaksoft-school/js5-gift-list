import React, { useState } from 'react'

import styled from '@emotion/styled'
import { useSearchParams } from 'react-router-dom'

import { ReactComponent as PlusIcon } from '../../assets/icons/plusIcon.svg'
import Button from '../ui/Button'

import AddHolidayModal from './AddHolidayModal'

const AddHoliday = () => {
    const [open, setOpen] = useState(false)
    const [params, setParams] = useSearchParams()
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
        <div>
            <WrapperButton>
                <NamePage>Мои праздники</NamePage>
                <Button
                    startIcon={<PlusIcon />}
                    variant="addButton"
                    onClick={openModalHandler}
                >
                    Добавить праздник
                </Button>
            </WrapperButton>
            <AddHolidayModal
                open={addHoliday === 'true'}
                onClose={onCloseHandler}
            />
        </div>
    )
}

export default AddHoliday

const WrapperButton = styled('div')`
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
