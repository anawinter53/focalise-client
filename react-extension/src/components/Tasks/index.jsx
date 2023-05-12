import { useEffect, useState } from "react";
import "./tasks.css";

export default function Tasks() {
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    const id = localStorage.id
    const res = await fetch(`http://127.0.0.1:4000/tasks/user/${id}`);
    const data = await res.json();
    setTasks(data)
  };

  useEffect(() => {
    getTasks()
  }, []);

  const convertDate = (pythonDate) => {
    const date = new Date(pythonDate)
    const day = date.getDate()
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const month = months[date.getMonth()]
    const formattedDate = `${day} ${month}`
    return formattedDate
  }
  
  return (
    <>
      <h2 className="page-title" style={{textAlign: 'center'}}>Try focusing on your most urgent tasks today:</h2>
        <table className="tbl-content">
          <tr className="tbl-header">
            <td>Category</td>
            <td>Task</td>
            <td>Due</td>
          </tr>
          {(tasks) ? 
            tasks.map((task, i) =>  i < 3 && (
              <tr className="table-row" key={i}>
                <td>{task.category_name}</td>
                <td style={{fontWeight: "bold"}}>{task.task_desc}</td>
                <td style={{width: "14%"}}>{convertDate(task.task_deadline)}</td>
              </tr>
            ))
          : <></>}
          </table>
    </>
  )
}
