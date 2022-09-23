// import { useState } from 'react'

// import { NotificationDetail } from './NotificationDetail'
import NotificationMenu from './NotificationMenu'

const Notification = ({ open, anchorEl, handleClose, menuItems }) => {
    //  const [toggleNotif, setToggleNotif] = useState(false)
    //  const [item, setItem] = useState(null)

    //  const openNotifHandle = (id) => {
    //      setToggleNotif(true)
    //      const NewItem = menuItems.find((elem) => elem.id === id)
    //      setItem(NewItem)
    //  }

    //  const closeNotifHandle = () => {
    //      setToggleNotif(false)
    //  }

    return (
        <div>
            {/* {toggleNotif ? (
                <NotificationDetail
                    onClick={closeNotifHandle}
                    item={item}
                    anchorEl={anchorEl}
                />
            ) : ( */}
            <NotificationMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                //  onClick={openNotifHandle}
                menuItems={menuItems}
            />
        </div>
    )
}

export default Notification
