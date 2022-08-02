import React, { useState } from 'react'

import styled from '@emotion/styled'

import { ReactComponent as PlusIcon } from '../../../assets/icons/plusIcon.svg'
import Button from '../../ui/Button'

import AddHolidayModal from './AddHolidayModal'

const AddHoliday = () => {
    const [open, setOpen] = useState(false)

    const onCloseHandler = () => {
        setOpen((prev) => !prev)
    }
    const openModalHandler = () => {
        setOpen(!open)
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
            <AddHolidayModal open={open} onClose={onCloseHandler} />
        </div>
    )
}

export default AddHoliday

const WrapperButton = styled('div')`
    width: 100%;
    display: flex;
    justify-content: space-between;

    & Button {
        position: relative;
        top: 32px;
        right: 40px;
    }
`
const NamePage = styled('h1')`
    margin: 0;
`
