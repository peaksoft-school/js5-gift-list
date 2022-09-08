import { useState, useEffect } from 'react'

import styled from '@emotion/styled'
import { InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import {
    getCategory,
    getSingleCharityById,
    getSubCategory,
    putCharity,
} from '../../../store/slices/GiftActions'
import Button from '../Button'
import ImagePicker from '../ImagePicker'
// import Notification from '../notification/Notification'

export default function EditMyCharity() {
    const [category, setCategory] = useState()
    const [subCategory, setSubCategory] = useState()
    const state = useSelector((state) => state.addCharity.single)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { editId } = useParams()
    useEffect(() => {
        dispatch(getCategory(setCategory))
        dispatch(getSingleCharityById(editId))
    }, [])
    const [allvalue, setallvalue] = useState({
        name: state?.gift.name,
        photo: state?.gift.photo,
        categoryId: state?.gift.category.id,
        subCategoryId: '',
        status: state?.gift.status,
        description: state?.gift.description,
    })

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(putCharity({ id: state?.gift.giftId, ...allvalue }))
        navigate('/charity')
        // window.location.reload()
    }
    const getCategotyById = (id) => {
        dispatch(getSubCategory({ id, setSubCategory }))
    }
    const img = state?.gift.photo?.name ? null : state?.gift.photo
    return (
        <div style={styleForCard}>
            {/* <Notification /> */}
            breadCrambs
            <Anketa onSubmit={submitHandler}>
                {state && (
                    <ImagePicker
                        onChange={(file) => {
                            setallvalue({
                                ...allvalue,
                                photo: file,
                            })
                        }}
                        newFile={img}
                    />
                )}
                <Container>
                    <Title>Редактировать </Title>
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
                                value={allvalue.categoryId}
                                onChange={(e) => {
                                    setallvalue({
                                        ...allvalue,
                                        categoryId: e.target.value,
                                    })
                                }}
                                style={textFieldstyle}
                            >
                                {category &&
                                    category.map((el) => (
                                        <MenuItem
                                            onClick={() => {
                                                getCategotyById(el.id)
                                            }}
                                            key={el.id}
                                            value={el.id}
                                        >
                                            {el.name}
                                        </MenuItem>
                                    ))}
                            </Select>
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
                            <Select
                                value={allvalue.subCategoryId}
                                onChange={(e) => {
                                    setallvalue({
                                        ...allvalue,
                                        subCategoryId: e.target.value,
                                    })
                                }}
                                style={textFieldstyle}
                            >
                                {subCategory &&
                                    subCategory.map((el) => (
                                        <MenuItem key={el.id} value={el.id}>
                                            {el.name}
                                        </MenuItem>
                                    ))}
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
                        <Button
                            onClick={() => window.history.back()}
                            variant="outlined"
                        >
                            Отмена
                        </Button>
                        <Button type="submit">Сохранить</Button>
                    </Buttons>
                </Container>
            </Anketa>
        </div>
    )
}
const styleForCard = {
    margin: '30px auto',
    // padding: '20px',
    width: '1086px',
    // height: '100%',
    // backgroundColor: '#ffffff',
    // borderRadius: '10px',
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
