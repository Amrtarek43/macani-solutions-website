'use client'

import { useState, useEffect } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentText, setCurrentText] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const heroTexts = [
    'Transform Your Business with Technology',
    'Scale Your Operations with Expert Solutions',
    'Innovate with Trusted IT Consulting',
  ]

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (isTyping) {
      if (displayText.length < heroTexts[currentText].length) {
        timeout = setTimeout(() => {
          setDisplayText(heroTexts[currentText].slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setCurrentText((prev) => (prev + 1) % heroTexts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentText, heroTexts])

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4NGNjMTYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Hero Content */}
        <div className="mb-8">
          {/* Very Large Logo */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-4 shadow-2xl">
              <img 
                src="/logo.png" 
                alt="Macani Solutions Logo" 
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-[#00bf63] to-[#00a555] bg-clip-text text-transparent">
              Macani Solutions
            </span>
          </h1>
          
          {/* Animated Text */}
          <div className="h-20 flex items-center justify-center mb-8">
            <p className="text-xl md:text-2xl text-gray-700 min-h-[2em] flex items-center">
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-[#00bf63] ml-1 animate-pulse"></span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Innovative IT consulting startup delivering cutting-edge technology solutions 
            across Florida, Dubai, and Riyadh. Transform your business with our expert services.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection('services')}
            className="bg-[#00bf63] hover:bg-[#00a555] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-[#00bf63]/50 transform hover:scale-105 transition-all duration-300"
          >
            Explore Our Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-[#00bf63] text-[#00bf63] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00bf63]/10 hover:border-[#00a555] transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-[#00bf63] transition-all duration-300">
            <div className="text-4xl font-orbitron font-bold text-[#00bf63] mb-2">3</div>
            <div className="text-gray-700 font-medium">Global Locations</div>
            <div className="text-gray-500 text-sm">USA • UAE • KSA</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-lime-300 transition-all duration-300">
            <div className="text-4xl font-orbitron font-bold text-[#00bf63] mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Support Available</div>
            <div className="text-gray-500 text-sm">Always Here for You</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-lime-300 transition-all duration-300">
            <div className="text-4xl font-orbitron font-bold text-[#00bf63] mb-2">100%</div>
            <div className="text-gray-700 font-medium">Client Satisfaction</div>
            <div className="text-gray-500 text-sm">Quality Guaranteed</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-lime-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-lime-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
