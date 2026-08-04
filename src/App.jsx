import { Routes, Route } from 'react-router-dom'

import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Creator from './pages/Creator'
import Developer from './pages/Developer'
import './App.css'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/creator" element={<Creator />} />
      </Routes>
    </>
  )
}
export default App