import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification = (props) => {
    const { status, title, message } = props
    const options = {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
            height: '120px',
            width: '390px',
            display: 'flex',
            justifyContent: 'space-around',
        },
    }
    const content = (
        <>
            <p>{title}</p> <p>{message}</p>
        </>
    )
    if (status === 'success') {
        options.style.backgroundColor = '#C6F0C2'
        options.style.color = '#328048'
        toast.success(content, options)
    } else if (status === 'warning') {
        options.style = { backgroundColor: '#FFF3D8', color: '#ED9E44' }
        toast.warn(content, options)
    } else if (status === 'info') {
        options.style = { backgroundColor: '#EBEFF7', color: '#375BB0' }
        toast.info(content, options)
    } else if (status === 'error') {
        options.style = { backgroundColor: '#FFEBEB', color: '#BC2C2C' }
        toast.error(content, options)
    }

    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            toastStyle={{ height: '200px' }}
            theme="colored"
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}

export default Notification
