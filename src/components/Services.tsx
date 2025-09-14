'use client'

import { useState, useEffect } from 'react'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)

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

    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      observer.observe(servicesSection)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: 'IT Consulting',
      description: 'Strategic technology consulting and digital transformation guidance',
      features: [
        'Digital Strategy Development',
        'Technology Assessment',
        'Infrastructure Planning',
        'Security Consulting'
      ],
      icon: '💡'
    },
    {
      title: 'Managed Services',
      description: 'Comprehensive 24/7 IT support and infrastructure management',
      features: [
        '24/7 System Monitoring',
        'Proactive Maintenance',
        'Help Desk Support',
        'Data Backup & Recovery'
      ],
      icon: '🔧'
    },
    {
      title: 'Cloud Solutions',
      description: 'Enterprise cloud infrastructure and migration services',
      features: [
        'Cloud Strategy & Planning',
        'Migration Services',
        'Multi-Cloud Management',
        'Cost Optimization'
      ],
      icon: '☁️'
    },
    {
      title: 'Technology Outsourcing',
      description: 'Complete IT operations and development outsourcing solutions',
      features: [
        'Software Development',
        'Quality Assurance',
        'DevOps & Automation',
        'Technical Support'
      ],
      icon: '🚀'
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
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-to-r from-[#00bf63] to-[#00a555] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#00bf63] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-300 ${
                activeService === index ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className={`bg-white border-2 rounded-lg p-6 h-full transition-all duration-300 shadow-lg ${
                activeService === index 
                  ? 'border-[#00bf63] shadow-[#00bf63]/25' 
                  : 'border-gray-200 hover:border-[#00bf63]/50'
              }`}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-orbitron font-bold text-gray-900 mb-3 group-hover:text-[#00bf63] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className={`mt-4 text-[#00bf63] text-sm font-semibold transition-all duration-300 ${
                  activeService === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  Click to learn more →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service View */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{services[activeService].icon}</span>
                  <h3 className="text-3xl font-orbitron font-bold text-gray-900">
                    {services[activeService].title}
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {services[activeService].description}
                </p>
                
                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {services[activeService].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#00bf63] rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="bg-[#00bf63] hover:bg-[#00a555] text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#00bf63]/50 transform hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#00bf63]/10 to-gray-50 p-8 rounded-lg border border-[#00bf63]/20">
                  <h4 className="text-xl font-orbitron font-bold text-gray-900 mb-4">
                    Why Choose {services[activeService].title}?
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    <p>✨ Expert team with proven experience</p>
                    <p>🌍 Global delivery across USA, UAE, and Saudi Arabia</p>
                    <p>🚀 Cutting-edge technology solutions</p>
                    <p>💡 Innovative approach to problem-solving</p>
                    <p>🤝 Dedicated support and partnership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-[#00bf63]/10 to-gray-50 border border-[#00bf63]/20 rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
              Let our experts help you design and implement the perfect technology solution.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-[#00bf63] hover:bg-[#00a555] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-[#00bf63]/50 transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
