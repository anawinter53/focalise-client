import { useTheme } from '../../contexts'
import { useState, useEffect } from 'react'
import * as Constant from '../../constants'

export default function EditTaskModal({open, setEditModal, setCompletedTaskModal, activeTask}) {
    const { theme } = useTheme()
    if (!open) return null

    const [category, setCategory] = useState(activeTask.category_name)
    const [name, setName] = useState(activeTask.task_name)
    const [description, setDescription] = useState(activeTask.task_desc)
    const [url, setUrl] = useState(activeTask.task_url)
    const [date, setDate] = useState(activeTask.task_deadline)

    // useEffect(() => {
    //     let deadline = new Date(date)
    //     console.log(deadline)
    //     deadline = deadline.toISOString().split('T')[0]
    //     console.log(deadline)
    //     setDate(deadline)
    // }, [])

    const handleEditTask = async (e) => {
        e.preventDefault()
        console.log(name)
        console.log(description)
        console.log(url)
        console.log(date)

        const options = {
            method: "PUT",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ category_name: category, task_name: name, task_url: url, task_desc: description, task_deadline: date})
        }

        const res = await fetch(Constant.MAIN_URl + `tasks/${activeTask.task_id}`, options)
        const data = await res.json()
        console.log(data)
    }

    return (
        <div className='position-absolute text-center shadow p-3 rounded position-absolute' style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`, top: '50%', left: '50%', transform: `translate(-50%,50%)`, zIndex: 999}}>
            <h1>Edit Task</h1>
            <button onClick={() => setEditModal(false)}>Close</button>
            <form onSubmit={handleEditTask}>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input type="text" className="form-control" id="name" defaultValue={category} onChange={(e) => setCategory(e.target.value)} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" defaultValue={name} onChange={(e) => setName(e.target.value)} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" defaultValue={description} onChange={(e) => setDescription(e.target.value)} required></input>
                </div>
                <div className="form-check">
                    <label className="form-group" htmlFor="URL">URL</label>
                    <input type="text" className="form-control" id="URL" defaultValue={url} onChange={(e) => setUrl(e.target.value)}></input>
                </div>
                <div className="form-check">
                    <label className="form-group" htmlFor="task-date">Date to complete by</label>
                    <input type="date" className="form-control" id="task-date" defaultValue={date} onChange={(e) => setDate(e.target.value)}></input>
                </div>
                {/* {<UpdateButton activeTask={activeTask}/>} */}
                <button type="submit" className="btn btn-primary">Update Task</button>
                </form>
        </div>
    )
}


// if task is marked as not started, button shows 'mark as started', if task is started, button -> 'mark as completed' this triggers CompletedTaskModal
// function UpdateButton({activeTask}) {
//     const [activeComponent, setActiveComponent] = useState('')

//     useEffect(() => {
//         const StartTaskButton = 'Mark Task as Started'
//         const CompleteTaskButton = 'Mark Task as Completed'
//         switch (activeTask.task_status) {
//             case 'Not Started':
//                 setActiveComponent(StartTaskButton)
//                 break;
//             default :
//                 setActiveComponent(CompleteTaskButton)
//                 break;

//         }
//     }, [activeTask])

//     return (
//             <button type="submit" className="btn btn-primary">{activeComponent}</button>
//     )
// }
