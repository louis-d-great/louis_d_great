import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="logo"><img src='/src/images/mylogo-original.png' 
        style={{
        width: "130px"
        }}/>
      </Link>

      <div className="nav-links">
        <Link to="/developer">Developer</Link>
        <Link to="/creator">Creator</Link>
        <Link to="/designer">Designer</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <button className="hamburger" onClick={() => setIsOpen(true)}>☰</button>

      <Sidebar isOpen={isOpen} closeSidebar={() => setIsOpen(false)} />
    </nav>
  )
}

export default Navbar