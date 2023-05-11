import addNotification from 'react-push-notification'
import { Notifications} from 'react-push-notification'
import { useEffect, useState } from 'react'
import { CategoryChoice, TaskChoice } from '../../components'
import * as Constant from '../../constants'

import { useTheme } from '../../contexts/themes'
import 'animate.css';

function NotificationPage() {
    const { theme } = useTheme();
    
    const [countDown, setCountDown] = useState(null)
    const [breakCountDown, setBreakCountDown] = useState(null)
    const [breakTimer, setBreakTimer] = useState(null)
    const [deadline, setDeadline] = useState("00:00")
    const [time, setTime] = useState("00:00")
    const [tasks, setTasks] = useState([])
    const [taskId, setTaskId] = useState()
    const [categories, setCategories] = useState('')
    const [render, setRender] = useState('')
    const [id, setId] = useState()
    const [workPlan, setWorkPlan] = useState('')

    useEffect( () => {
        const getId = () => {
            const user_id = localStorage.getItem("id");
            user_id ? setId(user_id) : undefined
        }
        getId()
      }, []);

    useEffect(() => {
        const getCategories = async (id) => {
            const res = await fetch(Constant.MAIN_URl + "tasks/user/" + id + "/categories");
            const category_data = await res.json();
            setCategories(category_data)
        }
        if (id) {
            getCategories(id)
        }
      }, [id]);

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
            if (taskId) {
                updateTask()
            }
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
        setWorkPlan('starting')
    }

    const handleSessionSubmit = () => {
        setCountDown(3600)
        setBreakCountDown(1200)
        setWorkPlan('session')
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
            setWorkPlan('deadline')
            if (seconds > 2400) {
                setBreakCountDown(1200)
            }
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


    const handleTasks = (category) => {
        getTasks(category)
        setRender("tasks")
    }

    const getTasks = async (category) => {
        const res = await fetch(Constant.MAIN_URl + "tasks/user/" + id + "/" + category);
        // const res = await fetch(Constant.MAIN_URl + "tasks/user/" + id + "/status/Not Started")
        const data = await res.json();
        setTasks(data)
    }


    const RenderPopup = () => {
        if (render === 'categories') {
            return <CategoryChoice handleTasks={handleTasks} categories={categories}/>
        } else if (render === 'tasks') {
            return <TaskChoice tasks={tasks} setRender={setRender} setTaskId={setTaskId} />
        }
    }

    const updateTask = async () => {
        const task = taskId
        const options = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ category_name: task.category_name, task_name: task.task_name, task_url: task.task_url, task_desc: task.task_desc, task_deadline: task.task_deadline, task_status: "In Progress"})
        }
        const res = await fetch(Constant.MAIN_URl + "tasks/" + taskId, options)
        const data = await res.json()
        console.log(data)
    }




    return (
    <div>
        <section id="workpage" style={{height: '100vh'}}>
            <div className="d-flex aligns-items-center justify-content-center position-relative" >
                <div className="container text-center pt-3 shadow rounded position-absolute" style={{backgroundColor: theme.secColor, color: theme.primColor,  top: '50%', transform: `translate(0%,40%)`}}>
                    <div className='notification' style={{}}>
                        <div style={{textAlign: "center", padding: "20 0", margin: "30px"}}>
                            <h1 >Workplans page</h1><br></br>
                            <h2>Select a plan for a work session, and receive notifications to keep you on track</h2>
                        </div>
                        <div className='d-flex timers' style={{justifyContent: "space-evenly", margin: "30px"}}>
                            <div >
                                {countDown ? <h4>Time Remaining: {Math.floor(countDown / 3600)} : {Math.floor((countDown % 3600)/60)} : {countDown % 60}</h4> : ""}
                            </div>
                            <div >
                                {breakCountDown ? <h4>Time until next break: {Math.floor(breakCountDown/60)} : {breakCountDown % 60}</h4> : ""}
                            </div>
                            <div>
                                {breakTimer ? <h4>Time left of break: {Math.floor(breakTimer/60)} : {breakTimer % 60}</h4> : ""}
                            </div>
                        </div>
                        <div className='work-plans center d-flex justify-content-center'>
                            <div className="container pt-3 shadow rounded position-relative get-started" style={{maxWidth: "25%", textAlign: "center"}}>
                                <h2>Get started on a task</h2>
                                <p>Getting started is one of the hardest things. Set a timer for just to ten minutes and get one going.</p>
                                
                                <button onClick={handleStartingSubmit} className='btn w-50' style={{backgroundColor: theme.primColor, color: theme.primText}}>Start</button>
                            </div>
                            <div className="container text-center pt-3 shadow rounded position-relative work-session" style={{ maxWidth: "25%", textAlign: "center"}}>
                                <h2>Session of work</h2>
                                <p>Set a timer for an hour, with regular breaks in the middle.</p>
                                <button onClick={handleSessionSubmit} className='btn w-50' style={{backgroundColor: theme.primColor, color: theme.primText}}>Start</button>
                            </div>
                            <div className="container text-center pt-3 shadow rounded position-relative deadline" style={{maxWidth: "25%", textAlign: "center"}}>
                                <h2>Work to a deadline</h2>
                                <p>Got a deadline to work to? Start a count down, and get reminders to take breaks along the way</p>
                                <form onSubmit={handleDeadlineSubmit}>
                                    <label htmlFor='deadline'>Set end time: </label>
                                    <input type='time' id='deadline' onChange={(e) => setDeadline(e.target.value)} style={{margin: "5px", padding: "0 3px"}}/>
                                    {(deadline < time && deadline != "00:00") ? <p>Please enter a time later than the current</p> : ""}
                                    <button type='submit' className='btn w-50' style={{backgroundColor: theme.primColor, color: theme.primText}}>Start</button>
                                </form>
                            </div>
                        </div>
                        <button onClick={() => setRender('categories')} className='btn w-50' style={{ backgroundColor: theme.primColor, color: theme.primText, margin: "30px"}}>Choose a task to work on</button>
                        <RenderPopup />
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default NotificationPage
