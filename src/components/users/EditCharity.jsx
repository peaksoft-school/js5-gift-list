import { Card, InputLabel, TextField } from '@mui/material'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../ui/Button'
import ImagePicker from '../ui/ImagePicker'

export default function EditCharity() {
    const { id } = useParams()
    return (
        <Card style={cardStyle}>
            <Title>Редактировать {id}</Title>
            <Anketa>
                <ImagePicker />
                <Container>
                    <Title>Добавление вещи </Title>
                    <Questionaire>
                        <div>
                            <InputLabel style={InputLabelstyle}>
                                Название подарка
                                <TextField
                                    variant="outlined"
                                    InputProps={{
                                        style: textFieldstyle,
                                    }}
                                />
                            </InputLabel>
                            <InputLabel style={InputLabelstyle}>
                                Категория
                                <select style={textFieldstyle} name="holidays">
                                    {' '}
                                </select>
                            </InputLabel>
                        </div>
                        {/* ------------------------------------------------------------ */}
                        <div>
                            <InputLabel style={InputLabelstyle}>
                                Состояние
                                <select style={textFieldstyle}> </select>
                            </InputLabel>
                            <InputLabel style={InputLabelstyle}>
                                Подкатегория
                                <select style={textFieldstyle}> </select>
                            </InputLabel>
                        </div>
                        {/* --------------------------------  --------------------- */}
                    </Questionaire>
                    <InputLabel style={TextAreaStyle}>
                        Описание подарка
                        <TextField
                            placeholder="Введите описание подарка"
                            InputProps={{
                                style: { style },
                            }}
                        />
                    </InputLabel>
                    {/* -------------------------  --------------------- */}
                    <Buttons>
                        <Button variant="outlined">Отмена</Button>
                        <Button>Сохранить</Button>
                    </Buttons>
                </Container>
            </Anketa>
        </Card>
    )
}

const Questionaire = styled.div`
    display: flex;
    justify-content: space-between;
    width: 808px;
    border-radius: 10px;
`
const Container = styled.div`
    height: auto;
    width: 808px;
`
const Buttons = styled.div`
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
const Anketa = styled.form`
    display: flex;
    justify-content: space-around;
    background: #ffffff;
    border-radius: 10px;
`
const Title = styled.h1`
    font-family: 'Inter', san-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    align-items: center;
    letter-spacing: 0.2px;
`
const style = {
    width: '808px',
    height: '111px',
    border: '1px solid #BDBDBD',
    borderRadius: '6px',
}
const cardStyle = {
    padding: '15px',
    height: '870px',
}
