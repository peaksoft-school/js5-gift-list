import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'

import Button from '../ui/Button'

const ComplaintsInnerPage = (props) => {
    console.log(props.onClick)

    return (
        <div>
            <RouteTitle>
                Жалобы/
                <RouteNameTitle>Жакет</RouteNameTitle>
            </RouteTitle>
            <div style={styleForCard}>
                <Img
                    src="https://i.pinimg.com/originals/1b/58/e7/1b58e747469daa0da0370d7636775502.jpg"
                    alt="image"
                />
                <WrapperDiv>
                    <User>
                        <StyledAvatar
                            src="https://giftlist-bucket.s3.amazonaws.com/1661869658858user_photo1.jpg"
                            alt="avatar"
                        />
                        <UserName>Bill Gates</UserName>

                        <StyledToBookUserDiv>
                            <ToBookUserAvatar
                                src="https://giftlist-bucket.s3.amazonaws.com/1661869658858user_photo1.jpg"
                                alt="avatar"
                            />
                            <ToBooking>Забронирован</ToBooking>
                        </StyledToBookUserDiv>
                    </User>
                    <StyledH1>ЖАКЕТ</StyledH1>
                    <Styledp>
                        Жакет с однобортной застежкой на пуговицу выполнен в
                        двух цветах: черном и синем
                    </Styledp>
                    <WrapperNameGiftAndDate>
                        <NameGift>Категория:</NameGift>
                        <DateGift>Состояние:</DateGift>
                    </WrapperNameGiftAndDate>
                    <WrapperPropsGiftAndDate>
                        <NameGiftProps>Одежда</NameGiftProps>
                        <DateGiftProps>Новый</DateGiftProps>
                    </WrapperPropsGiftAndDate>
                    <WrapperNameGiftAndDate>
                        <NameGift>Подкатегория:</NameGift>
                        <DateGift>Дата добавления:</DateGift>
                    </WrapperNameGiftAndDate>
                    <WrapperPropsGiftAndDate>
                        <NameGiftProps>Часы</NameGiftProps>
                        <DateGiftProps>2022-08-23</DateGiftProps>
                    </WrapperPropsGiftAndDate>
                    <WrapperButtons>
                        <ComplainUserContainer>
                            <div>
                                <Avatar
                                    src="https://giftlist-bucket.s3.amazonaws.com/1661869658858user_photo1.jpg"
                                    alt="avatar"
                                />
                            </div>
                            <div>
                                <UserComplainedName>
                                    Бекжанова Кунзаада
                                </UserComplainedName>
                                <ComplainText>
                                    Нелегальные действия или регламентированные
                                    товары
                                </ComplainText>
                            </div>
                        </ComplainUserContainer>

                        <div>
                            <Button>Заблокировать</Button>
                        </div>
                    </WrapperButtons>
                </WrapperDiv>
            </div>
        </div>
    )
}
export default ComplaintsInnerPage

const styleForCard = {
    display: 'flex',
    margin: '30px',
    padding: '20px',
    width: '1086px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
}
const Img = styled('img')`
    width: 343px;
    height: 343px;
    border-radius: 8px;
`
const WrapperDiv = styled('div')`
    padding-left: 20px;
    padding-top: 50px;
    width: 683px;
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

const UserComplainedName = styled('h2')`
    margin-left: 10px;
    margin-top: -4px;
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
    font-weight: 400;
    font-size: 14px;
    margin-top: 1px;
    margin-left: 5px;
`
const WrapperNameGiftAndDate = styled('div')`
    display: grid;
    grid-template-columns: 211px 472px;
    margin-bottom: 6px;
`
const NameGift = styled('div')`
    color: #5c5c5c;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
`
const DateGift = styled('div')`
    color: #5c5c5c;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
`
const WrapperPropsGiftAndDate = styled('div')`
    display: grid;
    grid-template-columns: 211px 472px;
    margin-bottom: 20px;
`
const NameGiftProps = styled('div')`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
`
const DateGiftProps = styled('div')`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    line-height: 130%;
`
const StyledH1 = styled('h1')`
    font-size: 24px;
    font-weight: 500;
`
const Styledp = styled('h1')`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 50px;
    width: 683px;
`
const ComplainText = styled('p')`
    color: #fd5200;
    width: 396px;
    margin-top: -21px;
    margin-left: 11px;
`
const WrapperButtons = styled('div')`
    display: flex;
    & button {
        margin-left: 90px;
    }
`
const ToBookUserAvatar = styled(Avatar)`
    height: 20px;
    width: 20px;
`
const StyledToBookUserDiv = styled('div')`
    display: flex;
`
const ComplainUserContainer = styled('div')`
    display: flex;
`
const RouteTitle = styled('p')`
    margin-left: 30px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #b4b4b4;
`
const RouteNameTitle = styled('span')`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
`
