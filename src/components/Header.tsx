"use client"

import { useState } from "react"
import { 
  Menu, 
  X, 
  Home,
  User,
  GraduationCap,
  FolderGit2,
  BicepsFlexed,
  PhoneCall,
} from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "", icon: <Home size={20} />, href: "#home" },
    { name: "", icon: <User size={20} />, href: "#about" },
    { name: "", icon: <GraduationCap size={20} />, href: "#education" },
    { name: "", icon: <FolderGit2 size={20} />, href: "#projects" },
    { name: "", icon: <BicepsFlexed size={20} />, href: "#services" },
    { name: "", icon: <PhoneCall size={20} />, href: "#contact" }
  ]

  return (
    <header className="header">
      <div className="header__container container">
        <a href="/" className="header__logo">
          <div className="header_name">
            <span className="styled-name">&lt;<span className="big">&nbsp;T</span> &gt;</span>
          </div>      
        </a>

        {/* Mobile menu button */}
        <button className="header__menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="header__nav-link">
                  <span className="header__nav-icon">{item.icon}</span>
                  <span className="header__nav-text">{item.name}</span>
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
                <li key={item.name} className="header__mobile-nav-item">
                  <a
                    href={item.href}
                    className="header__nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="header__nav-icon">{item.icon}</span>
                    <span className="header__nav-text">{item.name}</span>
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

