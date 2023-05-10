import { useEffect, useState } from 'react'
import { useTheme } from '../../contexts'
import { AddTaskModal } from '../../components'
import { BsCircle, BsRecordCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';

export default function TasksPage({tasks, setRender}) {
    const { theme } = useTheme()
    useEffect(() => { document.body.style.backgroundColor = `${theme.primColor}` }, )



  return (
    <div>
      <section id="select-task-category" style={{height: '100vh'}}>
            <div className="d-flex aligns-items-center justify-content-center position-relative">
                <div className="container text-center pt-3 shadow rounded position-absolute" style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`,  top: '50%', left: '50%', transform: `translate(-50%,50%)`}}>
                    <button className="btn btn-success position-absolute top-0 start-0" onClick={() => setRender('')}>Back</button>
                    <button className="btn btn-danger position-absolute top-0 end-0" onClick={AddTaskModal}>Add Task</button>
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
                                    <p>Url here</p>
                                </div>
                                <div className='col-2'>
                                    <p>Urgent</p>
                                </div>
                                <div className='col-2'>
                                    <p>by 23/4</p>
                                </div>
                            </div>
                        )) : undefined }   
                    </div>
                </div>            
            </div>
            </section>
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
