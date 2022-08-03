import { styled, Avatar } from '@mui/material'

const FriendsCard = ({
    amountOfWishes,
    img,
    name,
    amountOfHolidays,
    id,
    navigate,
}) => {
    return (
        <StyledContainer id={id} onClick={navigate}>
            <StyledAvatar src={img} alt="photo" />
            <StyledNameOfFriend>{name}</StyledNameOfFriend>
            <StyledDiv>
                <div>
                    <StyledNumberSpan>{amountOfWishes}</StyledNumberSpan>
                    <StyledTitle>Желаний</StyledTitle>
                </div>
                <div>
                    <StyledNumberSpan>{amountOfHolidays}</StyledNumberSpan>
                    <StyledTitle>Праздников</StyledTitle>
                </div>
            </StyledDiv>
        </StyledContainer>
    )
}
export default FriendsCard

const StyledContainer = styled('div')`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 260px;
    height: 256px;
    border: 1px solid #f2f0f0;
    border-radius: 8px;
    margin-bottom: 22px;
    background: linear-gradient(
        to bottom,
        rgba(134, 57, 181, 0.2) 30%,
        white 30% 100%
    );
`
const StyledAvatar = styled(Avatar)`
    width: 130px;
    height: 130px;
    margin-top: 16px;
`
const StyledNameOfFriend = styled('p')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #020202;
    margin-top: 18px;
`
const StyledNumberSpan = styled('span')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #020202;
`
const StyledTitle = styled('p')`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: #606060;
`
const StyledDiv = styled('div')`
    width: 150px;
    display: flex;
    justify-content: space-between;
    text-align: center;
`
