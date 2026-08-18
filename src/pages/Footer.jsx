import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const socials = [
    { label: "Email", href: "arogundadelouis22@gmail.com" },
    { label: "WhatsApp", href: "https://wa.me/2348158238991"},
    { label: "Call", href: "tel:08158238991"},
    { label: "X", href: "https://x.com/louis_d_great" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/louis-arogundade/"},
    { label: "GitHub", href: "https://github.com/louis-d-great"},
    { label: "Instagram", href: "https://www.instagram.com/louisdgreatt/" },
  ]

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">Louis</span>
          <p>Developer. Creator. Storyteller of the Nigerian digital economy.</p>
        </div>

        <div className="footer-links">
          <span className="footer-heading">Pages</span>
          <Link to="/">Home</Link>
          <Link to="/developer">Developer</Link>
          <Link to="/creator">Creator</Link>
          <Link to="/designer">Designer</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-socials">
          <span className="footer-heading">Connect</span>
          {socials.map((social, index) => (
            
            <a key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Louis. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer