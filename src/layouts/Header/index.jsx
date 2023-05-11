import { Outlet } from "react-router-dom"
import { useTheme } from '../../contexts'
import 'bootstrap/js/dist/dropdown'
import { MusicPlayer } from "../../components/MusicPlayer"

export default function Header() {
  const { theme, setTheme, themes } = useTheme()

  function handleTheme(){
    switch(localStorage.getItem('userTheme')) {
      case 'theme2':
        return setTheme(themes.theme2);
      case 'theme3':
        return setTheme(themes.theme3);
      case 'theme4':
        return setTheme(themes.theme4);
      case 'theme5':
        return setTheme(themes.theme5);
      default:
        return setTheme(themes.theme1);
    }
  }

  handleTheme()

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg" style={{backgroundColor: theme.secColor}}>
        <div className="container">
          <a className="navbar-brand" href="/" style={{color: theme.secText}}>F O C A L I S E</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/sensory" style={{color: theme.secText}}>Sensory</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tasks" style={{color: theme.secText}}>Tasks</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/workplan" style={{color: theme.secText}}>Workplan</a>
              </li>
            </ul>
            <span className="navbar-text">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li>
                <MusicPlayer />
              </li>
              {/* If the user is loggen in (localStorage token exists), it shows Profile and Logout, otherwise register and login. Can remove the 3 items above once login is working*/}
              {localStorage.token ? 
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/Profile" style={{color: theme.secText}}>Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/logout" style={{color: theme.secText}}>Logout</a>
                </li>
              </> : 
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/login" style={{color: theme.secText}}>Login/Register</a>
                </li>
              </>}
            </ul>
            </span>  
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
