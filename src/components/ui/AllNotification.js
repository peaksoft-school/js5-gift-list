import Notification from './notification/Notification'
import check from '../../assets/images/check.png'
import info from '../../assets/images/info.png'
import warning from '../../assets/images/warning.png'
import error from '../../assets/images/error.png'

const AllNotification = () => {
    return (
        <>
            <Notification
                message="Текст сообщения"
                icon={error}
                title="Error Message"
                className="red"
            />
            <Notification
                message=" Ваши отзывы помогают нам сделать сообщество GIFT LIST безопасной средой для всех."
                icon={check}
                title="Спасибо что сообщили нам об этом"
                className="green"
            />
            <Notification
                message="Текст сообщения"
                icon={info}
                title="Info Message"
                className="blue"
            />
            <Notification
                message="Текст сообщения"
                icon={warning}
                title="Warning Message"
                className="orange"
            />
        </>
    )
}
export default AllNotification
