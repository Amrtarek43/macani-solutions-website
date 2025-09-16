'use client'

import { useState } from 'react'
import Image from 'next/image'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const navigationItems = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Services', href: 'services' },
    { label: 'Locations', href: 'locations' },
    { label: 'Careers', href: 'careers' },
    { label: 'Contact', href: 'contact' },
  ]

  return (
   <header
  className="fixed left-0 right-0 top-0 z-50 bg-[#333333] text-white border-b border-gray-700 shadow-md"
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Small logo on the far left */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2"
            aria-label="Go to top"
          >
            <Image
              src="/logo.png"
              alt="Macani Solutions"
              width={120}   // Adjust logo width
              height={40}   // Adjust logo height
              className="object-contain"
              priority
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-[#00bf63] transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-[#00bf63]" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#00bf63] hover:bg-[#00a555] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#00bf63]/50 transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none focus:ring-2 focus:ring-lime-400 p-2 rounded-lg text-gray-800 hover:text-lime-500 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={[
            'md:hidden transition-all duration-300 overflow-hidden',
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
          ].join(' ')}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg rounded-lg border border-gray-200 mt-2 shadow-lg">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-800 hover:text-[#00bf63] block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#00bf63] hover:bg-[#00a555] text-white px-4 py-2 rounded-lg font-semibold w-full mt-4 hover:shadow-lg hover:shadow-[#00bf63]/50 transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
