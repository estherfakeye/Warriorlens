import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/images/logo.png'

const Navbar = ({show}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  if (!show) return null

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img 
              src={logo} 
              alt="WarriorLens Logo" 
              className="h-12 w-auto" 
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-secondary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-secondary text-dark px-6 py-2.5 rounded-full font-semibold hover:bg-accent transition-all duration-300 hover:scale-105"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-dark/98 backdrop-blur-sm`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block text-white hover:text-secondary transition-colors duration-300 font-medium text-lg py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="block bg-secondary text-dark px-6 py-3 rounded-full font-semibold hover:bg-accent transition-all duration-300 text-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;