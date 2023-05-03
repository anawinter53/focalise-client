import {Outlet } from "react-router-dom"


export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">F  O C A L I S E</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sensory">Sensory</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    <Outlet/>
    </>
    // <div style={{minWidth: '10vh', backgroundColor: 'black'}}>
    //   <nav>
    //     <Link to="/home">Home</Link>
    //   </nav>
    // </div>
  )
}
