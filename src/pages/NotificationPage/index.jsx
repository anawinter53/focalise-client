import addNotification from 'react-push-notification'
import { Notifications } from 'react-push-notification'
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

    useEffect(() => {
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
            return <CategoryChoice handleTasks={handleTasks} categories={categories} />
        } else if (render === 'tasks') {
            return <TaskChoice tasks={tasks} setRender={setRender} setTaskId={setTaskId} />
        }
    }

    const updateTask = async () => {
        const task = taskId
        const options = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ category_name: task.category_name, task_name: task.task_name, task_url: task.task_url, task_desc: task.task_desc, task_deadline: task.task_deadline, task_status: "In Progress" })
        }
        const res = await fetch(Constant.MAIN_URl + "tasks/" + taskId, options)
        const data = await res.json()
        console.log(data)
    }




    return (
            <section id="workpage" className='my-3'>
                <div>
                    <div className="container pt-3 shadow rounded" style={{ backgroundColor: theme.secColor, color: theme.primColor}}>
                        <div className='notification text-center' style={{}}>
                            <div className='text-center'>
                                <h3>Workplans page</h3><br></br>
                                <p>Select a plan for a work session, and receive notifications to keep you on track</p>
                            </div>
                            <div className='d-flex timers' style={{ justifyContent: "space-evenly", margin: "30px" }}>
                                <div >
                                    {countDown ? <h4>Time Remaining: {Math.floor(countDown / 3600)} : {Math.floor((countDown % 3600) / 60)} : {countDown % 60}</h4> : ""}
                                </div>
                                <div >
                                    {breakCountDown ? <h4>Time until next break: {Math.floor(breakCountDown / 60)} : {breakCountDown % 60}</h4> : ""}
                                </div>
                                <div>
                                    {breakTimer ? <h4>Time left of break: {Math.floor(breakTimer / 60)} : {breakTimer % 60}</h4> : ""}
                                </div>
                            </div>
                            <div className='work-plans d-flex'>
                                <div className="card get-started m-2" style={{ backgroundColor: theme.primColor, color: theme.primText }}>
                                    <div className='card-body'>
                                        <h5 className='card-title'>Get started on a task</h5>
                                        <p className='card-text'>Getting started is one of the hardest things. Set a timer for just to ten minutes and get one going.</p>

                                        <button onClick={handleStartingSubmit} className='btn' style={{ backgroundColor: theme.secColor, color: theme.secText }}>Start</button>
                                    </div>
                                </div>
                                <div className="card work-session m-2" style={{ backgroundColor: theme.primColor, color: theme.primText }}>
                                    <div className='card-body'>
                                        <h5 className='card-title'>Session of work</h5>
                                        <p>Set a timer for an hour, with regular breaks in the middle.</p>
                                        <button onClick={handleSessionSubmit} className='btn' style={{ backgroundColor: theme.secColor, color: theme.secText }}>Start</button>
                                    </div>
                                </div>
                                <div className="card deadline m-2" style={{ backgroundColor: theme.primColor, color: theme.primText }}>
                                    <div className='card-body'>
                                        <h5 className='card-title'>Work to a deadline</h5>
                                        <p className='card-text'>Got a deadline to work to? Start a count down, and get reminders to take breaks along the way</p>
                                        <form onSubmit={handleDeadlineSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor='deadline' className='form-label'>Set end time: </label>
                                            <input className='form-control' type='time' id='deadline' onChange={(e) => setDeadline(e.target.value)} />
                                            {(deadline < time && deadline != "00:00") ? <p>Please enter a time later than the current</p> : ""}
                                            </div>
                                            <button type='submit' className='btn' style={{ backgroundColor: theme.secColor, color: theme.secText }}>Start</button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                            { taskId ? <h3>Working on: {taskId.task_name}</h3> : ""}
                            <button onClick={() => setRender('categories')} className='btn' style={{ backgroundColor: theme.primColor, color: theme.primText, margin: "30px" }}>Choose a task to work on</button>
                            <RenderPopup />
                        </div>
                        <button onClick={() => setRender('categories')} className='btn w-50' style={{ backgroundColor: theme.primColor, color: theme.primText, margin: "30px"}}>Choose a task to work on</button>
                        <RenderPopup />
                    </div>
                </div>
            </section>
    )
}

export default NotificationPage
