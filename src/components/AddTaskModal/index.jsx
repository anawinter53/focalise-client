import { useTheme } from '../../contexts'

export default function AddTaskModal({open, setAddModal}) {
    const { theme } = useTheme()
    if (!open) return null



    return (
        <div className='position-absolute text-center shadow p-3 rounded position-absolute' style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`, top: '50%', left: '50%', transform: `translate(-50%,50%)`, zIndex: 999}}>
            <h1>Add Task</h1>
            <button onClick={() => setAddModal(false)}>Close</button>
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter the name of your task" required></input>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" id="description" placeholder="Enter a description for your task" required></input>
                </div>
                <div class="form-check">
                    <label class="form-group" for="URL">URL</label>
                    <input type="text" class="form-control" id="URL" placeholder="Add a relevant link to your task"></input>
                </div>
                <div class="form-check">
                    <label class="form-group" for="task-date">Date to complete by</label>
                    <input type="date" class="form-control" id="task-date" placeholder="Specify the date you'd like to complete this task by"></input>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </div>
    )
}
