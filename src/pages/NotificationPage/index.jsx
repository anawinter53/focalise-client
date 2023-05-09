import addNotification from 'react-push-notification'
import { Notifications} from 'react-push-notification'

function NotificationPage() {
    function buttonOnClick() {
        setTimeout(() => {
            addNotification({
                title: 'Break over',
                message: 'Time to get back to work',
                native: true
            })}, 10000
        )
        clearTimeout()

    }

    return <div className='notification'>
        <Notifications />
        <h1>Notifications page</h1>
        <button onClick={buttonOnClick}>
            10 second timer
        </button>
    </div>
}

export default NotificationPage