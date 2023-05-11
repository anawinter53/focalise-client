import { useUser } from "../../contexts";
import { useEffect, useState } from "react";
import "./tasks.css";

export default function Tasks() {
  const { id } = useUser();
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    console.log(id);
    // const res = await fetch(`http://localhost:4000/tasks/user/${id}`);
    //Temporarily coding the user ID to 1 because my username doesn't have any tasks
    const res = await fetch(`https://focalise-backend.onrender.com/tasks/user/1`);
    const data = await res.json();
    setTasks(data)
  };

  useEffect(() => {
    getTasks()
  }, []);
  
  return (
    <>
      <h2 className="page-title" style={{textAlign: 'center'}}>Consider focusing on your three most urgent tasks today: </h2>
      <table>
      {(tasks) ? 
        tasks.map((task, i) => (
          <tr className="table-row" key={i}>
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
