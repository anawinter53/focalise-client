import './HomePage.css'
import {useState, useEffect} from 'react'
import Select from "react-select";

export default function HomePage() {
  const [date, setDate] = useState(new Date());
  const [isAccordion1Open, setIsAccordion1Open] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('');


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

  const handleColorChange = (selectedOption) => {
    const color = selectedOption.value;
    setBackgroundColor(color);
    localStorage.setItem("backgroundColor", color);
  };

  const colorOptions = [
    { value: "#D17B88", label: "Rose" },
    { value: "#E2E4F6", label: "Lavender" },
    { value: "#BEC7A8", label: "Sage" },
    { value: "#B1CBD2", label: "Light Grey" },
    { value: "#F4C095", label: "Peach" },
  ];

  useEffect(() => {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
      setBackgroundColor(savedColor);
    }
  }, []);
  

  return (
    <div className="homepage-body" style={{backgroundColor}}>
      <h1 className='greeting'>Good afternoon user, the time now is: </h1>
      <h2 className='timeDisplay'>{date.toLocaleTimeString()}</h2>
      <div className="accordion-container">
        <div className="grid-container">
          <div className="accordion" onClick={toggleAccordion1} data-testid="accordion1">
            <h2 className="accordion-title">Here are some tasks you can complete today</h2>
            ...
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
    <Select className="colour-dropdown" options={colorOptions} onChange={handleColorChange}/>
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
