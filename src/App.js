import { useState } from 'react'

import Radio from './components/ui/Radio'

function App() {
    const [cheked, setCheked] = useState(false)
    const a = 'text'
    console.log(cheked)
    const f = (e) => {
        setCheked(e.target.checked)
    }
    return (
        <div className="App">
            gift list
            <Radio onChange={f} cheked={cheked} label={a} />
        </div>
    )
}

export default App
