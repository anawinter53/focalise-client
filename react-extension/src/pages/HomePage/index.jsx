import Login from '../../components/Login'
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
      // <Login />
      <>
      <Link to={"login"}>Login here</Link>
      </>
    )
}
