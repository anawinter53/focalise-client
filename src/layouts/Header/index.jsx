import { Outlet } from "react-router-dom"
import { useTheme } from '../../contexts'
import 'bootstrap/js/dist/dropdown'
import { MusicPlayer } from "../../components/MusicPlayer"

export default function Header() {
  const { theme, setTheme, themes } = useTheme()

  function handleTheme(){
    switch(localStorage.getItem('userTheme')) {
      case 'Sage':
        return setTheme(themes.Sage);
      case 'Rose':
        return setTheme(themes.Rose);
      case 'Twilight':
        return setTheme(themes.Twilight);
      case 'Melon':
        return setTheme(themes.Melon);
      default:
        return setTheme(themes.Lavender);
    }
  }

  handleTheme()

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg" style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{color: `${theme.primText}`}}>F O C A L I S E</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
            <ul className="navbar-nav">
             
            </ul>
            <span className="navbar-text d-flex">
              {localStorage.token ? 
                <>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <a className="nav-link" href="/tasks" style={{color: `${theme.primText}`}}>Tasks</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/workplan" style={{color: `${theme.primText}`}}>Workplan</a>
              </li>
                  <li className="nav-item">
                <a className="nav-link" href="/sensory" style={{color: `${theme.primText}`}}>Sensory</a>
              </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/profile" style={{color: `${theme.primText}`}}>Profile</a>
                    </li>
                    <li>
                      <MusicPlayer />
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/logout" style={{color: `${theme.primText}`}}>Logout</a>
                    </li>
                  </ul>
                </> : 
                <>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                    <li className="nav-item">
                      <a className="nav-link" href="/login" style={{color: `${theme.primText}`}}>Login/Register</a>
                    </li>
                  </ul>
                </>
              }
            </span>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
