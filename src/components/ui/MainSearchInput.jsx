import SearchIcon from '@mui/icons-material/Search'
import { InputBase, IconButton, styled, Avatar } from '@mui/material'

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

    let content = <p>Такого пользователя не существует</p>

    if (!filteredUser) {
        return content
    }
    filteredUser.map((user) => {
        // eslint-disable-next-line no-return-assign
        return (content = (
            <StyledUserDiv key={user.id}>
                <StyledAvatar alt="Remy Sharp" src={user.img} />
                <StyledSpan>{user.name}</StyledSpan>
            </StyledUserDiv>
        ))
    })

    return (
        <>
            <StyledForm>
                <IconButton>
                    <MuiSearchIcon />
                </IconButton>
                <MuiInputBase
                    placeholder="Введите имя"
                    value={value}
                    onChange={onChange}
                    onClick={onClick}
                />
            </StyledForm>
            <ResultContainer>
                {value.trim().length >= 1 && open && (
                    <ResultDiv>
                        <StyledTitle>Результаты поиска</StyledTitle>
                        <hr />
                        <StyledContentTitle>{content}</StyledContentTitle>
                    </ResultDiv>
                )}
            </ResultContainer>
        </>
    )
}

const ResultDiv = styled('div')`
    background-color: #f4f6f6;
    border-radius: 8px;
    position: absolute;
    top: 65px;
    width: 823px;
`

const StyledForm = styled('form')`
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
    width: 743px;
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

const ResultContainer = styled('div')`
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

const StyledAvatar = styled(Avatar)`
    width: 35px;
    height: 35px;
    margin-bottom: 9px;
`
