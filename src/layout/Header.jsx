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

import MenuAccaunt from './MenuAccaount'

export const Header = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState('')
    const [idCategory, setIdCategory] = useState('')
    const dispatch = useDispatch()
    const loc = useLocation()
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
    useEffect(() => {
        dispatch(getSubCategories(idCategory))
    }, [idCategory])

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
    const opt3 = [
        { id: 'NEW', name: 'Новый' },
        { id: 'USED', name: 'Б/У' },
    ]
    const getIdCategory = (e) => {
        if (e.state) {
            setSearchParams({ ...searchParams, status: e.state })
            searchParams.status = e.state
        }
        if (e.category) {
            setSearchParams({ ...searchParams, categoryId: e.category })
            searchParams.categoryId = e.category
            setIdCategory(e.category)
        }
        if ((e.category, e.subCategory)) {
            setSearchParams({ ...searchParams, subCategoryId: e.subCategory })
            searchParams.subCategoryId = e.subCategory
        }
    }
    return (
        <Headers>
            <InputDiv>
                {loc.pathname === '/charity_users' ? (
                    <SearchInputWithSelect
                        isCategory={idCategory}
                        onChange={getIdCategory}
                        category={searching.categories}
                        stateOption={opt3}
                        subCategory={searching.subCategories}
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
    width: 100%;
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
    width: 60%;
    display: flex;
    flex-direction: column;
`
