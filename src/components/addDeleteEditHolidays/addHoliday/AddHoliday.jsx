import React, { useState } from 'react'

import styled from '@emotion/styled'

import { ReactComponent as PlusIcon } from '../../../assets/icons/plusIcon.svg'
import Button from '../../ui/Button'

import AddHolidayModal from './AddHolidayModal'

const AddHoliday = (props) => {
    const [open, setOpen] = useState(false)

    const onCloseHandler = () => {
        setOpen((prev) => !prev)
        props.click()
    }
    const openModalHandler = () => {
        props.click()
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
    /* width: 100%; */
    height: 39px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* & Button {
        position: relative;
        top: 32px;
        right: 40px;
    } */
`
const NamePage = styled('h1')`
    margin: 0;
`
