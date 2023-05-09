import Login from '../../components/Login'
import Tasks from '../../components/Tasks'
import Links from '../../components/Links'
import { Link } from "react-router-dom";

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
        <div>
          <p>Welcome to Focalise!</p>
          <Link to={"/login"}>Login / Register here</Link>
        </div>
        </>}
      </>
    )
}
