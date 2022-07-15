import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification = (props) => {
    const { status, options } = props
    if (status === 'success') {
        options.style = { backgroundColor: '#C6F0C2', color: '#328048' }
    } else if (status === 'warning') {
        options.style = { backgroundColor: '#FFF3D8', color: '#ED9E44' }
    } else if (status === 'info') {
        options.style = { backgroundColor: '#EBEFF7', color: '#375BB0' }
    } else if (status === 'error') {
        options.style = { backgroundColor: '#FFEBEB', color: '#BC2C2C' }
    }

    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            theme="colored"
            pauseOnFocusLoss
            draggable
            pauseOnHover
            options={options}
        />
    )
}

export default Notification
