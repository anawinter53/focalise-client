import { useEffect } from 'react'
import { useTheme } from '../../contexts'

export default function CategoryChoice({handleTasks, categories}) {
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
                    <h1>Select a category: </h1>
                    <div className="row justify-content-center p-5" style={{}}>  
                        {categories ? categories.map((category, i) => (
                            <div className="col-3 m-1" key={i}>
                            <button onClick={tasksHandler} name={category} className='btn w-50' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>{category}</button>
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