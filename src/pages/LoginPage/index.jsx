import {useState, useEffect} from 'react'
import Login from '../../components/Login'
import './LoginPage.css'

export default function LoginPage() {
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
    <div className='login-page-body' style={{backgroundColor, color: fontColor, fontSize}}>
        <Login />
        <section>
        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
      </section>
    </div>
  )
}
