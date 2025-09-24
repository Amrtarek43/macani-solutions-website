'use client'

import Image from 'next/image'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between pt-20 pb-12"
    >
      {/* Logo section */}
      <div className="flex justify-center mt-12">
        <div className="relative w-[40rem] h-[16rem]">
          <Image
            src="/logo.png?v=2"
            alt="Macani Solutions Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Text + buttons anchored lower */}
      <div className="text-center text-white px-4 mb-10">
        <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
          Scale Your Operations with Expert Solutions
        </p>

        <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
          Innovative IT consulting startup delivering cutting-edge technology
          solutions across Florida, Dubai, and Riyadh. Transform your business
          with our expert services.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
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
