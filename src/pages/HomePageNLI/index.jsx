import { useState, useEffect } from "react";
import './HomePageNLI.css'
import { Link } from 'react-router-dom';
import { useTheme } from "../../contexts";
export default function HomePageNLI() {
const [date, setDate] = useState(new Date());
const [showMoreInfo, setShowMoreInfo] = useState(false);
const { theme } = useTheme()

useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const handleClickArrow = () => {
    setShowMoreInfo(true);
  };
  

  return (
    
    <div className='text-center mt-5 ' style={{backgroundColor: theme.primColor, color: theme.primText}}>
      <h3 className="fw-semibold" style={{marginTop: "20%"}}><span className="font-monospace">Welcome to </span>  F O C A L I S E</h3>
      <p className="my-5 font-monospace">Your one-stop spot for productivity online<br/>It’s currently:</p>
      <h2 className='timeDisplay my-5 font-monospace' data-testid="timeDisplay">{date.toLocaleTimeString()}</h2>
      <p className="fw-light font-monospace">Find out more</p>
      <div className="arrow mt-5">
        <a className="fa fa-arrow-down fa-2x" style={{color: theme.primText}} href="#more-info" onClick={handleClickArrow}></a>
      </div>
      {showMoreInfo && (
        <section id="more-info" style={{ height: '85vh' }}>
          <div className="card-row">
            <div className="card border-1" style={{backgroundColor: theme.primColor, color: theme.primText, borderColor: theme.secColor}}>
              <h2>Sensory</h2>
              <p>The sensory page in your app provides users with a soothing and calming experience to help them unwind and recharge between sessions of productivity. Users can set a timer for 5, 10, or 15 minutes and choose from a variety of videos in the music, nature, and meditation categories. These videos are carefully curated to help users relax, destress, and rejuvenate, making it easier to return to work with renewed focus and energy. With the sensory page in your app, users can take a much-needed break from their busy schedules and prioritize their mental and emotional well-being.</p>
            </div>
            <div className="card border-1" style={{backgroundColor: theme.primColor, color: theme.primText, borderColor: theme.secColor}}>
              <h2>Tasks</h2>
              <p>The tasks page provides users with a simple and effective way to prioritise and manage their daily tasks. The page features a clean and intuitive interface, allowing users to quickly add new tasks, assign due dates, and set reminders. Users can easily view and organize their tasks by category, priority, or due date, ensuring that users can stay on top of their tasks and focus on what matters most.</p>
            </div>
          </div>
          <div className="card-row">
          <div className="card border-1" style={{backgroundColor: theme.primColor, color: theme.primText, borderColor: theme.secColor}}>
              <h2>Workspace</h2>
              <p>The workspace page in provides users with a powerful productivity tool to help stay focused and on-task. Designed to facilitate the popular pomodoro technique, the workspace page allows users to set custom work and rest intervals, helping them maximize their productivity and avoid burnout. Users can easily start and stop timers, track their progress, and receive alerts when its time to switch between work and rest periods. With the workspace page in your app, users can create a focused and distraction-free environment, boosting their productivity and achieving their goals.</p>
            </div>
            <div className="card border-1" style={{backgroundColor: theme.primColor, color: theme.primText, borderColor: theme.secColor}}>
              <h2>Extension</h2>
              <p>The Chrome extension provides users with a convenient way to stay on top of their tasks even when they are outside of the app. With the extension installed, users can easily track their tasks from anywhere on the web, making it easy to stay focused and productive throughout the day. Additionally, the extension provides a seamless way to navigate back to the app, ensuring that users can quickly access their tasks and stay on track.</p>

            </div>
          </div>
          <button className="btn p-3 mb-5"style={{backgroundColor: theme.secColor}} >
            <Link className="" style={{color: theme.secText}} to='/register'>Signup for Focalise</Link>
          </button>
        </section>
      )}
    </div>
  );
}
