/* eslint-disable no-return-assign */
import SearchIcon from '@mui/icons-material/Search'
import { Paper, InputBase, IconButton, styled, Avatar } from '@mui/material'

import CustomSelect from './select/CustomSelect'

export const arr = [
    {
        category: 'Состояние',
        placeholder: 'Выберите категорию',
        options: [
            { value: 'Все', label: 'Все' },
            { value: 'Б/У', label: 'Б/У' },
            { value: 'Новое', label: 'Новое' },
        ],
    },
    {
        category: 'Категория',
        placeholder: 'Укажите подкатегорию',
        options: [
            { value: 'Электpоника', label: 'Электроника' },
            { value: 'Одежда', label: 'Одежда' },
            { value: 'Школа', label: 'Школа' },
            { value: 'Дом и Сад', label: 'Дом и Сад' },
            { value: 'Обувь', label: 'Обувь' },
            { value: 'Транспорт', label: 'Транспорт' },
        ],
    },
    {
        category: 'Подкатегория',
        placeholder: 'Укажите состояние',
        options: [
            { value: 'Электроника', label: 'Электроника' },
            { value: 'Одежда', label: 'Одежда' },
            { value: 'Школа', label: 'Школа' },
            { value: 'Дом и Сад', label: 'Дом и Сад' },
            { value: 'Обувь', label: 'Обувь' },
            { value: 'Транспорт', label: 'Транспорт' },
        ],
    },
    {
        category: 'Страна',
        placeholder: 'Укажите состояние',
        options: [
            { value: 'Кыргызстан', label: 'Кыргызстан' },
            { value: 'Айзербайджан', label: 'Айзербайджан' },
            { value: 'Россия', label: 'Россия' },
            { value: 'Казахстан', label: 'Казахстан' },
            { value: 'Узбекистан', label: 'Узбекистан' },
            { value: 'Таджикистан', label: 'Таджикистан' },
        ],
    },
]

export default function MainSearchInput({
    USERS,
    onChange,
    open,
    value,
    onClick,
}) {
    const filteredUser = USERS.filter((user) => {
        return user.name.toLowerCase().includes(value.toLowerCase())
    })

    let content = <span>Такого пользователя не существует</span>

    if (!filteredUser) {
        return content
    }
    filteredUser.map((user) => {
        return (content = (
            <StyledUserDiv key={user.id}>
                <StyledAvatar alt="Remy Sharp" src={user.img} />
                <StyledSpan>{user.name}</StyledSpan>
            </StyledUserDiv>
        ))
    })

    return (
        <>
            <PaperForm component="form">
                <IconButton aria-label="menu">
                    <MuiSearchIcon />
                </IconButton>
                <MuiInputBase
                    placeholder="Введите имя"
                    type="search"
                    value={value}
                    onChange={onChange}
                    onClick={onClick}
                />
                <StyledIconButton />
                {arr.map((elem) => {
                    return (
                        <CustomSelect
                            key={elem.category}
                            name={elem.category}
                            options={elem.options}
                        />
                    )
                })}
            </PaperForm>
            <Div>
                {value.trim().length >= 1 && open && (
                    <ResultDiv>
                        <StyledTitle>Результаты поиска</StyledTitle>
                        <hr />
                        <StyledContentTitle>{content}</StyledContentTitle>
                    </ResultDiv>
                )}
            </Div>
        </>
    )
}

const ResultDiv = styled('div')`
    background-color: aqua;
    border-radius: 8px;
`

const PaperForm = styled(Paper)`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 2px;
    gap: 18px;
    width: 821px;
    height: 40px;
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    &:hover {
        border: 1px solid #8639b5;
    }
`

const MuiInputBase = styled(InputBase)`
    height: 17px;
    margin: -20px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #8d949e;
    flex: auto;
`

const MuiSearchIcon = styled(SearchIcon)`
    width: 20px;
    height: 20px;
    padding: 10px;
`

const Div = styled('div')`
    height: 100%;
    width: 821px;
    background-color: white;
    border-radius: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const StyledTitle = styled('p')`
    font-style: normal;
    font-weight: 500;
    margin: 0;
    font-size: 18px;
    padding: 5px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
    color: #020202;
`

const StyledSpan = styled('span')`
    padding: 5px;
`

const StyledUserDiv = styled('div')`
    display: flex;
`

const StyledContentTitle = styled('span')`
    width: 374px;
    height: 22px;
    padding: 5px;
    font-family: inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
    color: #020202;
`
const StyledIconButton = styled(IconButton)`
    /* color: #8639b5;
    background-color: red;
    border: 5px solid yellow; */
`
const StyledAvatar = styled(Avatar)`
    width: 35px;
    height: 35px;
    margin-bottom: 9px;
`
