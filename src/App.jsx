import { Routes, Route } from 'react-router-dom'

import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Creator from './pages/Creator'
import Developer from './pages/Developer'
import Contact from './pages/Contact.jsx'
import './App.css'
import Footer from './pages/Footer.jsx'
import Design from './pages/Design.jsx'
import ScrollToTop from './pages/ScrollToTop.jsx'
import MarqueeTape from './pages/MarqueeTape.jsx'

function App() {
  
  return (
    <>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/developer" element={<Developer />} />
        <Route path='/designer' element={<Design/>}/>
        <Route path="/creator" element={<Creator />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App