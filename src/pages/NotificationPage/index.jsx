import addNotification from 'react-push-notification'
import { Notifications} from 'react-push-notification'
import { useEffect, useState } from 'react'

function NotificationPage() {

    const [notifyTime, setNotifyTime] = useState(null)
    const [countDown, setCountDown] = useState(null)

    function buttonOnClick() {
        // setTimeout(() => {
        //     setNotifyTime(true)
        //     }, 10000
        // )
        // clearTimeout()
        // const time = Date.now()
        // setNotifyTime(time + 10000)
        setCountDown(10)

    }

    const startCountDown = () => {
        
    }

    useEffect(() => {
        if (countDown >= 0) {
            const interval = setInterval(() => {
                console.log(countDown)
                setCountDown(countDown - 1)
                if (countDown === 0) {
                    // sendNotification()
                    // setCountDown(null)
                    clearInterval(interval)
                    setCountDown(null)
                }
            
            }, 1000)
        }


        console.log('outside interval')
    
        // return () => {
        //   clearInterval(interval);
        // };
      }, [countDown]);

    

    // useEffect(() => {
    //     let time = Date.now()
    //     console.log(notifyTime)
    //     console.log(time)
    //     setInterval(() => {
    //         if (time >= notifyTime) {
    //             // sendNotification()
    //         setNotifyTime(null)
    //         }
    //     }, 1000)

    // })

    const sendNotification = () => {
        addNotification({
            title: 'Break over',
            message: 'Time to get back to work',
            native: true
        })
    }


    return <div className='notification'>
        {/* <Notifications /> */}
        <h1>Notifications page</h1>
        <button onClick={buttonOnClick}>
            10 second timer
        </button>
        <p>Countdown: {countDown}</p>
    </div>
}

export default NotificationPage