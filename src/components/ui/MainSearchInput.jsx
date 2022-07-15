import SearchIcon from '@mui/icons-material/Search'
import { InputBase, IconButton, Paper, styled, Avatar } from '@mui/material'

export default function MainSearchInput({
    options,
    onChange,
    open,
    value,
    onClick,
}) {
    const renderSearchResults = () => {
        if (!options) {
            return <p>Такого пользователя не существует</p>
        }
        return options.map((user) => {
            return (
                <StyledUserDiv key={user.id}>
                    <StyledAvatar alt="Remy Sharp" src={user.img} />
                    <StyledSpan>{user.name}</StyledSpan>
                </StyledUserDiv>
            )
        })
    }

    return (
        <>
            <StyledFormPaper>
                <IconButton>
                    <MuiSearchIcon />
                </IconButton>
                <MuiInputBase
                    placeholder="Введите имя"
                    value={value}
                    onChange={onChange}
                    onClick={onClick}
                />
            </StyledFormPaper>
            {value.trim().length >= 1 && open && (
                <ResultDiv>
                    <StyledTitle>Результаты поиска</StyledTitle>
                    <hr />
                    <StyledContentTitle>
                        {renderSearchResults()}
                    </StyledContentTitle>
                </ResultDiv>
            )}
        </>
    )
}

const ResultDiv = styled('div')`
    background-color: #eef2f2;
    border-radius: 8px;
    position: absolute;
    height: auto;
    top: 65px;
    width: 823px;
`

const StyledFormPaper = styled(Paper)`
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
        border: 2px solid #8639b5;
    }
    &:focus-within {
        border: 2px solid #8639b5;
    }
`

const MuiInputBase = styled(InputBase)`
    width: 721px;
    height: 17px;
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
`

const StyledTitle = styled('p')`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    height: 22px;
    letter-spacing: 0.2px;
    color: #020202;
    margin-left: 18px;
`

const StyledSpan = styled('span')`
    padding: 5px;
`

const StyledUserDiv = styled('div')`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 16px;
`

const StyledContentTitle = styled('span')`
    height: 19px;
    font-family: inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.2px;
    color: #020202;
`

const StyledAvatar = styled(Avatar)`
    width: 40px;
    height: 40px;
`
