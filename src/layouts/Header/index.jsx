import {Outlet } from "react-router-dom"
import { useTheme } from '../../contexts'
import 'bootstrap/js/dist/dropdown'
import { MusicPlayer } from "../../components/MusicPlayer"

export default function Header() {
  const { theme, setTheme, themes } = useTheme()
  let th = 0
  function handleTheme(){
    if (th == 0) {
      th++
      setTheme(themes.theme1)
    }
    else {
      th--
      setTheme(themes.theme2)
    }
    console.log("clicked", th, theme)
  }
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg" style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>
        <div className="container">
          <a className="navbar-brand" href="/" style={{color: `${theme.primText}`}}>F  O C A L I S E</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{color: `${theme.primText}`}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sensory" style={{color: `${theme.primText}`}}>Sensory</a>
              </li>
            </ul>
            <span className="navbar-text">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li>
                <MusicPlayer />
              </li>
            <li className="nav-item dropdown">
                <a className="nav-link" href="#" style={{color: `${theme.primText}`}} role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleTheme}>
                  Change Theme
                </a>
                {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleTheme}>
                  Select Theme
                </a> */}
                {/* <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                </ul> */}
              </li>
              {/* If the user is loggen in (localStorage token exists), it shows Profile and Logout, otherwise register and login. Can remove the 3 items above once login is working*/}
              {localStorage.token ? 
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/Profile" style={{color: `${theme.primText}`}}>Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/logout" style={{color: `${theme.primText}`}}>Logout</a>
                </li>
              </> : 
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/login" style={{color: `${theme.primText}`}}>Login/Register</a>
                </li>
              </>}
            </ul>
            </span>  
          </div>
        </div>
      </nav>

    <Outlet/>
    </>
  )
}
