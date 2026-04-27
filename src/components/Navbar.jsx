import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Tentang', href: '#about' },
    { label: 'Produk', href: '#products' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Kontak', href: '#contact' },
  ]

  const handleNavClick = (href) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer">
            <img src={logo} alt="Logo Smart IoT" className="h-8 md:h-10" />
            <span
            className={`font-bold text-xl transition-colors ${
           isScrolled ? 'text-primary-900' : 'text-white'
       }`}
         >
           Smart IoT Education
        </span>
    </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`transition-colors hover:text-primary-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6287832001731"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg hover:shadow-primary-600/50 transition-all"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg py-4 px-4">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/6287832001731"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
