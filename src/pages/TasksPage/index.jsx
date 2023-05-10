import { useTheme } from '../../contexts/themes'
import 'animate.css';
import { Category, Tasks } from '../../components';
import { useState, useEffect } from 'react';
import * as Constant from '../../constants'

export default function TasksPage() {
    const { theme } = useTheme();
    const [id, setId] = useState('')
    const [categories, setCategories] = useState('')
    const [tasks, setTasks] = useState('')
    const [render, setRender] = useState()

    useEffect( () => {
        const getId = () => {
            const user_id = localStorage.getItem("id");
            user_id ? setId(user_id) : undefined
        }
        getId()
      }, []);

      useEffect(() => {
        const getCategories = async (id) => {
            console.log(id)
            const res = await fetch(Constant.MAIN_URl + "tasks/user/" + id + "/categories");
            const category_data = await res.json();
            console.log(category_data)
            setCategories(category_data)
        }
        getCategories(id)
      }, [id]);

    function handleTasks(category) {
        getTasks(category)
        console.log(tasks)
        setRender("tasks")
        RenderTasksView()
    } 
    const getTasks = async (category) => {
          const res = await fetch(Constant.MAIN_URl + "tasks/user/" + id + "/" + category);
          const data = await res.json();
          setTasks(data)
    }
    function RenderTasksView() {

        if (render === 'tasks') {
            return <Tasks tasks={tasks} setRender={setRender} />
        }
        else {
            return <Category handleTasks={handleTasks} categories={categories} />
        }
    }

    return (
        <div style={{ backgroundColor: `${theme.primColor}` }}>
            <RenderTasksView/>
        </div>
    )
}
