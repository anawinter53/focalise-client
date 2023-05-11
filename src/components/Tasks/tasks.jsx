import { useEffect, useState } from 'react'
import { useTheme } from '../../contexts'
import { AddTaskModal, EditTaskModal, CompletedTaskModal } from '../../components'
import { BsCircle, BsRecordCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';
import * as Constant from '../../constants'

export default function TasksPage({tasks, setTasks, setRender}) {
    const { theme } = useTheme()
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [activeTask, setActiveTask] = useState({})
    const [completedTaskModal, setCompletedTaskModal] = useState(false)
    useEffect(() => { document.body.style.backgroundColor = `${theme.primColor}` }, [])

    const selectTask = (task) => {
        setEditModal(true)
        setActiveTask(task)
    }

    const updateStatus = async (e) => {
        e.preventDefault()
        console.log(tasks)
        const task_id = e.target.value
        console.log(task_id)
        let items = tasks
        console.log(items)
        const task = items.find(t => t.task_id = task_id)
        console.log(task)
        const status = task.task_status
        console.log(status)
        let newStatus
        if (status === "Not Started") {
            newStatus = "In Progress"
        } else if (status === "In Progress") {
            newStatus = "Complete"
        }
        const options = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            // body: JSON.stringify({ category_name: task.category_name, task_name: task.task_name, task_url: task.task_url, task_desc: task.task_desc, task_deadline: task.task_deadline, task_status: newStatus})
            body: JSON.stringify({task_status: status})
        }
        const res = await fetch(Constant.MAIN_URl + "tasks/" + task_id, options)
        const data = await res.json()
        console.log(data)
        
        
        // setTasks(... tasks[0].status = "In Progress")
        console.log(items)
        const index = items.findIndex(t => t.task_id == task_id)
        console.log(index)
        items[index].status = newStatus
        console.log(items)
        setTasks(items)
        console.log(tasks)
    }

    const completeTask = (e) => {
        e.preventDefault()
    }

  return (
    <div>
      <section id="select-task-category" style={{height: '100vh'}}>
            <div className="d-flex aligns-items-center justify-content-center position-relative">
                <div className="container text-center pt-3 shadow rounded position-absolute" style={{backgroundColor: theme.secColor, color: theme.primColor,  top: '50%', left: '50%', transform: `translate(-50%,50%)`}}>
                    <button className="btn btn-success position-absolute top-1 start-0" onClick={() => setRender('')}>Back</button>
                    <button className="btn btn-danger position-absolute top-1 end-0" onClick={() => setAddModal(true)}>Add Task</button>
                    <div className="row justify-content-center p-5" style={{}}>  
                        {tasks ? tasks.map((task, i) => (
                            <div key={i} className='row'>
                                <div  className='col-2'>
                                    {<CheckCircle task={task}/>}
                                </div>
                                <div className='col-2'>
                                    <p name={task.task_name} >{task.task_name}</p>
                                </div>
                                <div className='col-2'>
                                    <p name={task.task_desc} >{task.task_desc}</p>
                                </div>
                                <div className='col-2'>
                                    <p>{task.task_url}</p>
                                </div>
                                <div className='col-2'>
                                    <p>Urgent</p>
                                    {/* <p>{<UrgentStatus/>}</p> */}
                                </div>
                                <div className='col-1'>
                                    <p>Date</p>
                                    {/* <p>{<Date/>}</p> */}
                                </div>
                                <div className='col-1'>
                                    <button className="btn btn-danger position-absolute" onClick={() => selectTask(task)}>Edit Task</button>
                                    {/* { task.task_status == "Not Started" ? <button id="start-btn" className='btn btn-primary' value={task.task_id} onClick={updateStatus}>Mark as started</button> : <button id="complete-btn" className='btn btn-primary' value={task.task_id} onClick={updateStatus}>Mark as complete</button>} */}
                                    {(() => {
                                        if (task.task_status == "Not Started") {
                                            return <button id="start-btn" className='btn btn-primary' value={task.task_id} onClick={updateStatus}>Mark as started</button>
                                        } else if (task.task_status == "In Progress") {
                                            return <button id="complete-btn" className='btn btn-primary' value={task.task_id} onClick={updateStatus}>Mark as complete</button>
                                        }
                                    })()}
                                </div>
                            </div>
                        )) : undefined }   
                    </div>
                </div>            
            </div>
        </section>
        { addModal ? <AddTaskModal open={addModal} setAddModal={setAddModal}/> : undefined }
        { editModal ? <EditTaskModal open={editModal} setEditModal={setEditModal} setCompletedTaskModal={setCompletedTaskModal} activeTask={activeTask} /> : undefined }
        { completedTaskModal ? <CompletedTaskModal open={completedTaskModal} setCompletedTaskModal={setCompletedTaskModal}/> : undefined }
        
    </div>
  )
}


function CheckCircle({task}) {
    const [activeComponent, setActiveComponent] = useState(undefined)

    useEffect(() => {
        switch (task.task_status) {
            case 'Not Started':
                setActiveComponent(<BsCircle />)
                break;
            case 'In Progress':
                setActiveComponent(<BsRecordCircleFill />)
                break;
            default:
                setActiveComponent(<BsFillCheckCircleFill />)
                break;
        }
    }, [task])

    return (
        <div>
            {activeComponent}
        </div>
    )
}

function UrgentStatus({task}) {
    const [activeComponent, setActiveComponent] = useState('')
    useEffect(() => {

        // if date is within 3 days -> urgent, 3-7 days -> important, 7+ days -> not important
        switch (task.task_deadline) {
            case 'Not Started':
                setActiveComponent('Urgent')
                break;
            case 'Started':
                setActiveComponent('Important')
                break;
            default:
                setActiveComponent('Not Important')
                break;
        }
    }, [task])

    return (
        <div>
            {activeComponent}
        </div>
    )
}

/* 
function Date({task}) {
    const [activeComponent, setActiveComponent] = useState('')
    useEffect(() => {

        // change date format to 'by DD/MM'
        
    }, [task])

    return (
        <div>
            {activeComponent}
        </div>
    )
}
*/
