import React, { forwardRef } from 'react'

import styled from '@emotion/styled'
import OutlinedInput from '@mui/material/OutlinedInput'

const Input = forwardRef((props) => {
    const { type, placholder, name, id, onchange, ref, value, width, height } =
        props
    return (
        <StyledTextField
            type={type}
            placeholder={placholder}
            name={name}
            id={id}
            onChange={onchange}
            ref={ref}
            value={value}
            width={width}
            height={height}
        />
    )
})

export default Input

const StyledTextField = styled(OutlinedInput)((props) => ({
    boxSizing: 'border-box',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    display: 'flex',
    borderRadius: '6px',
    alignItems: 'center',
    width: props.width || '482px',
    height: props.height || '35px',
}))
