'use client'

import { useState, useEffect } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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

    const contactSection = document.getElementById('contact')
    if (contactSection) {
      observer.observe(contactSection)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="text-gray-900">Get In </span>
            <span className="bg-gradient-to-r from-[#00bf63] to-[#00a555] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#00bf63] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with technology? Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-orbitron font-bold text-gray-900 mb-6">
                Start Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00bf63] focus:border-transparent text-gray-900"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent text-gray-900"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent text-gray-900"
                      placeholder="+966503240661"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent text-gray-900"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent text-gray-900 resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00bf63] hover:bg-[#00a555] text-white py-4 px-6 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-[#00bf63]/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-lime-50 border border-lime-200 rounded-lg p-4 text-lime-700">
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:border-lime-300 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🏢</div>
                  <div>
                    <h4 className="text-xl font-orbitron font-bold text-gray-900 mb-2">
                      Headquarters
                    </h4>
                    <div className="space-y-1 text-gray-700">
                      <p><strong>Florida, USA</strong></p>
                      <p>North American Operations</p>
                      <p>+966503240661</p>
                      <p>support@macani.llc</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:border-lime-300 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🕒</div>
                  <div>
                    <h4 className="text-xl font-orbitron font-bold text-gray-900 mb-2">
                      Business Hours
                    </h4>
                    <div className="space-y-1 text-gray-700">
                      <p><strong>All Locations</strong></p>
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:border-lime-300 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🚨</div>
                  <div>
                    <h4 className="text-xl font-orbitron font-bold text-gray-900 mb-2">
                      24/7 Support
                    </h4>
                    <div className="space-y-1 text-gray-700">
                      <p><strong>Always Available</strong></p>
                      <p>Critical System Support</p>
                      <p>+966503240661 (Emergency)</p>
                      <p>support@macani.llc</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-lime-50 to-gray-50 border border-lime-200 rounded-lg p-6">
                <h4 className="text-xl font-orbitron font-bold text-gray-900 mb-4">
                  Need Immediate Assistance?
                </h4>
                <p className="text-gray-700 mb-4">
                  Our team is ready to help you with any urgent requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+966503240661"
                    className="bg-[#00bf63] text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-[#00a555] transition-colors"
                  >
                    📞 Call Now
                  </a>
                  <a
                    href="mailto:support@macani.llc"
                    className="border border-[#00bf63] text-[#00bf63] px-4 py-2 rounded-lg font-semibold text-center hover:bg-[#00bf63]/10 hover:border-[#00a555] transition-colors"
                  >
                    ✉️ Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
