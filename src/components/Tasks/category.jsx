import { useEffect } from 'react'
import { useTheme } from '../../contexts'

export default function CategoryPage({handleTasks}) {
    const { theme } = useTheme()
    function tasksHandler(e){
        e.preventDefault()
        handleTasks(e.target.name)
    }
    useEffect(() => { document.body.style.backgroundColor = `${theme.primColor}` }, )

  return (
    <div>
      <section id="select-task-category" style={{height: '100vh'}}>
            <div className="d-flex aligns-items-center justify-content-center position-relative">
                <div className="container text-center pt-3 shadow rounded position-absolute" style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`,  top: '50%', left: '50%', transform: `translate(-50%,50%)`}}>
                    <h1>Ready to get started on some tasks?</h1><br/><h2>Here are your categories:</h2>
                    <div className="row justify-content-center p-5" style={{}}> 
                        <div className="col-3 m-1" >
                            <button onClick={tasksHandler} name='Python' className='btn w-50' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>Python</button>
                        </div>
                        <div className="col-3 m-1">
                            <button onClick={tasksHandler} name='Django' className='btn w-50' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>Django</button>
                        </div>
                        <div className="col-3 m-1">
                            <button onClick={tasksHandler} name='Design' className='btn w-50' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>Design</button>
                        </div>
                    </div>
                </div>            
            </div>
            </section>
    </div>
  )
}
