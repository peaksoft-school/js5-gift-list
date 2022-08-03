// import SingIn from './components/authorization/SignIn'

import MainRouter from './routes/MainRouter'
import AllRoutes from './routes/Routes'

function App() {
    return (
        <div className="App">
            <AllRoutes />
            <MainRouter />
            {/* <SingIn /> */}
        </div>
    )
}

export default App
