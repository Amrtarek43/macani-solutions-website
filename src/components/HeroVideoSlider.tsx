
'use client'

import { useState, useEffect } from 'react'

const SOURCES = [
  {
    src: '/slides/3130284-uhd_3840_2160_30fps.mp4',
    title: 'Innovative IT Consulting',
    subtitle: 'Delivering cutting-edge solutions across Florida, Dubai, and Riyadh.',
  },
  {
    src: '/slides/4990233-hd_1920_1080_30fps.mp4',
    title: 'Scale with Expert Solutions',
    subtitle: 'Helping your business grow with modern technology strategies.',
  },
]

const HeroVideoSlider = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SOURCES.length)
    }, 6000) // 6 seconds per slide
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Slides */}
      {SOURCES.map((video, index) => (
        <video
          key={index}
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl sm:text-6xl font-bold drop-shadow-lg mb-4">
          {SOURCES[current].title}
        </h1>
        <p className="text-lg sm:text-2xl max-w-2xl drop-shadow-lg">
          {SOURCES[current].subtitle}
        </p>
      </div>
    </section>
  )
}

export default HeroVideoSlider
