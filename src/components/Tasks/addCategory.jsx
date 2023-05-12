import { useEffect } from 'react'
import { useTheme } from '../../contexts'
import { AddTaskModal } from '../../components'

export default function CategoryPage({handleTasks, categories}) {
    const { theme } = useTheme()

        return (
        <section id="create-tasks-for-category" style={{height: '100vh'}}>
            <div className="d-flex aligns-items-center justify-content-center position-relative">
                <div className="container text-center pt-3 shadow rounded position-absolute" style={{backgroundColor: theme.secColor, color: theme.primColor,  top: '50%', left: '50%', transform: `translate(-50%,50%)`}}>
                    <h1>It looks like you don't have any tasks</h1><br/><h2>Let's get you started:</h2>
                    <div className="row justify-content-center p-5" style={{}}>  
                        <button onClick={AddTaskModal} className='btn p-3' style={{backgroundColor: theme.primColor, color: theme.primText}}>Create Task</button>
                    </div>
                </div>
            </div>
        </section>
        )
} 

