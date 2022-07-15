import React, { useState } from 'react'

import styled from 'styled-components'

import { titleOfCategory } from '../../../utils/constants/constants'

import SearchInput from './SearchInput'
import SearchSelect from './SearchSelect'

const SearchInputwithSelect = ({ onChange, selectHandler }) => {
    const [isActived, setISActived] = useState(false)
    const [isFocused, setIsFocused] = useState('')

    const onActiveHandler = (e) => {
        setISActived(!isActived)

        if (isFocused === '') {
            setIsFocused(e.target.className)
        } else if (isFocused !== e.target) {
            setISActived(!isActived)
            setIsFocused('')
        }
    }
    return (
        <StyleDiv onClick={onActiveHandler} primary={isActived}>
            <SearchInput onChange={onChange} />
            <SelectContainer>
                {titleOfCategory?.map((elem) => {
                    return (
                        <SearchSelect
                            category={elem.category}
                            options={elem?.options}
                            onChange={selectHandler}
                        />
                    )
                })}
            </SelectContainer>
        </StyleDiv>
    )
}
export default SearchInputwithSelect

const SelectContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const StyleDiv = styled.div`
    width: 821px;
    height: 40px;
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    padding-right: 27.5px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    :hover {
        border: 1px solid #8639b5;
    }
    :focus-within {
        border: 1px solid #8639b5;
    }
`
