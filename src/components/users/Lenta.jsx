import React from 'react'

import styled from '@emotion/styled'

// import styled from '@emotion/styled'

import HomePage from '../../containers/HomePage'
import Notification from '../ui/notification/Notification'

export const Lenta = () => {
    return (
        <Div>
            <HomePage />
            <Notification />
        </Div>
    )
}

const Div = styled('div')`
    width: 100%;
    margin: 0 auto;
`
