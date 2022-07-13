import React, { forwardRef } from 'react'

import styled from '@emotion/styled'
import { OutlinedInput } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'

import { ReactComponent as ClosedEyes } from '../../assets/icons/closedEyes.svg'
import { ReactComponent as OpenedEyes } from '../../assets/icons/openedEyes.svg'

const InputPassword = forwardRef((props) => {
    const { ref, placeholder, name, value, onChange, id } = props
    const [textOrPassword, setValues] = React.useState(false)

    const handleClickShowPassword = () => {
        setValues((prev) => !prev)
    }
    const handleDownPassword = (event) => {
        event.preventDefault()
    }

    return (
        <OutlinedInputStyled
            type={textOrPassword ? 'text' : 'password'}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            ref={ref}
            id={id}
            name={name}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleDownPassword}
                        edge="end"
                    >
                        {textOrPassword ? <OpenedEyes /> : <ClosedEyes />}
                    </IconButton>
                </InputAdornment>
            }
        />
    )
})

export default InputPassword

const OutlinedInputStyled = styled(OutlinedInput)`
    box-sizing: border-box;
    width: 482px;
    height: 35px;
    border-radius: 6px;
`
