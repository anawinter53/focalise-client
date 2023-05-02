import './HomePage.css'
import {useState, useEffect} from 'react'

export default function HomePage() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="homepage-body">
      <h1 className='greeting'>Good afternoon user, the time now is: </h1>
      <h2 className='timeDisplay'>{date.toLocaleTimeString()}</h2>
    </div>
  )
}
