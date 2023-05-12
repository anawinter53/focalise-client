import { useEffect } from 'react'
import { useTheme } from '../../contexts'

export default function TaskChoice({tasks, setRender, setTaskId}) {
    const { theme } = useTheme()

    const handleTask = (e) => {
        e.preventDefault()
        const task_id = e.target.parentNode.id
        const task = tasks.find(t => t.id = task_id)
        setTaskId(task)
        setRender('')
    }

  return (
    <div>
      <section id="select-task-category">
            <div className="d-flex aligns-items-center justify-content-center">
                <div className="container text-center pt-3 shadow rounded mb-3" style={{backgroundColor: `${theme.primColor}`, color: `${theme.primText}`}}>
                    <button className="btn top-0 start-0" onClick={() => setRender('categories')} style={{backgroundColor: `${theme.secColor}`, color: `${theme.secText}`}}>Back</button>
                    <div className="row justify-content-center p-5" style={{}} >  
                        {tasks ? tasks.map((t, i) => (
                            <div key={i} id={t.task_id} onClick={handleTask} >
                                <h3 id={t.task_name} >{t.task_name}</h3><p id={t.task_desc} >{t.task_desc}</p>
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