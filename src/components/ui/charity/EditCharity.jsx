import { useState, useEffect } from 'react'

import styled from '@emotion/styled'
import { InputLabel, MenuItem, Select } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
    getCategory,
    getSubCategory,
    postCharity,
} from '../../../store/slices/GiftActions'
import Button from '../Button'
import ImagePicker from '../ImagePicker'
import Notification from '../notification/Notification'

import SelectCharity from './SelectCharity'
import TextFields from './TextField'

export default function EditCharity() {
    const [category, setCategory] = useState()
    const [subCategory, setSubCategory] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategory(setCategory))
    }, [])
    const [allvalue, setallvalue] = useState({
        name: '',
        photo: null,
        categoryId: '',
        subCategoryId: '',
        status: '',
        description: '',
    })

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(postCharity(allvalue))
        navigate('/charity')
    }
    const getCategotyById = (id) => {
        dispatch(getSubCategory({ id, setSubCategory }))
    }
    const img = allvalue?.photo ? null : allvalue.photo
    return (
        <div style={styleForCard}>
            <Notification />
            breadCrambs
            <Anketa onSubmit={submitHandler}>
                <ImagePicker
                    id="charity"
                    onChange={(file) => {
                        setallvalue({
                            ...allvalue,
                            photo: file,
                        })
                    }}
                    newFile={img}
                />
                <Container>
                    <Title>Добавление вещи </Title>
                    <Questionaire>
                        <div>
                            <TextFields
                                label=" Название подарка"
                                style={InputLabelstyle}
                                value={allvalue.name}
                                onChange={(e) => {
                                    setallvalue({
                                        ...allvalue,
                                        name: e.target.value,
                                    })
                                }}
                                propsstyle={textFieldstyle}
                            />
                            <InputLabel>Категория</InputLabel>
                            <SelectCharity
                                onClick={getCategotyById}
                                value={allvalue.categoryId}
                                data={category}
                                onChange={(e) => {
                                    setallvalue({
                                        ...allvalue,
                                        categoryId: e.target.value,
                                    })
                                }}
                            />
                        </div>
                        {/* ------------------------------------------------------------ */}
                        <div>
                            <InputLabel>Состояние</InputLabel>
                            <Select
                                value={allvalue.status}
                                onChange={(e) => {
                                    setallvalue({
                                        ...allvalue,
                                        status: e.target.value,
                                    })
                                }}
                                style={textFieldstyle}
                            >
                                <MenuItem value="USED">Б/У</MenuItem>
                                <MenuItem value="NEW">Новое</MenuItem>
                            </Select>
                            <InputLabel>Подкатегория</InputLabel>
                            <SelectCharity
                                value={allvalue.subCategoryId}
                                onChange={(e) => {
                                    setallvalue({
                                        ...allvalue,
                                        subCategoryId: e.target.value,
                                    })
                                }}
                                data={subCategory}
                            />
                        </div>
                        {/* --------------------------------  --------------------- */}
                    </Questionaire>
                    <TextFields
                        style={TextAreaStyle}
                        label="Описание подарка"
                        value={allvalue.description}
                        onChange={(e) => {
                            setallvalue({
                                ...allvalue,
                                description: e.target.value,
                            })
                        }}
                        propsstyle={styles}
                    />
                    {/* -------------------------  --------------------- */}
                    <Buttons>
                        <Button variant="outlined">Отмена</Button>
                        <Button type="submit">Сохранить</Button>
                    </Buttons>
                </Container>
            </Anketa>
        </div>
    )
}
const styleForCard = {
    margin: '30px auto',
    width: '100%',
}
const Questionaire = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 808px;
    border-radius: 10px;
`
const InputLabelstyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '70px',
}
const Container = styled('div')`
    height: auto;
    width: 808px;
`
const Buttons = styled('div')`
    display: flex;
    width: inherit;
    justify-content: right;
    margin-top: 50px;
    & button {
        margin: 10px;
    }
`
const textFieldstyle = {
    width: '396px',
    height: '35px',
    color: '#8D949E',
    padding: '8px 18px',
    borderRadius: '6px',
    margin: '5px 0',
}
const TextAreaStyle = {
    display: 'flex',
    flexDirection: 'column',
}
const Anketa = styled('form')`
    display: flex;
    justify-content: space-around;
    width: 1086px;
    border-radius: 10px;
    margin: 30px auto;
    padding: 20px;
    height: 871px;
    background-color: white;
`
const Title = styled('h1')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    align-items: center;
    letter-spacing: 0.2px;
`
const styles = {
    width: 'auto',
    height: '111px',
    borderRadius: '6px',
    alignItems: 'flex-start',
    padding: '8px 8px',
}
