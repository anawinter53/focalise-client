import { useTheme } from '../../contexts/themes'
import 'animate.css';
import { Category, Tasks } from '../../components';
import { useState, useEffect } from 'react';
import * as Constant from '../../constants'

export default function TasksPage() {
    const { theme } = useTheme();
    const [id, setId] = useState('')
    const [category, setCategory] = useState('')
    const [tasks, setTasks] = useState('')
    const [render, setRender] = useState()

    useEffect(() => {
        const user_id = localStorage.getItem("id");
        console.log(id)
        if (user_id) {
          setId(user_id);
        }
        async (user_id) => {
            const res = await fetch(Constant.MAIN_URl + "tasks/user/" + id);
            const data = await res.json();
            console.log(res)
            setCategory(data.category_name);
            
        }
      }, []);

  
    function handleTasks(category) {
        getTasks(category)
        console.log(tasks)
        setRender("tasks")
        RenderTasksView()
    } 
    const getTasks = async (category) => {
          const res = await fetch(Constant.MAIN_URl + "tasks/user/" + id + "/" + category);
          const data = await res.json();
          setTasks(data.task_name)
          console.log(data)
    }
    function RenderTasksView() {

        if (render === 'tasks') {
            return <Tasks tasks={tasks}/>
        }
        else {
            return <Category handleTasks={handleTasks} />
        }
    }

    return (
        <div style={{ backgroundColor: `${theme.primColor}` }}>
            <RenderTasksView/>
        </div>
    )
}
