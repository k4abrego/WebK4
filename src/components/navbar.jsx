
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>

        <a href="about.jsx" onClick={closeMenu}>
          About
        </a>
        
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#journey" onClick={closeMenu}>
          Journey
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

    </header>
  )
}

export default Navbar