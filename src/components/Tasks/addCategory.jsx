import { useEffect } from 'react'
import { useTheme } from '../../contexts'
import { AddTaskModal } from '../../components'

export default function CategoryPage({handleTasks, categories}) {
    const { theme } = useTheme()
    useEffect(() => { document.body.style.backgroundColor = `${theme.primColor}` }, )

        return (
        <section id="create-tasks-for-category" style={{height: '100vh'}}>
            <div className="d-flex aligns-items-center justify-content-center position-relative">
                <div className="container text-center pt-3 shadow rounded position-absolute" style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`,  top: '50%', left: '50%', transform: `translate(-50%,50%)`}}>
                    <button onClick={AddTaskModal} className='btn w-50' style={{backgroundColor: `${theme.accentColor}`, color: `${theme.primText}`}}>Create Task</button>
                </div>
            </div>
        </section>
        )
} 

