import { useState, useEffect } from "react";
import './HomePageNLI.css'
import { Link } from 'react-router-dom';

export default function HomePageNLI() {
const [date, setDate] = useState(new Date());
const [showMoreInfo, setShowMoreInfo] = useState(false);

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
    <div className='homepage-body' style={{backgroundColor: '#D17B88'}}>
      <h1 className='greeting'>Good afternoon, the time now is: </h1>
      <h2 className='timeDisplay' data-testid="timeDisplay">{date.toLocaleTimeString()}</h2>
      <h3>Find out more about Focalise</h3>
      <div className="arrow">
        <a className="fa fa-arrow-down fa-2x" href="#more-info" onClick={handleClickArrow}></a>
      </div>
      {showMoreInfo && (
        <section id="more-info" style={{ height: '100vh' }}>
          <div className="card-row">
            <div className="card" style={{backgroundColor: '#D17B88', color: 'white', border: '5px solid white'}}>
              <h2>Sensory</h2>
              <p>The sensory page in your app provides users with a soothing and calming experience to help them unwind and recharge between sessions of productivity. Users can set a timer for 5, 10, or 15 minutes and choose from a variety of videos in the music, nature, and meditation categories. These videos are carefully curated to help users relax, destress, and rejuvenate, making it easier to return to work with renewed focus and energy. With the sensory page in your app, users can take a much-needed break from their busy schedules and prioritize their mental and emotional well-being.</p>
            </div>
            <div className="card" style={{backgroundColor: '#D17B88', color: 'white', border: '5px solid white'}}>
              <h2>Tasks</h2>
              <p>The tasks page provides users with a simple and effective way to prioritise and manage their daily tasks. The page features a clean and intuitive interface, allowing users to quickly add new tasks, assign due dates, and set reminders. Users can easily view and organize their tasks by category, priority, or due date, ensuring that users can stay on top of their tasks and focus on what matters most.</p>
            </div>
          </div>
          <div className="card-row">
            <div className="card" style={{backgroundColor: '#D17B88', color: 'white', border: '5px solid white'}}>
              <h2>Workspace</h2>
              <p>The workspace page in provides users with a powerful productivity tool to help stay focused and on-task. Designed to facilitate the popular pomodoro technique, the workspace page allows users to set custom work and rest intervals, helping them maximize their productivity and avoid burnout. Users can easily start and stop timers, track their progress, and receive alerts when its time to switch between work and rest periods. With the workspace page in your app, users can create a focused and distraction-free environment, boosting their productivity and achieving their goals.</p>
            </div>
            <div className="card" style={{backgroundColor: '#D17B88', color: 'white', border: '5px solid white'}}>
              <h2>Extension</h2>
              <p>The Chrome extension provides users with a convenient way to stay on top of their tasks even when they are outside of the app. With the extension installed, users can easily track their tasks from anywhere on the web, making it easy to stay focused and productive throughout the day. Additionally, the extension provides a seamless way to navigate back to the app, ensuring that users can quickly access their tasks and stay on track.</p>
            </div>
          </div>
          <button className="login-button">
            <Link className="login-button-link" to='/register'>Signup for Focalise</Link>
          </button>
        </section>
      )}
    </div>
  );
}
