import { User } from "../../contexts/user";
import { useEffect, useState } from "react";
import "./tasks.css";

export default function Tasks() {
  const { id } = User();
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    console.log(id);
    // const res = await fetch(`http://localhost:4000/tasks/user/${id}`);
    //Temporarily coding the user ID to 1 because my username doesn't have any tasks
    const res = await fetch(`http://localhost:4000/tasks/user/1`);
    const data = await res.json();
    setTasks(data)
  };

  useEffect(() => {
    getTasks()
  }, []);
  
  return (
    <>
      <h2>Consider focusing on your three most urgent tasks today:</h2>
      <table>
      {(tasks) ? 
        tasks.map((task, i) => (
          <tr key={i}>
            <td>{task.category_name}</td>
            <td>{task.task_desc}</td>
            <td>{task.task_deadline}</td>
          </tr>
        ))
      : <></>}
      </table>
    </>
  )
}
