import { useEffect } from 'react'
import { useTheme } from '../../contexts'

export default function TaskChoice({tasks, setRender, setTaskId}) {
    const { theme } = useTheme()
    useEffect(() => { document.body.style.backgroundColor = `${theme.primColor}` }, )

    const handleTask = (e) => {
        e.preventDefault()
        setTaskId(e.target.parentNode.id)
        setRender('')
    }

  return (
    <div>
      <section id="select-task-category" style={{height: '100vh'}}>
            <div className="d-flex aligns-items-center justify-content-center position-relative">
                <div className="container text-center pt-3 shadow rounded position-absolute" style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`,  top: '50%', left: '50%', transform: `translate(-50%,50%)`}}>
                    <button className="btn btn-success position-absolute top-0 start-0" onClick={() => setRender('categories')}>Back</button>
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