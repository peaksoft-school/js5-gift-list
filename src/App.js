// import MyFriendsPage from './components/users/freindPage/MyFriendsPage'
// import SegmentedPicker from './components/users/freindPage/SegmentedPicker'

// import Friends from './components/users/Friends'
// import Tabs from './components/users/freindPage/Tabs'
// import Header from './layout/Header'
// import PageLayout from './layout/PageLayout'
import MainRouter from './routes/MainRouter'
import AllRoutes from './routes/Routes'

// const data = {
//     friends: [
//         { name: 'Ali', id: '1' },
//         { name: 'Ali', id: '2' },
//         { name: 'Ali', id: '3' },
//         { name: 'Ali', id: '4' },
//     ],
//     requestToFriends: [
//         { name: 'Ali', id: '1' },
//         { name: 'Ali', id: '2' },
//         { name: 'Ali', id: '3' },
//         { name: 'Ali', id: '4' },
//     ],
// }

function App() {
    return (
        <div className="App">
            {/* <Header /> */}
            {/* <PageLayout /> */}
            {/* <SegmentedPicker /> */}
            {/* <MyFriendsPage /> */}
            {/* <Friends /> */}
            {/* <Tabs data={data} /> */}

            <AllRoutes />
            <MainRouter />
        </div>
    )
}

export default App
