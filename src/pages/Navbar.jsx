import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Logo</Link>
      <div className="nav-links">
        <Link to="/developer">Developer  </Link>
        <Link to="/creator">Creator</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar