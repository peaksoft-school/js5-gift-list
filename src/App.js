import icos from './assets/images/анонимно.png'
import MeatBalls from './components/ui/meatBall/components/meatBalls'

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
    return (
        <div className="App">
            <MeatBalls navigations={navigations} />
        </div>
    )
}

export default App
