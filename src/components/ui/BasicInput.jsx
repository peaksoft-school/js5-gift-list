import React from 'react'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import styled from 'styled-components'

const BasicInput = ({
    eyes,
    value,
    placeholder,
    onChange,
    width,
    height,
    type,
}) => {
    const [values, setValues] = React.useState(false)

    const handleClickShowPassword = () => {
        setValues((prev) => !prev)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    return (
        <OutlinedInputStyled
            type={type || values ? 'text' : 'password'}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            width={width}
            height={height}
            endAdornment={
                eyes && (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {values ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )
            }
        />
    )
}

export default BasicInput

const OutlinedInputStyled = styled(OutlinedInput)`
    box-sizing: border-box;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 6px;
    position: relative;
`
