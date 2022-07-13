import React, { useState } from 'react'

import styled from 'styled-components'

import Vector from '../../../assets/icons/Vector.png'

function CustomSelect({ name, options }) {
    const [isActive, setIsActive] = useState(false)
    const [categoryName, setCategoryName] = useState()

    const onClickHandler = () => {
        setIsActive((prev) => !prev)
    }
    const onClickOptionHandler = (e) => {
        setCategoryName(e.target.innerHTML)
        setIsActive(false)
    }

    return (
        <DropdownDiv>
            <DropDownBtn onClick={onClickHandler}>
                {categoryName || name}
                <IconVector>
                    <img src={Vector} alt="" />
                </IconVector>
            </DropDownBtn>
            {isActive && (
                <DropdownContent>
                    {options.map((elem) => (
                        <DropdownItem
                            onClick={onClickOptionHandler}
                            key={Math.random().toString()}
                        >
                            {elem.value}
                        </DropdownItem>
                    ))}
                </DropdownContent>
            )}
        </DropdownDiv>
    )
}

export default CustomSelect

const DropdownDiv = styled.div`
    position: relative;
    display: flex;
    margin-right: 15.5px;
`
const DropDownBtn = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    letter-spacing: 0.02em;
    color: #8d949e;
    cursor: pointer;
`
const DropdownContent = styled.div`
    position: absolute;
    top: 10px;
    left: 0px;
    right: 0px;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
    border-radius: 6px;
    margin-top: 11px;
    overflow: hidden;
`
const DropdownItem = styled.div`
    font-family: 'Inter';
    padding: 5px 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #020202;
    cursor: pointer;
    transition: ease-in 0.2s;
    &:hover {
        background: rgba(134, 57, 181, 0.4);
        color: #fff;
    }
`

const IconVector = styled.span`
    padding-left: 6.5px;
`
