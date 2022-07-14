import { useState } from 'react'
import styled from 'styled-components'
import icos from './assets/images/анонимно.png'
import MeatBalls from './components/ui/meatBall/components/meatBalls'
import Notification from './components/ui/notification/Notification'

function App() {
    const [show, setShow] = useState(false)
    const navigations = [
        {
            title: 'Заблокировать',
            id: 2,
            icon: icos,
            clickItem: () => console.log('сlicked 1'),
        },
        {
            title: 'Заблокировать',
            id: 3,
            icon: icos,
            clickItem: () => console.log('сlicked 2'),
        },
        {
            title: 'Заблокировать',
            id: 4,
            icon: icos,
            clickItem: () => console.log('сlicked 3'),
        },
    ]
    return (
        <div className="App">
            <MeatBalls navigations={navigations} />
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
