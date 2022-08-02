import React, { useState } from 'react'

import MyHolidaysCard from '../../users/MyHolidaysCard'

import EditHolidaysModal from './EditHolidaysModal'

const EditHolidays = () => {
    const [open, setOpen] = useState(false)

    const onCloseHandler = () => {
        setOpen((prev) => !prev)
    }
    const openModalHandler = () => {
        setOpen(!open)
    }
    return (
        <div>
            <MyHolidaysCard onOpen={openModalHandler} />
            <EditHolidaysModal open={open} onClose={onCloseHandler} />
        </div>
    )
}

export default EditHolidays
