import { useTheme } from '../../contexts/themes'
import '../TasksPage/index.css'
import 'animate.css';
import { Category, Tasks } from '../../components';
import { useState } from 'react';
import * as Constant from '../../constants'

export default function SensoryPage() {
    const { theme } = useTheme();
    const [category, setCategory] = useState('')
    const [tasks, setTasks] = useState('')
    const [render, setRender] = useState()

    useEffect(() => {
        const user_id = localStorage.getItem("user_id");
        if (user_id) {
          setBackgroundColor(savedColor);
        }
        if (savedFontColor) {
          handleFontColorChange(savedFontColor)
        }
        if (savedFontSize) {
          handleFontResize(Number(savedFontSize))
        }
      }, []);

    // function handleCategory(category) {
    //     setCategory(category)
    //     setRender("category")
    //     RenderView()
    // }
    function handleTasks(task) {
        getTasks(tasks)
        setRender("task")
        RenderView()
    }
    const getCategory = async (category) => {
        const res = await fetch( Constant.MAIN_URl + "tasks/${user_id}");
        const data = await res.json();
        const rand = Math.floor(Math.random() * data.length)
        const rand_data = data[rand]
        setCategory(rand_data.category_name);
        console.log(category, data)
    }
    const getTasks = async (tasks) => {
          const res = await fetch( Constant.MAIN_URl + "tasks/${category}", options);
          const data = await res.json();
          const rand = Math.floor(Math.random() * data.length)
          const rand_data = data[rand]
          setVideoLink(rand_data.video_url);
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
