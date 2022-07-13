import React from 'react'
import Notification from './components/ui/notification/Notification'

import MainRouter from './routes/MainRouter'
import AllRoutes from './routes/Routes'

function App() {
    return (
        <div className="App">
            <MainRouter />
            <AllRoutes />
            <Notification
                title="Error"
                className="error"
                message="Text of problem"
            />
        </div>
    )
}

export default App
