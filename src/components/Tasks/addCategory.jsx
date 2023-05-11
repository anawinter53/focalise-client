import { useEffect } from 'react'
import { useTheme } from '../../contexts'
import { AddTaskModal } from '../../components'

export default function CategoryPage({handleTasks, categories}) {
    const { theme } = useTheme()

        return (
        <section id="create-tasks-for-category" style={{height: '100vh'}}>
            <div className="d-flex aligns-items-center justify-content-center position-relative">
                <div className="container text-center p-3 shadow rounded position-absolute" style={{backgroundColor:theme.secColor, color: theme.primColor,  top: '50%', left: '50%', transform: `translate(-50%,50%)`}}>
                    <button onClick={AddTaskModal} className='btn p-3' style={{backgroundColor: theme.primColor, color: theme.secColor}}>Create Task</button>
                </div>
            </div>
        </section>
        )
} 

