import Notification from './components/ui/notification/Notification'
import { AppRoutes } from './routes/AppRoutes'

function App() {
    return (
        <div className="App">
            <AppRoutes />
            <Notification />
        </div>
    )
}

export default App
