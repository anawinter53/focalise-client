import { useTheme } from '../../contexts'
import { useState, useEffect } from 'react'

export default function EditTaskModal({open, setEditModal, setCompletedTaskModal, activeTask}) {
    const { theme } = useTheme()
    if (!open) return null

    return (
        <div className='position-absolute text-center shadow p-3 rounded position-absolute' style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`, top: '50%', left: '50%', transform: `translate(-50%,50%)`, zIndex: 999}}>
            <h1>Edit Task</h1>
            <button onClick={() => setEditModal(false)}>Close</button>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" defaultValue={activeTask.task_name} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" defaultValue={activeTask.task_desc} required></input>
                </div>
                <div className="form-check">
                    <label className="form-group" htmlFor="URL">URL</label>
                    <input type="text" className="form-control" id="URL" defaultValue={activeTask.task_url}></input>
                </div>
                <div className="form-check">
                    <label className="form-group" htmlFor="task-date">Date to complete by</label>
                    <input type="date" className="form-control" id="task-date" defaultValue={activeTask.task_deadline}></input>
                </div>
                {<UpdateButton activeTask={activeTask}/>}
                <button type="submit" className="btn btn-primary">Update Task</button>
                </form>
        </div>
    )
}


// if task is marked as not started, button shows 'mark as started', if task is started, button -> 'mark as completed' this triggers CompletedTaskModal
function UpdateButton({activeTask}) {
    const [activeComponent, setActiveComponent] = useState('')

    useEffect(() => {
        const StartTaskButton = 'Mark Task as Started'
        const CompleteTaskButton = 'Mark Task as Completed'
        switch (activeTask.task_status) {
            case 'Not Started':
                setActiveComponent(StartTaskButton)
                break;
            default :
                setActiveComponent(CompleteTaskButton)
                break;

        }
    }, [activeTask])

    return (
            <button type="submit" className="btn btn-primary">{activeComponent}</button>
    )
}
