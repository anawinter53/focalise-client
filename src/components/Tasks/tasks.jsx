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
        setAddModal(false)
        setActiveTask(task)
    }

    const openAddModal = () => {
        setAddModal(true)
        setEditModal(false)
    }

    const updateStatus = async (e) => {
        e.preventDefault()
        const task_id = e.target.value
        let items = tasks
        const task = items.find(t => t.task_id == task_id)
        const status = task.task_status
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
            body: JSON.stringify({task_status: newStatus})
        }
        const res = await fetch(Constant.MAIN_URl + "tasks/" + task_id + "/status", options)
        const data = await res.json()
        console.log(data)
        
        const index = items.findIndex(t => t.task_id == task_id)
        items[index].task_status = newStatus
        setTasks(items)
    }

    const convertDate = (date) => {
        let deadline = new Date(date)
        console.log(deadline)
        deadline = deadline.toISOString().split('T')[0]
        console.log(deadline)
        return deadline
    }

    return (
        <div>
          <section id="select-task-category" style={{ height: '100vh' }}>
            <div className="d-flex aligns-items-center justify-content-center position-relative">
              <div className="container text-center pt-3 shadow rounded position-absolute" style={{ backgroundColor: theme.secColor, color: theme.primColor, top: '50%', left: '50%', transform: `translate(-50%,50%)` }}>
                <button className="btn position-absolute top-1 start-0 ms-3" onClick={() => setRender('')} style={{ backgroundColor: theme.primColor, color: theme.secColor }}>Back</button>
                <button className="btn btn-primary position-absolute top-1 end-0 me-3" onClick={openAddModal}>Add Task</button>
                <div className="row justify-content-center p-5">
                  <table className="table" style={{color: theme.primColor }}>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Task Name</th>
                        <th>Task Description</th>
                        <th>Task URL</th>
                        {/* <th>Urgent</th> */}
                        <th>Date</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasks ? tasks.map((task, i) => (
                        <tr key={i}>
                          <td>
                            {<CheckCircle task={task} />}
                          </td>
                          <td>
                            <p name={task.task_name}>{task.task_name}</p>
                          </td>
                          <td>
                            <p name={task.task_desc}>{task.task_desc}</p>
                          </td>
                          <td>
                            <p>{task.task_url}</p>
                          </td>
                          {/* <td>
                            <p>Urgent</p>
                            {<p>{<UrgentStatus/>}</p>}
                          </td> */}
                          <td>
                            {(() => {
                                let date = new Date(task.task_deadline)
                                date = date.toISOString().split('T')[0]
                                return <p>{date}</p>
                            })()}
                          </td>
                          <td className='d-flex'>
                            <button className="btn btn-outline-danger m-1 " onClick={() => selectTask(task)}>Edit Task</button>
                            {(() => {
                              if (task.task_status == "Not Started") {
                                return <button id="start-btn" className='btn btn-outline-success' value={task.task_id} onClick={updateStatus}>Mark as started</button>
                              } else if (task.task_status == "In Progress") {
                                return <button id="complete-btn" className='btn btn-outline-success' value={task.task_id} onClick={updateStatus}>Mark as complete</button>
                              }
                            })()}
                          </td>
                        </tr>
                      )) : undefined}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {addModal ? <AddTaskModal open={addModal} setAddModal={setAddModal} /> : undefined}
          {editModal ? <EditTaskModal open={editModal} setEditModal={setEditModal} setCompletedTaskModal={setCompletedTaskModal} activeTask={activeTask} /> : undefined}
          {completedTaskModal ? <CompletedTaskModal open={completedTaskModal} setCompletedTaskModal={setCompletedTaskModal} /> : undefined}
      
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
