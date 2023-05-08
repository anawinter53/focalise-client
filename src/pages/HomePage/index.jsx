import './HomePage.css'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [date, setDate] = useState(new Date());
  const [isAccordion1Open, setIsAccordion1Open] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('')
  const [fontColor, setFontColor] = useState('')
  const [fontSize, setFontSize] = useState('')

  useEffect(() => {
    const savedColor = localStorage.getItem("backgroundColor");
    const fontColor = localStorage.getItem('fontColor');
    const savedFontSize = localStorage.getItem('fontSize')
    if (savedColor) {
      setBackgroundColor(savedColor);
    }
    if (fontColor) {
      setFontColor(fontColor)
    }
    if (savedFontSize) {
      setFontSize(Number(savedFontSize))
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

  const toggleAccordion1 = () => {
    setIsAccordion1Open(!isAccordion1Open);
  };

  return (
    <div className='homepage-body' style={{backgroundColor, color: fontColor, fontSize}}>
      <h1 className='greeting'>Good afternoon user, the time now is: </h1>
      <h2 className='timeDisplay' data-testid="timeDisplay">{date.toLocaleTimeString()}</h2>
      <div className="accordion-container">
        <div className="grid-container">
          <div className="accordion" onClick={toggleAccordion1} data-testid="accordion">
            <h2 className="accordion-title">Here are some tasks you can complete today</h2>
            {isAccordion1Open && (
              <div className="accordion-content">
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </div>
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
