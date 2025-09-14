'use client'

import { useState, useEffect } from 'react'

const Locations = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeLocation, setActiveLocation] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    const locationsSection = document.getElementById('locations')
    if (locationsSection) {
      observer.observe(locationsSection)
    }

    return () => observer.disconnect()
  }, [])

  const locations = [
    {
      city: 'Miami',
      country: 'Florida, USA',
      description: 'Our North American headquarters providing comprehensive IT consulting and managed services to enterprise clients across the United States.',
      address: 'Biscayne Boulevard, Downtown Miami',
      phone: '+966503240661',
      email: 'support@macani.llc',
      highlights: [
        'North American Headquarters',
        'Enterprise Solutions Center',
        'Cloud Infrastructure Hub',
        '24/7 Support Operations'
      ],
      flag: '🇺🇸',
      timezone: 'EST (UTC-5)'
    },
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      description: 'Strategic location in Dubai\'s business district, connecting us with international clients and serving as our Middle East operations hub.',
      address: 'Sheikh Zayed Road, DIFC',
      phone: '+966503240661',
      email: 'support@macani.llc',
      highlights: [
        'Middle East Operations Hub',
        'International Business Center',
        'Technology Innovation Lab',
        'Regional Client Services'
      ],
      flag: '🇦🇪',
      timezone: 'GST (UTC+4)'
    },
    {
      city: 'Riyadh',
      country: 'Saudi Arabia',
      description: 'Serving the Saudi Arabian market with localized IT solutions and government relations, positioned in the heart of the kingdom\'s capital.',
      address: 'King Fahd Road, Olaya District',
      phone: '+966503240661',
      email: 'support@macani.llc',
      highlights: [
        'Saudi Arabia Regional Office',
        'Government Relations Hub',
        'Digital Transformation Center',
        'Local Support Services'
      ],
      flag: '🇸🇦',
      timezone: 'AST (UTC+3)'
    }
  ]

  const scrollToContact = () => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="locations" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-to-r from-[#00bf63] to-[#00a555] bg-clip-text text-transparent">
              Locations
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#00bf63] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Strategically positioned across key business centers in the USA, UAE, and Saudi Arabia.
          </p>
        </div>

        {/* Location Selection */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {locations.map((location, index) => (
            <button
              key={index}
              onClick={() => setActiveLocation(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeLocation === index
                  ? 'bg-[#00bf63] text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-[#00bf63]/10 hover:text-[#00bf63]'
              }`}
            >
              <span className="text-2xl">{location.flag}</span>
              <span>{location.city}</span>
            </button>
          ))}
        </div>

        {/* Active Location Details */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Location Image */}
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-lime-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">{locations[activeLocation].flag}</div>
                  <h3 className="text-3xl font-orbitron font-bold text-gray-900">{locations[activeLocation].city}</h3>
                  <p className="text-lime-500 text-lg font-medium">{locations[activeLocation].country}</p>
                </div>
              </div>

              {/* Location Information */}
              <div className="p-8">
                <h3 className="text-3xl font-orbitron font-bold text-gray-900 mb-4">
                  {locations[activeLocation].city} Office
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {locations[activeLocation].description}
                </p>

                {/* Contact Information */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00bf63]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#00bf63]">📍</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">Address</p>
                      <p className="text-gray-600">{locations[activeLocation].address}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center">
                      <span className="text-lime-500">📞</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">Phone</p>
                      <p className="text-gray-600">{locations[activeLocation].phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center">
                      <span className="text-lime-500">✉️</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">Email</p>
                      <p className="text-gray-600">{locations[activeLocation].email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center">
                      <span className="text-lime-500">🌍</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">Timezone</p>
                      <p className="text-gray-600">{locations[activeLocation].timezone}</p>
                    </div>
                  </div>
                </div>

                {/* Office Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Office Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {locations[activeLocation].highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#00bf63] rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="bg-[#00bf63] hover:bg-[#00a555] text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#00bf63]/50 transform hover:scale-105 transition-all duration-300"
                >
                  Contact This Office
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations
