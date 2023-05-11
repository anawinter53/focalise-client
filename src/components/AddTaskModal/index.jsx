import { useState } from 'react'
import { useTheme } from '../../contexts'
import * as Constant from '../../constants'

export default function AddTaskModal({open, setAddModal}) {
    const { theme } = useTheme()
    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [date, setDate] = useState('')
    if (!open) return null

    const handleAddTask = async (e) => {
        e.preventDefault()
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ category_name: category, task_name: name, task_desc: description, task_url: url, task_deadline: date})
        }

        const id = localStorage.getItem("id")

        const res = await fetch(Constant.MAIN_URl + `tasks/user/${id}`, options)
        const data = await res.json()
        console.log(data)
    }

    return (
        <div className='position-absolute text-center shadow p-3 rounded position-absolute' style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`, top: '50%', left: '50%', transform: `translate(-50%,50%)`, zIndex: 999}}>
            <h1>Add Task</h1>
            <button onClick={() => setAddModal(false)}>Close</button>
            <form onSubmit={handleAddTask}>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter the category of your task" onChange={(e) => setCategory(e.target.value)} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter the name of your task" onChange={(e) => setName(e.target.value)} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Enter a description for your task" onChange={(e) => setDescription(e.target.value)} required></input>
                </div>
                <div className="form-check">
                    <label class="form-group" htmlFor="URL">URL</label>
                    <input type="text" className="form-control" id="URL" placeholder="Add a relevant link to your task" onChange={(e) => setUrl(e.target.value)}></input>
                </div>
                <div className="form-check">
                    <label className="form-group" htmlFor="task-date">Date to complete by</label>
                    <input type="date" className="form-control" id="task-date" placeholder="Specify the date you'd like to complete this task by" onChange={(e) => setDate(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    )
}
