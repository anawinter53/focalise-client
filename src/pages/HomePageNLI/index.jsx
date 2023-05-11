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
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className="card" style={{backgroundColor: '#D17B88', color: 'white', border: '5px solid white'}}>
              <h2>Tasks</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
          <div className="card-row">
            <div className="card" style={{backgroundColor: '#D17B88', color: 'white', border: '5px solid white'}}>
              <h2>Workspace</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className="card" style={{backgroundColor: '#D17B88', color: 'white', border: '5px solid white'}}>
              <h2>Extension</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
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
