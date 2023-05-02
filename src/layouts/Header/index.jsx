import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div style={{minWidth: '10vh', backgroundColor: 'black'}}>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </div>
  )
}
