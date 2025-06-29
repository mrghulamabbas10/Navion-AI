import React from 'react'
import Hero from '../components/Hero' 
import Feature from '../components/Feature'
import ChartSection from '../components/chart-section'
import Join from '../components/join'
import Slider from '../components/slider' 
import GetStart from '../components/GetStart'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import SplashCursor from '../components/animations/SplashCursor'
import NavionAISection from '../components/reviews'

export default function Home() {
  return (
    <>
      {/* <SplashCursor /> */}
      <Navbar />
      <Hero />
      {/* <Section2 /> */}
      <Feature />
      <ChartSection />
      <Join />
      <Slider />
      <NavionAISection />
      <GetStart />
      <Footer />
    </>
  )
}
