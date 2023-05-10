import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        <p>You are now logged in!</p>
      </>
    )
  }
