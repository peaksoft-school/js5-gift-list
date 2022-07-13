import { useState } from 'react'

import MainSearchInput from './components/ui/MainSearchInput'

const USERS = [
    {
        id: 'e1',
        name: 'Adilet',
        img: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonas-kakaroto-736230.jpg&fm=jpg',
    },
    { id: 'e4', name: 'B' },
    { id: 'e2', name: 'C' },
    { id: 'e3', name: 'D' },
]
function App() {
    const [value, setValue] = useState('')

    const [open, setOpen] = useState(false)

    const openHandler = () => {
        setOpen(true)
    }
    const inputValueChangeHandler = (event) => {
        setValue(event.target.value)
    }
    return (
        <div className="App">
            gift list
            <MainSearchInput
                USERS={USERS}
                value={value}
                onChange={inputValueChangeHandler}
                onClick={openHandler}
                open={open}
            />
        </div>
    )
}

export default App
