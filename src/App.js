// import Card from './components/users/Card'
import MainRouter from './routes/MainRouter'
import AllRoutes from './routes/Routes'

function App() {
    return (
        <div className="App">
            gift list
            <AllRoutes />
            <MainRouter />
            {/* <Card variant="board" /> */}
        </div>
    )
}

export default App
