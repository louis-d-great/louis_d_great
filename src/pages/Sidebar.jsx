import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar({ isOpen, closeSidebar }) {
  if (!isOpen) return null

  return (
    <div className="sidebar-overlay" onClick={closeSidebar}>
      <div className="sidebar" onClick={(e) => e.stopPropagation()}>
        <button className="sidebar-close" onClick={closeSidebar}>✕</button>
        <Link to="/" onClick={closeSidebar}>Home</Link>
        <Link to="/developer" onClick={closeSidebar}>Developer</Link>
        <Link to="/creator" onClick={closeSidebar}>Creator</Link>
        <Link to="/designer" onClick={closeSidebar}>Designer</Link>
        <Link to="/about" onClick={closeSidebar}>About</Link>
        <Link to="/contact" onClick={closeSidebar}>Contact</Link>
      </div>
    </div>
  )
}

export default Sidebar