import React, { forwardRef } from 'react'

import styled from '@emotion/styled'
import OutlinedInput from '@mui/material/OutlinedInput'

const Input = forwardRef((props, ref) => {
    const {
        type,
        placeholder,
        name,
        id,
        error,
        onBlur,
        onChange,
        value,
        width,
        height,
        ...other
    } = props
    return (
        <StyledTextField
            error={error}
            placeholder={placeholder}
            name={name}
            id={id}
            onchange={onChange}
            onBlur={onBlur}
            ref={ref}
            value={value}
            width={width}
            height={height}
            {...other}
        />
    )
})

export default Input

const StyledTextField = styled(OutlinedInput)((props) => ({
    boxSizing: 'border-box',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    display: 'flex',

    borderRadius: '6px',
    alignItems: 'center',
    width: props.width || '482px',
    height: props.height || '35px',
}))
