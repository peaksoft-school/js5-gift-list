import React, { forwardRef } from 'react'

import styled from '@emotion/styled'
import OutlinedInput from '@mui/material/OutlinedInput'

const Input = forwardRef((props, ref) => {
    const {
        type,
        placholder,
        name,
        onBlur,
        validation,
        id,
        onchange,
        value,
        width,
        height,
    } = props
    return (
        <StyledTextField
            type={type}
            placeholder={placholder}
            name={name}
            id={id}
            onBlur={onBlur}
            validation={validation}
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
    backgroundColor: props.validation ? '#fddddd;' : '',
    border: props.validation ? ' 1px solid #b40e0e; ' : '',
}))
