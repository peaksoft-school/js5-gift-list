import { toast } from 'react-toastify'
import styled from 'styled-components'

import icos from './assets/images/анонимно.png'
import MeatBalls from './components/ui/meatBall/components/meatBalls'
import Notification from './components/ui/notification/Notification'

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
    const options = {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
            height: '120px',
            width: '390px',
            display: 'flex',
            justifyContent: 'space-around',
        },
    }
    const showNotification = () => {
        toast.success(
            <>
                <p>Success!!</p> <p>Message of status</p>
            </>,
            options
        )
    }
    return (
        <div className="App">
            <MeatBalls navigations={navigations} />
            <Notification status="success" options={options} />
            <Button onClick={showNotification}>Show Notification</Button>
        </div>
    )
}

export default App
const Button = styled.button`
    margin-left: 300px;
`
