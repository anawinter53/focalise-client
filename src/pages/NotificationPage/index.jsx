import addNotification from 'react-push-notification'
import { Notifications} from 'react-push-notification'
import { useEffect, useState } from 'react'
import './NotificationPage.css'

function NotificationPage() {

    const [notifyTime, setNotifyTime] = useState(null)
    const [countDown, setCountDown] = useState(null)
    const [breakCountDown, setBreakCountDown] = useState(null)

    function buttonOnClick() {
        setCountDown(10)

    }

    useEffect(() => {
        let interval
        if (countDown > 0) {
            interval = setInterval(() => {
                setCountDown(countDown - 1)
            }, 1000)
        }
        if (countDown === 0) {
            sendWorkFinishedNotification()
            setCountDown(null)
        }
    
        return () => {
          clearInterval(interval);
        };
      }, [countDown]);

    const sendWorkFinishedNotification = () => {
        addNotification({
            title: 'Time\s Up!',
            message: 'Congratulations on finishing your session',
            native: true
        })
    }

    const sendStartBreakNotification = () => {
        addNotification({
            title: 'Break Time!',
            message: 'Time to have a break. Why not check out our sensory room?',
            native: true
        })
    }

    const sendBreakFinishedNotification = () => {
        addNotification({
            title: 'Break\'s Over!',
            message: 'It\'s time to get back to work',
            native: true
        })
    }


    return <div className='notification'>
        <h1>Workplans page</h1>
        <button onClick={buttonOnClick}>
            10 second timer
        </button>
        <p>Countdown: {countDown}</p>
        <div>
            {countDown ? <h2>Time Remaining: {Math.floor(countDown / 3600)} : {Math.floor((countDown % 3600)/60)} : {countDown % 60}</h2> : ""}
        </div>

        <div className='work-plans'>
            <div className='get-started'>
                <h2>Get started on a task</h2>
                <p>Getting started is one of the hardest things. Set a timer for just to ten minutes and get one going.</p>
                <button onClick={() => setCountDown(300)}>Start</button>
            </div>
            <div className='work-session'>
                <h2>Session of work</h2>
                <p>Set a timer for an hour, with regular breaks in the middle.</p>
            </div>
            <div className="deadline">
                <h2>Working to a deadline</h2>
                <p>Set a time to finish a task by.</p>
            </div>
        </div>
    </div>
}

export default NotificationPage