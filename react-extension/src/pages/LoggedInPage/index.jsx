import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './loggedin.css'

export default function LoggedInPage() {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const navigate = useNavigate();

    useEffect(() => {
        const wait = async () => {
            await delay(3000)
            navigate("/")
        }
        wait()
      }, []);
    
    return (
      <>
        <p className='centered'>You are now logged in!</p>
      </>
    )
  }
