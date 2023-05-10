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
    <div className='homepage-body'>
      <h1 className='greeting'>Good afternoon, the time now is: </h1>
      <h2 className='timeDisplay' data-testid="timeDisplay">{date.toLocaleTimeString()}</h2>
      <h3>Find out more</h3>
      <div className="arrow">
        <a className="fa fa-arrow-down fa-2x" href="#more-info" onClick={handleClickArrow}></a>
      </div>
      {showMoreInfo && (
        <section id="more-info" style={{ height: '100vh' }}>
          <div className="card-row">
            <div className="card">
              <h2>Sensory</h2>
            </div>
            <div className="card">
              <h2>Tasks</h2>
            </div>
          </div>
          <div className="card-row">
            <div className="card">
              <h2>Workspace</h2>
            </div>
            <div className="card">
              <h2>Extension</h2>
            </div>
          </div>
          <button className="login-button">
            <Link className="login-button-link" to='/login'>Login or signup</Link>
          </button>
        </section>
      )}
    </div>
  );
}
