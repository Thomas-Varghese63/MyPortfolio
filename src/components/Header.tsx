"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = ["HOME", "ABOUT", "EDUCATION","SERVICES", "PROJECTS","CONTACT"]

  return (
    <header className="header">
      <div className="header__container container">
        <a href="/" className="header__logo">
        <div className="header_name"><span className="styled-name">&lt;<span className="big">&nbsp;T</span> &gt;</span>  </div>      
        </a>

        {/* Mobile menu button */}
        <button className="header__menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="header__nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="header__mobile-nav">
            <ul className="header__mobile-nav-list">
              {navItems.map((item) => (
                <li key={item} className="header__mobile-nav-item">
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="header__nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

