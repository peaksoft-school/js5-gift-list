import React, { useEffect, useState } from 'react'

import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import { ReactComponent as WarningIcon } from '../assets/icons/warning.svg'
import MainSearchInput from '../components/ui/MainSearchInput'
import SearchInputWithSelect from '../components/ui/searchInputWithSelect/SearchInputWithSelect'
import {
    getCategories,
    getCharitiesWithFilter,
    getSubCategories,
} from '../store/slices/admin/charityAction'
import { mainSearchAction } from '../store/slices/mainSearchAction'
import { array } from '../utils/constants/constants'

import MenuAccaunt from './MenuAccaount'

export const Header = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState('')
    const [categoryId, setIdCategory] = useState('')
    const dispatch = useDispatch()
    const location = useLocation()
    const { options } = useSelector((state) => state.users)
    const { searching } = useSelector((state) => state)
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        dispatch(getCategories())
        dispatch(getCharitiesWithFilter('search=all'))
    }, [])
    useEffect(() => {
        dispatch(getCharitiesWithFilter(searchParams.toString()))
    }, [searchParams.toString()])
    // useEffect(() => {
    //     dispatch(getSubCategories(categoryId))
    // }, [categoryId])

    const valueChangeHandler = (e) => {
        setValue(e.target.value)
        dispatch(mainSearchAction(e.target.value))
    }
    const searchResultOptionSelecHandler = (id) => {
        navigate(`/friends/${id}`)
        setValue('')
    }

    const stopPropagationHandler = (event) => {
        event.stopPropagation()
    }
    const getIdCategory = (e) => {
        if (e.state) {
            setSearchParams({ ...searchParams, status: e.state })
            searchParams.status = e.state
        }
        if (e.category) {
            setSearchParams({ ...searchParams, categoryId: e.category })
            searchParams.categoryId = e.category
            setIdCategory(e.category)
            dispatch(getSubCategories(e.category))
        }
        if ((e.category, e.subCategory)) {
            setSearchParams({ ...searchParams, subCategoryId: e.subCategory })
            searchParams.subCategoryId = e.subCategory
        }
    }
    return (
        <Headers>
            <InputDiv>
                {location.pathname === '/charity' ? (
                    <SearchInputWithSelect
                        showSubCategory={categoryId}
                        onChange={getIdCategory}
                        categories={searching.categories}
                        stateOption={array}
                        subCategories={searching.subCategories}
                    />
                ) : (
                    <MainSearchInput
                        options={options}
                        onChange={valueChangeHandler}
                        value={value}
                        onClick={searchResultOptionSelecHandler}
                        stopPropagationHandler={stopPropagationHandler}
                    />
                )}
            </InputDiv>
            <WarningSpan>
                <WarningIcon />
            </WarningSpan>
            <MenuAccaunt />
        </Headers>
    )
}
export default Header

const Headers = styled('header')`
    width: 80%;
    height: 86px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    position: fixed;
    top: 0;
    background: #ffffff;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.03);
    z-index: 2;
`
const WarningSpan = styled('span')`
    margin-left: 30px;
`
const InputDiv = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
`
