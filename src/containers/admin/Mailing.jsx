import React, { useState } from 'react'

import styled from 'styled-components'

import Button from '../../components/ui/Button'
import Notification from '../../components/ui/notification/Notification'

import CreatingMailingList from './CreatingMailingList'

export const Mailing = () => {
    const [open, setOpen] = useState(false)
    const openHandler = () => {
        setOpen(true)
    }
    const closeMailingListHandler = () => {
        setOpen(false)
    }
    return (
        <Container>
            <TitleMailing>Рассылка</TitleMailing>
            <Button variant="contained" onClick={openHandler}>
                Отправить рассылку
            </Button>
            {open && (
                <CreatingMailingList
                    open={open}
                    onClose={closeMailingListHandler}
                />
            )}
            <Notification />
        </Container>
    )
}

const TitleMailing = styled('p')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
    color: #020202;
`
const Container = styled('div')`
    margin-left: 20px;
    margin-top: 100px;
    button {
        width: 200px;
    }
`
