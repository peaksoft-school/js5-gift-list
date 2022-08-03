import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import SearchInput from './SearchInput'
import SearchSelect from './SearchSelect'

const SearchInputwithSelect = ({
    stateOption,
    category,
    subCategory,
    country,
    onChange,
}) => {
    const [isActived, setISActived] = useState(false)
    const [isFocused, setIsFocused] = useState('')
    const [value, setValue] = useState({
        searchInput: '',
        state: '',
        category: '',
        subCategory: '',
        country: '',
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

    useEffect(() => {
        onChange(value)
    }, [value])

    const changeHandler = (fieldName, newValue) => {
        setValue((prev) => {
            return {
                ...prev,
                [fieldName]: newValue,
            }
        })
    }

    return (
        <StyleDiv onClick={onActiveHandler} primary={isActived}>
            <SearchInput onChange={changeHandler} value={value} />
            <SelectContainer>
                <SearchSelect
                    valueKey="id"
                    labelKey="name"
                    options={stateOption}
                    onChange={(newVaal) => changeHandler('state', newVaal)}
                    value={value.state}
                    category="Состояние"
                />
                <SearchSelect
                    valueKey="id"
                    labelKey="name"
                    options={category}
                    onChange={(newVaal) => changeHandler('category', newVaal)}
                    value={value.category}
                    category="Категория"
                />
                <SearchSelect
                    valueKey="id"
                    labelKey="name"
                    options={subCategory}
                    onChange={(newVaal) =>
                        changeHandler('subCategory', newVaal)
                    }
                    value={value.subCategory}
                    category="Подкатегория"
                />
                <SearchSelect
                    valueKey="id"
                    labelKey="name"
                    options={country}
                    onChange={(newVaal) => changeHandler('country', newVaal)}
                    value={value.country}
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
