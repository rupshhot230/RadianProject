import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import HeroSection from './components/Hero/HeroSection.jsx'
import RadianEXR from './components/Hero/RadianEXR.jsx'
import { Showcase } from './components/Showcase/Showcase.jsx'
import { Performance } from './components/Performance/Performance.jsx'
import { ReserveCTA } from './components/ReserveCTA/ReserveCTA.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <RadianEXR />
      <Showcase />
      <Performance />
      <ReserveCTA />
      <Footer />
    </>
  )
}

export default App
