'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Locations from '@/components/Locations'
import Careers from '@/components/Careers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Locations />
      <Careers />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  )
}
