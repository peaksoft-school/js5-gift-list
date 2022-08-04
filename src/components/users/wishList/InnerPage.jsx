import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

const InnerPage = ({
    userName,
    toBook,
    holidays,
    date,
    nameGift,
    aboutGift,
    image,
    avatar,
}) => {
    return (
        <WrapperAll>
            <Img src={image} alt="image" />
            <WrapperDiv>
                <User>
                    <StyledAvatar src={avatar} alt="avatar" />
                    <UserName>{userName}</UserName>
                    <ToBooking>{toBook}</ToBooking>
                </User>
                <WrapperNameGiftAndDate>
                    <NameGift>Название праздника:</NameGift>
                    <DateGift>Дата праздника:</DateGift>
                </WrapperNameGiftAndDate>
                <WrapperPropsGiftAndDate>
                    <NameGiftProps>{holidays}</NameGiftProps>
                    <DateGiftProps>{date}</DateGiftProps>
                </WrapperPropsGiftAndDate>
                <StyledH1>{nameGift}</StyledH1>
                <Styledp>{aboutGift}</Styledp>
                <WrapperButtons>
                    <Button variant="contained">Редактировать</Button>
                    <Button variant="contained">Удалить</Button>
                </WrapperButtons>
            </WrapperDiv>
        </WrapperAll>
    )
}
export default InnerPage
const WrapperAll = styled('div')`
    display: flex;
    padding: 20px;
    max-width: 1046px;
    max-height: 871px;
`
const Img = styled('img')`
    width: 343px;
    height: 343px;
    border-radius: 8px;
`
const WrapperDiv = styled('div')`
    padding-left: 20px;
    padding-top: 50px;
`

const User = styled('div')`
    align-items: center;
    display: grid;
    grid-template-columns: 48px 500px 135px;
    margin-bottom: 14px;
`
const StyledAvatar = styled(Avatar)`
    width: 36px;
    height: 36px;
`
const UserName = styled('h2')`
    box-sizing: border-box;
    margin: 0;
`
const ToBooking = styled('p')`
    display: flex;
    justify-content: flex-end;
    color: #3774d0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`
const WrapperNameGiftAndDate = styled('div')`
    display: grid;
    grid-template-columns: 211px 472px;
    margin-bottom: 6px;
`
const NameGift = styled('div')`
    color: #5c5c5c;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
`
const DateGift = styled('div')`
    color: #5c5c5c;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
`
const WrapperPropsGiftAndDate = styled('div')`
    display: grid;
    grid-template-columns: 211px 472px;
    margin-bottom: 20px;
`
const NameGiftProps = styled('div')`
    color: #0ba360;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
`
const DateGiftProps = styled('div')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    line-height: 130%;
`
const StyledH1 = styled('h1')`
    color: #3774d0;
    font-size: 24px;
    font-weight: 500;
`
const Styledp = styled('h1')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    margin-bottom: 50px;
`
const WrapperButtons = styled('div')`
    display: flex;
    justify-content: flex-end;
    & button {
        margin-left: 24px;
    }
`
