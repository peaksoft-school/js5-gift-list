import React, { useState } from 'react'

import styled from 'styled-components'

import SearchInput from './SearchInput'
import SearchSelect from './SearchSelect'

const SearchInputwithSelect = ({ options }) => {
    const [isActived, setISActived] = useState(false)
    const [isFocused, setIsFocused] = useState('')
    const [value, setValue] = useState({
        searchText: '',
        state: null,
        category: null,
        subCategory: null,
        country: null,
    })

    const onActiveHandler = (e) => {
        setISActived(!isActived)

        if (isFocused === '') {
            setIsFocused(e.target.className)
        } else if (isFocused !== e.target) {
            setISActived(!isActived)
            setIsFocused('')
        }
    }
    const getValue = (obj) => {
        if (obj.type === 'state') {
            setValue((prev) => {
                return {
                    ...prev,
                    state: obj.text,
                }
            })
        } else if (obj.type === 'category') {
            setValue((prev) => {
                return {
                    ...prev,
                    category: obj.text,
                }
            })
        } else if (obj.type === 'subCategory') {
            setValue((prev) => {
                return {
                    ...prev,
                    subCategory: obj.text,
                }
            })
        } else if (obj.type === 'country') {
            setValue((prev) => {
                return {
                    ...prev,
                    country: obj.text,
                }
            })
        } else {
            setValue((prev) => {
                return {
                    ...prev,
                    searchText: obj.searchText,
                }
            })
        }
    }
    return (
        <StyleDiv onClick={onActiveHandler} primary={isActived}>
            <SearchInput onChange={getValue} />
            <SelectContainer>
                <SearchSelect
                    options={options}
                    onChange={getValue}
                    value={value.state}
                    type="state"
                    category="Состояние"
                />
                <SearchSelect
                    options={options}
                    onChange={getValue}
                    value={value.category}
                    type="category"
                    category="Категория"
                />
                <SearchSelect
                    options={options}
                    onChange={getValue}
                    type="subCategory"
                    category="Подкатегория"
                />
                <SearchSelect
                    options={options}
                    onChange={getValue}
                    type="country"
                    category="Страна"
                />
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
