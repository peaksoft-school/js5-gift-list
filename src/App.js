import React, { useState } from 'react'
import styled from 'styled-components'
import Notification from './components/ui/notification/Notification'

import MainRouter from './routes/MainRouter'
import AllRoutes from './routes/Routes'

function App() {
    const [show, setShow] = useState(false)
    return (
        <div className="App">
            <MainRouter />
            <AllRoutes />
            {show && (
                <Notification
                    title="Error"
                    status="error"
                    message="Text of problem"
                />
            )}
            <Button onClick={() => setShow(true)}>Show Notification</Button>
        </div>
    )
}

export default App

const Button = styled.button`
    margin-left: 300px;
`
