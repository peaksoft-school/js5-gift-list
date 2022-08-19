import React, { useState } from 'react'

import SignUp from '../authorization/SignUp'

const Landing = () => {
    const [state, setState] = useState(false)
    const click = () => {
        setState(true)
    }
    return (
        <div>
            <button onClick={click}>click</button>
            {state && <SignUp />}
        </div>
    )
}

export default Landing
