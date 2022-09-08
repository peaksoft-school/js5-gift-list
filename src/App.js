import Notification from './components/ui/notification/Notification'
import { AppRoutes } from './routes/AppRoutes'

// import PageLayout from './layout/PageLayout'

function App() {
    return (
        <div className="App">
            <Notification />
            <AppRoutes />
            {/* <PageLayout /> */}
        </div>
    )
}

export default App
