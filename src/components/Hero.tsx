'use client'

import Image from 'next/image'

const Hero = () => {
  return (
    <section id="hero" className="relative pt-36 pb-16 sm:pt-[9.5rem] sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Bigger centered logo – no circle/wrapper */}
        <div className="mx-auto mb-6 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Macani Solutions Logo"
            width={2000}
            height={2000}
            priority
            className="h-auto w-[36rem] sm:w-[40rem] md:w-[44rem] lg:w-[48rem] xl:w-[56rem] object-contain"
          />
        </div>

        {/* Keep these if you want supporting text; remove if you want ONLY the logo */}
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Scale Your Operations with Expert Solutions
        </p>

        <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
          Innovative IT consulting startup delivering cutting-edge technology solutions across
          Florida, Dubai, and Riyadh. Transform your business with our expert services.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg bg-[#00bf63] px-6 py-3 font-semibold text-white shadow-lg shadow-[#00bf63]/40 transition-transform duration-200 hover:scale-[1.03] hover:bg-[#00a555]"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-[#00bf63] px-6 py-3 font-semibold text-[#00bf63] transition-colors duration-200 hover:bg-[#00bf63] hover:text-white"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
