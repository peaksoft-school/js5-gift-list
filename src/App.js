import anonim from './assets/images/анонимно.png'
import reserve from './assets/images/Забронировать.png'
import present from './assets/images/подарки.png'
import dislike from './assets/images/Пожаловаться.png'
import MeatBalls from './components/ui/meatBall/components/meatBalls'

function App() {
    const forExample = [
        {
            title: 'Забронировать',
            id: 'e1',
            icon: anonim,
        },
        {
            title: 'Забронировать анонимно',
            id: 'e2',
            icon: reserve,
        },
        {
            title: 'Добавить в мои подарки',
            id: 'e3',
            icon: present,
        },
        {
            title: 'Пожаловаться',
            id: 'e4',
            icon: dislike,
        },
    ]
    return (
        <div className="App">
            <MeatBalls navigations={forExample} />
        </div>
    )
}

export default App
