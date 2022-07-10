import styled from 'styled-components'
import close from '../../../assets/images/close.png'

const Notification = (props) => {
    const { className, icon, title, message } = props
    return (
        <Cart className={className}>
            <Notificate>
                <Div>
                    <Img src={icon} alt="icon of status" />
                    <Span>{title}</Span>
                </Div>
                <Close src={close} />
            </Notificate>
            <MessageDiv>
                <Message>{message}</Message>
            </MessageDiv>
        </Cart>
    )
}

export default Notification
const Cart = styled.div`
    width: 500px;
    height: 93px;
    border-radius: 8px;
    gap: 16px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    margin: 30px 30px;
    padding: 15px;
    & .red :hover {
        background-color: black;
    }
    &.red {
        background-color: #ffebeb;
        border: 1px solid #bc2c2c;
    }
    &.green {
        background-color: #eafbe7;
        border: 1px solid #c6f0c2;
    }
    &.blue {
        background-color: #ebeff7;
        border: 1px solid #375bb0;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
    }
    &.orange {
        background-color: #fff3d8;
        border: 1px solid #ed9e44;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
    }
    & span {
        font-family: system-ui;
    }
`

const Div = styled.div`
    display: flex;
    justify-content: left;
    width: 60%;
`

const Notificate = styled('div')`
    display: flex;
    justify-content: space-between;
    padding: 0px;
`

const Span = styled.span`
    font-size: 14px;
    margin-left: 10px;
`

const Close = styled.img`
    width: 12px;
    height: 12px;
    border: 1px;
`

const Img = styled.img`
    width: 20px;
    height: auto;
`

const Message = styled.span`
    padding: 5px;
    'font-size':75% ;
`

const MessageDiv = styled.div`
    width: 80%;
    margin: 0;
    'text-align':left ;
`
