import {useState, useEffect} from 'react';
import Register from '../../components/Register';
import './RegisterPage.css';

export default function RegisterPage() {
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

  return (
    <div className="register-page-body">
        <Register />
        <section>
        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
      </section>
    </div>
  )
}
