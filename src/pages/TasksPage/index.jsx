import { useTheme } from '../../contexts/themes'
import '../TasksPage/index.css'
import 'animate.css';
import { Category, Tasks } from '../../components';
import { useState } from 'react';
import * as Constant from '../../constants'

export default function SensoryPage() {
    const { theme } = useTheme();
    const [id, setId] = useTheme('')
    const [category, setCategory] = useState('')
    const [tasks, setTasks] = useState('')
    const [render, setRender] = useState()

    useEffect(() => {
        const user_id = localStorage.getItem("user_id");
        if (user_id) {
          setId(user_id);
        }
        const getCategory = async (user_id) => {
            const res = await fetch( Constant.MAIN_URl + "tasks/${user_id}");
            const data = await res.json();
            setCategory(data.category_name);
            console.log(category, data)
        }
      }, []);

  
    function handleTasks(task) {
        getTasks(tasks)
        setRender("task")
        RenderView()
    } 
    const getTasks = async (category) => {
          const res = await fetch(Constant.MAIN_URl + "tasks/${category}", options);
          const data = await res.json();
          console.log(videoLink, data)
    }
    function RenderTasksView() {

        if (render === 'tasks') {
            return <Tasks tasks={tasks}/>
        }
        else {
            return <Category handleTasks={handleTasks}/>
        }
    }

    return (
        <div style={{ backgroundColor: `${theme.primColor}` }}>
            <RenderTasksView/>
        </div>
    )
}
