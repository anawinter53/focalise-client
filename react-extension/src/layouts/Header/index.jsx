import { Outlet, Link } from "react-router-dom"
import { useTheme, useUser } from '../../contexts'
import './Header.css'

export default function Header() {
  const { theme, themes } = useTheme()
  const { token } = useUser();

  return (
    <>
      <nav className="navbar sticky-top">
        <div className="nav-container">
          <p className="navbar-brand">F  O C A L I S E</p>
              {token || localStorage.token ? <><Link className="nav-item link-button" to={"/logout"}>Logout</Link></> : <></>}
        </div>
      </nav>
    <Outlet/>
    </>
  )
}
