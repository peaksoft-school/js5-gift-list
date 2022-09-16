import { useEffect } from 'react'

import AOS from 'aos'

import { AppRoutes } from './routes/AppRoutes'

// import PageLayout from './layout/PageLayout'

function App() {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return (
        <div className="App">
            <AppRoutes />
            {/* <PageLayout /> */}
        </div>
    )
}

export default App
