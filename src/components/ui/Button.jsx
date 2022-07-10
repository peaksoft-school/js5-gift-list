import React from 'react'

import styled from '@emotion/styled'

const Button = ({ children, ...props }) => {
    return <Buttons {...props}>{children}</Buttons>
}

export default Button

const Buttons = styled('button')((props) => ({
    color: props.color || '#FFFFFF',
    borderRadius: props.radius || '6px',
    backgroundColor: props.backgroundColor || '#8639B5',
    height: props.heigth || '37px',
    width: props.width || '232px',
    border: props.border || 'none',
    fontFamily: props.fontFamily || 'Inter',
    fontSize: props.fontSize || '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
        ...props.hover,
    },
    '&:active': {
        ...props.active,
    },
    '&:disabled': {
        ...props.disabled,
    },
}))
