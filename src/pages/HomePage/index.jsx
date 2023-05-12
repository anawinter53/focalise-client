import './HomePage.css'
import { useState, useEffect } from 'react'
import * as Constant from '../../constants'

export default function HomePage() {
  const [date, setDate] = useState(new Date());
  const [isAccordion1Open, setIsAccordion1Open] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [fontColor, setFontColor] = useState('');
  const [fontSize, setFontSize] = useState('');
  const [id, setId] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  useEffect(() => {
    const savedColor = localStorage.getItem('backgroundColor');
    const fontColor = localStorage.getItem('fontColor');
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedColor) {
      setBackgroundColor(savedColor);
    }
    if (fontColor) {
      setFontColor(fontColor);
    }
    if (savedFontSize) {
      setFontSize(Number(savedFontSize));
    }
  }, []);

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  useEffect(() => {
    const getId = () => {
      const user_id = localStorage.getItem('id');
      user_id ? setId(user_id) : undefined;
    };
    getId();
  }, []);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await fetch(Constant.MAIN_URl + 'tasks/user/' + id);
        const data = await res.json();
        setTasks(data);
        setIsLoadingTasks(false);
      } catch (error) {
        console.error(error);
      }
    };

    getTasks();
  }, [id]);

  const toggleAccordion1 = () => {
    setIsAccordion1Open(!isAccordion1Open);
  };
  console.log(tasks)

  return (
    <div className="homepage-body" style={{ backgroundColor, color: fontColor, fontSize }}>
      <h1 className="greeting">Good afternoon {localStorage.getItem('username')}, the time now is: </h1>
      <h2 className="timeDisplay" data-testid="timeDisplay">
        {date.toLocaleTimeString()}
      </h2>
      <div className="accordion-container">
        <div className="grid-container">
          <div className="accordion" onClick={toggleAccordion1} data-testid="accordion">
            <h2 className="accordion-title">Here are some tasks you can complete today</h2>
            {isLoadingTasks ? (
              <p>Loading tasks...</p>
            ) : tasks.length > 0 ? (
              isAccordion1Open && (
               <div className="accordion-content">
  <table className="tbl-content" style={{marginTop: "25px"}}>
    <thead>
      <tr className="tbl-header">
        <th>Category</th>
        <th>Task</th>
        <th>Due</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{tasks[0].category_name}</td>
        <td style={{fontWeight: "bold"}}>{tasks[0].task_desc}</td>
        <td>{tasks[0].task_deadline.slice(0, 17)}</td>
      </tr>
      <tr>
      <td>{tasks[1].category_name}</td>
        <td style={{fontWeight: "bold"}}>{tasks[1].task_desc}</td>
        <td>{tasks[1].task_deadline.slice(0, 17)}</td>
      </tr>
      <tr>
      <td>{tasks[2].category_name}</td>
        <td style={{fontWeight: "bold"}}>{tasks[2].task_desc}</td>
        <td>{tasks[2].task_deadline.slice(0, 17)}</td>
      </tr>
    </tbody>
  </table>
</div>
              )
            ) : (
              <p>No Current Tasks</p>
            )}
          </div>
        </div>
      </div>
      <section>
        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
      </section>
    </div>
  )
}
