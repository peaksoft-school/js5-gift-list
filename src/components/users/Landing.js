import React, { useState } from 'react'

import SignUp from '../authorization/SingUp'

const Landing = () => {
    const [state, setState] = useState(false)
    const clickHandler = () => {
        setState(true)
    }
    return (
        <div>
            <button onClick={clickHandler}>войти</button>
            {state && <SignUp />}
        </div>
    )
}

export default Landing
