import { useEffect } from 'react'
import { useTheme } from '../../contexts'

export default function CategoryChoice({handleTasks, categories}) {
    const { theme } = useTheme()
    function tasksHandler(e){
        e.preventDefault()
        handleTasks(e.target.name)
    }

  return (
    <div>
      <section id="select-task-category">
            <div className="d-flex aligns-items-center justify-content-center">
                <div className="container text-center pt-3 shadow rounded mb-3" style={{backgroundColor: `${theme.primColor}`, color: `${theme.primText}`}}>
                    <p>Select a task category </p>
                    <div className="d-flex justify-content-center p-5" style={{}}>  
                        {categories ? categories.map((category, i) => (
                            <div className="m-1" key={i}>
                            <button onClick={tasksHandler} name={category} className='btn' style={{backgroundColor: `${theme.secColor}`, color: `${theme.secText}`}}>{category}</button>
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