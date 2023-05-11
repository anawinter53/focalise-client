import Tasks from '../../components/Tasks'
import Links from '../../components/Links'
import { Link } from "react-router-dom";
import './HomePage.css'

export default function HomePage() {
    return (
      <>
        {localStorage.token ? 
        <>
          <Tasks />
          <Links />
        </>
        : 
        <>
        <div className='landing-page-body'>
          <h1 className='page-heading'>Welcome to Focalise!</h1>
          <button className='login-button'>
          <Link className="login-link" to={"/login"}>Login</Link>
          </button>
        </div>
        </>}
      </>
    )
}
