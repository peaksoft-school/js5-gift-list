import React from 'react'

import styled from '@emotion/styled'

const Button = ({
    width,
    heigth,
    backgroundColor,
    radius,
    color,
    border,
    children,
}) => {
    return (
        <Buttons
            width={width}
            heigth={heigth}
            backgroundColor={backgroundColor}
            radius={radius}
            color={color}
            border={border}
        >
            {children}
        </Buttons>
    )
}

export default Button

const Buttons = styled('button')`
    color: ${(props) => props.color};
    border-radius: ${(props) => props.radius};
    background-color: ${(props) => props.backgroundColor};
    height: ${(props) => props.heigth};
    width: ${(props) => props.width};
    border: ${(props) => props.border};
`
