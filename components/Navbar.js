'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#histoire', label: 'Notre histoire' },
  { href: '#produits', label: 'Nos produits' },
  { href: '#visites', label: 'Visites & dégustations' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl">🐸</span>
          <div>
            <p
              className={`font-serif font-bold text-lg leading-tight transition-colors ${
                scrolled ? 'text-apple-800' : 'text-white'
              }`}
            >
              La Rainette
            </p>
            <p
              className={`text-xs tracking-widest uppercase transition-colors ${
                scrolled ? 'text-bark-500' : 'text-white/80'
              }`}
            >
              Cidrerie du Penthièvre
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-apple-500 ${
                scrolled ? 'text-apple-800' : 'text-white/90 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/reserver"
            className={`text-sm px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
              scrolled
                ? 'border-apple-600 text-apple-600 hover:bg-apple-600 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-apple-700'
            }`}
          >
            Réserver une visite
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-1.5 p-2 ${
            scrolled ? 'text-apple-800' : 'text-white'
          }`}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-apple-100 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-apple-800 font-medium py-2 border-b border-apple-50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/reserver"
            onClick={() => setMenuOpen(false)}
            className="btn-primary text-center mt-2"
          >
            Réserver une visite
          </a>
        </div>
      )}
    </header>
  )
}
