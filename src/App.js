// import Card from './components/users/Card'
// import SingIn from './components/authorization/SignIn'
import MainRouter from './routes/MainRouter'
import AllRoutes from './routes/Routes'

function App() {
    return (
        <div className="App">
            gift list
            <AllRoutes />
            <MainRouter />
            {/* <Card variant="board" /> */}
            {/* <SingIn /> */}
        </div>
    )
}

export default App
