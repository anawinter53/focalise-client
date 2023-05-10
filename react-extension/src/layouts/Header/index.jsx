import { Outlet, Link } from "react-router-dom"
import { useTheme } from '../../contexts'
import 'bootstrap/js/dist/dropdown'


export default function Header() {
  const { theme, themes } = useTheme()
  const token = localStorage.token

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg" style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>
        <div className="container">
          <a className="navbar-brand" style={{color: `${theme.primText}`, fontSize: '15px', fontWeight: 'bold'}}>F  O C A L I S E</a>
            <span className="navbar-text">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
              {token ? <><li className="nav-item"><a className="nav-link" style={{color: `${theme.primText}`}}><Link to={"/logout"}>Logout</Link></a></li></> : <></>}
            </ul>
            </span>  
        </div>
      </nav>

    <Outlet/>
    </>
  )
}
