import styled from 'styled-components'

import icos from './assets/images/анонимно.png'
import MeatBalls from './components/ui/meatBall/components/meatBalls'
import Notification from './components/ui/notification/Notification'
import { showSuccessMessage } from './utils/helpers'

function App() {
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
    const showNotification = () => {
        showSuccessMessage(
            <>
                <p>Запрос выполнен успешно!!</p> <p>Message of status</p>
            </>
        )
    }
    return (
        <div className="App">
            <MeatBalls navigations={navigations} />
            <Notification />
            <Button onClick={showNotification}>Show Notification</Button>
        </div>
    )
}

export default App
const Button = styled.button`
    margin-left: 300px;
`
