import { useEffect } from 'react'
import { useTheme } from '../../contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { AddTaskModal } from '../../components'

export default function TasksPage({tasks, setRender}) {
    const { theme } = useTheme()
    useEffect(() => { document.body.style.backgroundColor = `${theme.primColor}` }, )

  return (
    <div>
      <section id="select-task-category" style={{height: '100vh'}}>
            <div className="d-flex aligns-items-center justify-content-center position-relative">
                <div className="container text-center pt-3 shadow rounded position-absolute" style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`,  top: '50%', left: '50%', transform: `translate(-50%,50%)`}}>
                    <button className="btn btn-success position-absolute top-0 start-0" onClick={() => setRender('')}>Back</button>
                    <button open={showModal} className="btn btn-danger position-absolute top-0 end-0" onClick={AddTaskModal}>Add Task</button>
                    <div className="row justify-content-center p-5" style={{}}>  
                        {tasks ? tasks.map((task, i) => (
                            <div key={i} className='d-flex justify-content-between'>
                            {console.log(task.task_name)}
                            <FontAwesomeIcon icon={faCircle} />
                            <p name={task.task_name} >{task.task_name}</p>
                            <p name={task.task_desc} >{task.task_desc}</p>
                            <p>Url here</p>
                            <p>Urgent</p>
                            <p>by 23/4</p>
                            </div>
                        )) : undefined
                        }   
                    </div>
                </div>            
            </div>
            </section>
    </div>
  )
}
