import addNotification from 'react-push-notification'
import { Notifications} from 'react-push-notification'
import { useEffect, useState } from 'react'
import './NotificationPage.css'

function NotificationPage() {

    const [notifyTime, setNotifyTime] = useState(null)
    const [countDown, setCountDown] = useState(null)
    const [breakCountDown, setBreakCountDown] = useState(null)
    const [breakTimer, setBreakTimer] = useState(null)
    const [deadline, setDeadline] = useState("00:00")
    const [time, setTime] = useState("00:00")

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

    useEffect(() => {
        let interval
        if (!countDown) {
            setBreakCountDown(null)
        }
        if (breakCountDown > 0) {
            interval = setInterval(() => {
                setBreakCountDown(breakCountDown - 1)
            }, 1000)
        }
        if (breakCountDown === 0) {
            sendStartBreakNotification()
            setBreakCountDown(null)
            setBreakTimer(300)
        }
    
        return () => {
          clearInterval(interval);
        };
      }, [breakCountDown]);

    const sendStartBreakNotification = () => {
        addNotification({
            title: 'Break Time!',
            message: 'Time to have a break. Why not check out our sensory room?',
            native: true
        })
    }

    useEffect(() => {
        let interval

        if (!countDown) {
            setBreakTimer(null)
        }

        if (breakTimer > 0) {
            interval = setInterval(() => {
                setBreakTimer(breakTimer - 1)
            }, 1000)
        }
        if (breakTimer === 0) {
            sendBreakFinishedNotification()
            setBreakTimer(null)
            setBreakCountDown(1200)
        }
    
        return () => {
          clearInterval(interval);
        };
      }, [breakTimer]);


    const sendBreakFinishedNotification = () => {
        addNotification({
            title: 'Break\'s Over!',
            message: 'It\'s time to get back to work',
            native: true
        })
    }

    const handleStartingSubmit = () => {
        setCountDown(600)
    }

    const handleSessionSubmit = () => {
        setCountDown(3600)
        setBreakCountDown(1200)
    }

    const handleDeadlineSubmit = (e) => {
        e.preventDefault()
        let start_time = new Date()
        let end_time = new Date()
        let end_values = deadline.split(":")
        end_time.setHours(end_values[0], end_values[1])
        const seconds = (end_time - start_time) / 1000
        if (seconds > 0) {
            setCountDown(seconds)
            setBreakCountDown(1200)
        }
        
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            let hours = date.getHours().toString()
            let minutes = date.getMinutes().toString()
            if (parseInt(hours) < 10) {
                hours = '0' + hours
            }
            if (parseInt(minutes) < 10) {
                minutes = '0' + minutes
            }            
            setTime(hours + ":" + minutes)

        }, 6000)
        return () => {
          clearInterval(interval);
        };
        
      }, [time]);


    return <div className='notification'>
        <h1>Workplans page</h1>
        <button onClick={() => setCountDown(10)}>10 Second countdown</button>
        <div>
            {countDown ? <h2>Time Remaining: {Math.floor(countDown / 3600)} : {Math.floor((countDown % 3600)/60)} : {countDown % 60}</h2> : ""}
        </div>
        <div>
            {breakCountDown ? <h2>Time until next break: {Math.floor(breakCountDown/60)} : {breakCountDown % 60}</h2> : ""}
        </div>
        <div>
            {breakTimer ? <h2>Time left of break: {Math.floor(breakTimer/60)} : {breakTimer % 60}</h2> : ""}
        </div>

        <div className='work-plans'>
            <div className='get-started'>
                <h2>Get started on a task</h2>
                <p>Getting started is one of the hardest things. Set a timer for just to ten minutes and get one going.</p>
                <button onClick={handleStartingSubmit}>Start</button>
            </div>
            <div className='work-session'>
                <h2>Session of work</h2>
                <p>Set a timer for an hour, with regular breaks in the middle.</p>
                <button onClick={handleSessionSubmit}>Start</button>
            </div>
            <div className="deadline">
                <h2>Work to a deadline</h2>
                <p>Set a time to finish a task by.</p>
                <form onSubmit={handleDeadlineSubmit}>
                    <label htmlFor='deadline'>Set end time:</label>
                    <input type='time' id='deadline' onChange={(e) => setDeadline(e.target.value)}/>
                    {(deadline < time) ? <p>Please enter a time later than the current</p> : ""}
                    <button type='submit'>Start</button>
                </form>
            </div>
        </div>
    </div>
}

export default NotificationPage