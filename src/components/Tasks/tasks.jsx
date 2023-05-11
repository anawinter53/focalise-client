import { useEffect, useState } from 'react'
import { useTheme } from '../../contexts'
import { AddTaskModal, EditTaskModal, CompletedTaskModal } from '../../components'
import { BsCircle, BsRecordCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';

export default function TasksPage({tasks, setRender}) {
    const { theme } = useTheme()
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [completedTaskModal, setCompletedTaskModal] = useState(false)
  return (
    <div>
      <section id="select-task-category" style={{height: '100vh'}}>
            <div className="d-flex aligns-items-center justify-content-center position-relative">
                <div className="container text-center pt-3 shadow rounded position-absolute" style={{backgroundColor: theme.secColor, color: theme.primColor,  top: '50%', left: '50%', transform: `translate(-50%,50%)`}}>
                    <button className="btn btn-success position-absolute top-0 start-0" onClick={() => setRender('')}>Back</button>
                    <button className="btn btn-danger position-absolute top-0 end-50" onClick={() => setAddModal(true)}>Add Task</button>
                    <button className="btn btn-danger position-absolute top-0 end-0" onClick={() => setEditModal(true)}>Edit Task</button>
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
                                <div className='col-2'>
                                    <p>Date</p>
                                    {/* <p>{<Date/>}</p> */}
                                </div>
                            </div>
                        )) : undefined }   
                    </div>
                </div>            
            </div>
        </section>
        { addModal ? <AddTaskModal open={addModal} setAddModal={setAddModal}/> : undefined }
        { editModal ? <EditTaskModal open={editModal} setEditModal={setEditModal} setCompletedTaskModal={setCompletedTaskModal}/> : undefined }
        { completedTaskModal ? <CompletedTaskModal open={completedTaskModal} setCompletedTaskModal={setCompletedTaskModal}/> : undefined }
    </div>
  )
}


function CheckCircle({task}) {
    const [activeComponent, setActiveComponent] = useState(undefined)
    console.log(task)


    useEffect(() => {
        switch (task.task_status) {
            case 'Not Started':
                setActiveComponent(<BsCircle />)
                break;
            case 'Started':
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
