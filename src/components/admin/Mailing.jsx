import React, { useState } from 'react'

import Button from '../ui/Button'

import CreatingMailingList from './CreatingMailingList'

export const Mailing = () => {
    const [open, setOpen] = useState(false)
    const openHandler = () => {
        setOpen((prev) => !prev)
    }
    const closeMailingListHandler = () => {
        setOpen(false)
    }
    return (
        <div>
            <div>Рассылка</div>
            <Button variant="contained" onClick={openHandler}>
                Отправить рассылку
            </Button>
            {open && (
                <CreatingMailingList
                    open={open}
                    onClose={closeMailingListHandler}
                />
            )}
        </div>
    )
}
