import { useState } from 'react'

import styled from '@emotion/styled'
import { InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

// import { addCharityActions } from '../../../store/slices/AddCharity'
import { postCharity } from '../../../store/slices/GiftActions'
import Button from '../Button'
import ImagePicker from '../ImagePicker'

export default function EditCharity() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [allvalue, setallvalue] = useState({
        photo: null,
        name: '',
        state: '',
        category: '',
        subcategory: '',
        description: '',
    })
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(postCharity(allvalue))
    }
    return (
        <div style={styleForCard}>
            <Title>Редактировать {id}</Title>
            <Anketa onSubmit={submitHandler}>
                <ImagePicker
                    onChange={(file) => {
                        setallvalue({
                            ...allvalue,
                            photo: file,
                        })
                    }}
                    newFile={allvalue.photo}
                />
                <Container>
                    <Title>Добавление вещи </Title>
                    <Questionaire>
                        <div>
                            <InputLabel style={InputLabelstyle}>
                                Название подарка
                                <TextField
                                    value={allvalue.name}
                                    onChange={(e) => {
                                        setallvalue({
                                            ...allvalue,
                                            name: e.target.value,
                                        })
                                    }}
                                    variant="outlined"
                                    InputProps={{
                                        style: textFieldstyle,
                                    }}
                                />
                            </InputLabel>
                            <InputLabel>Категория</InputLabel>
                            <Select
                                value={allvalue.category}
                                onChange={(e) => {
                                    setallvalue({
                                        ...allvalue,
                                        category: e.target.value,
                                    })
                                }}
                                style={textFieldstyle}
                            >
                                <MenuItem value="Электроника">
                                    Электроника
                                </MenuItem>
                                <MenuItem value="Одежда">Одежда</MenuItem>
                                <MenuItem value="Школа">Школа</MenuItem>
                                <MenuItem value="Обувь">Обувь</MenuItem>
                            </Select>
                        </div>
                        {/* ------------------------------------------------------------ */}
                        <div>
                            <InputLabel>Состояние</InputLabel>
                            <Select
                                value={allvalue.state}
                                onChange={(e) => {
                                    setallvalue({
                                        ...allvalue,
                                        state: e.target.value,
                                    })
                                }}
                                style={textFieldstyle}
                            >
                                <MenuItem value="Б/У">Б/У</MenuItem>
                                <MenuItem value="Новое">Новое</MenuItem>
                            </Select>
                            <InputLabel>Подкатегория</InputLabel>
                            <Select
                                value={allvalue.subcategory}
                                onChange={(e) => {
                                    setallvalue({
                                        ...allvalue,
                                        subcategory: e.target.value,
                                    })
                                }}
                                style={textFieldstyle}
                            >
                                <MenuItem value="Электроника">
                                    Электроника
                                </MenuItem>
                                <MenuItem value="Одежда">Одежда</MenuItem>
                                <MenuItem value="Школа">Школа</MenuItem>
                                <MenuItem value="Обувь">Обувь</MenuItem>
                            </Select>
                        </div>
                        {/* --------------------------------  --------------------- */}
                    </Questionaire>
                    <InputLabel style={TextAreaStyle}>
                        Описание подарка
                        {/* <AboutGift /> */}
                        <TextField
                            value={allvalue.description}
                            onChange={(e) => {
                                setallvalue({
                                    ...allvalue,
                                    description: e.target.value,
                                })
                            }}
                            InputProps={{
                                style: styles,
                            }}
                            variant="outlined"
                        />
                    </InputLabel>
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
    margin: '30px',
    padding: '20px',
    width: '1086px',
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
}
const Questionaire = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 808px;
    border-radius: 10px;
`
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
const InputLabelstyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '70px',
}
const TextAreaStyle = {
    display: 'flex',
    flexDirection: 'column',
}
const Anketa = styled('form')`
    display: flex;
    justify-content: space-around;
    background: #ffffff;
    border-radius: 10px;
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
// const AboutGift = styled('textarea')`
//     width: auto;
//     height: 111px;
//     border: 1px solid #bdbdbd;
//     border-radius: 6px;
//     align-items: flex-start;
//     padding: 8px 18px;
//     text-decoration: none;
//     :active {
//         border: 1px solid red;
//     }
//     /* background-color: red; */
// `
