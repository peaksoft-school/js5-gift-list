import MainRouter from './routes/MainRouter'
import AllRoutes from './routes/Routes'
import { URL_BASE } from './utils/constants/Url'

function App() {
    fetch(`${URL_BASE}api/holiday`)
        .then((res) => res.json())
        .then((data) => console.log(data))
    return (
        <div style={{ background: '#F7F8FA' }}>
            <MainRouter />
            <AllRoutes />
        </div>
    )
}

export default App
