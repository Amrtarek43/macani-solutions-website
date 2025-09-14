'use client'

import { useState, useEffect } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

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

    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      observer.observe(aboutSection)
    }

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      title: 'Innovation',
      description: 'Cutting-edge technology solutions that drive business growth',
      icon: '💡'
    },
    {
      title: 'Reliability',
      description: '24/7 support ensuring your operations never stop',
      icon: '🔧'
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering exceptional service quality',
      icon: '⭐'
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-gray-900">About </span>
            <span className="bg-gradient-to-r from-[#00bf63] to-[#00a555] bg-clip-text text-transparent">
              Macani Solutions
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#00bf63] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            An innovative IT consulting startup transforming businesses through technology 
            across Florida, Dubai, and Riyadh.
          </p>
        </div>

        {/* Company Story */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h3 className="text-3xl font-orbitron font-bold text-gray-900 mb-6">
              Pioneering Technology Excellence
            </h3>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Founded with a vision to transform businesses through technology, Macani Solutions 
                has established itself as a trusted partner for organizations worldwide.
              </p>
              <p>
                Our comprehensive approach combines strategic consulting, robust managed services, 
                and efficient outsourcing solutions to deliver measurable business value.
              </p>
              <p>
                With expertise in emerging technologies and a commitment to innovation, we help 
                organizations navigate their digital transformation journey with confidence.
              </p>
            </div>
            <div className="mt-8">
              <button 
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const element = document.getElementById('services')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }
                }}
                className="bg-[#00bf63] hover:bg-[#00a555] text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#00bf63]/50 transform hover:scale-105 transition-all duration-300"
              >
                Explore Our Services
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Professional team in modern office"
              className="rounded-lg shadow-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.background = 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #f3f4f6 100%)';
                target.style.display = 'block';
                target.style.width = '600px';
                target.style.height = '400px';
              }}
            />
            <div className="absolute -inset-2 bg-gradient-to-r from-lime-400/20 to-transparent rounded-lg blur-lg -z-10"></div>
          </div>
        </div>

        {/* Core Values - Simplified */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:border-[#00bf63] transition-all duration-300 group-hover:transform group-hover:scale-105 text-center">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-orbitron font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
