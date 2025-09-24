'use client'

import Image from 'next/image'

const HeroVideoSlider = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        src="/slides/3130284-uhd_3840_2160_30fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

        {/* Logo larger & lower */}
        <div className="mb-15 mt-60"> 
          <Image
            src="/SA.png"
            alt="Macani Solutions"
            width={420}   // increased size
            height={420}
            className="mx-auto object-contain"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-bold drop-shadow-lg mb-4">
          MACANI SOLUTIONS
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl max-w-2xl drop-shadow-lg">
          Empowering businesses with world-class outsourcing, managed services, and IT consulting.
        </p>
      </div>
    </section>
  )
}

export default HeroVideoSlider
