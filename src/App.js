import React, { useState } from 'react'
import styled from 'styled-components'
import Notification from './components/ui/notification/Notification'

import MainRouter from './routes/MainRouter'
import AllRoutes from './routes/Routes'

function App() {
    const [show, setShow] = useState(false)
    const showNotification = () => {
        setShow(true)
    }
    return (
        <div className="App">
            <MainRouter />
            <AllRoutes />
            <Notification
                isShow={show}
                title="Error"
                className="error"
                message="Text of problem"
            />
            <Button onClick={showNotification}>Show Notification</Button>
        </div>
    )
}

export default App

const Button = styled.button`
    margin-left: 300px;
`
