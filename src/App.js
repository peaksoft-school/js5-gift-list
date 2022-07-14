import React from 'react'
import styled from 'styled-components'
import Notification from './components/ui/notification/Notification'

import MainRouter from './routes/MainRouter'
import AllRoutes from './routes/Routes'

function App() {
    let showNotification = () => {}
    const state = () => {
        showNotification = (fromChild) => {
            fromChild()
        }
        console.log('gelllo')
    }
    return (
        <div className="App">
            <MainRouter />
            <AllRoutes />
            <Notification
                showNotifications={showNotification}
                title="Error"
                className="error"
                message="Text of problem"
            />
            <Button onClick={state}>Show Notification</Button>
        </div>
    )
}

export default App

const Button = styled.button`
    margin-left: 300px;
`
