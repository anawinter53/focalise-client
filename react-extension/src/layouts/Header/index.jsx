import { Outlet, Link } from "react-router-dom"
import { useTheme, useUser } from '../../contexts'
import './Header.css'

export default function Header() {
  const { theme, themes } = useTheme()
  const { token } = useUser();

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg" style={{padding: '10px'}}>
        <div className="container">
          <a className="navbar-brand">F  O C A L I S E</a>
              {token || localStorage.token ? <><button className="nav-item"><a className="nav-link"><Link className="nav-link" to={"/logout"}>Logout</Link></a></button></> : <></>}
        </div>
      </nav>
    <Outlet/>
    </>
  )
}
