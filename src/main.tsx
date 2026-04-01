import { StrictMode } from 'react'
import './styles/global.css'
import { createRoot } from 'react-dom/client'
import Header from './components/layout/Header.tsx'
import Footer from './components/layout/Footer.tsx'
import ImagePlaceholder from './components/common/ImagePlaceholder.tsx'
import Carousel from './components/common/Carousel.tsx'
import Card from './components/common/Card.tsx'
import HeroSection from './components/sections/HeroSection.tsx'
import AboutUs from './components/sections/AboutUs.tsx'
import EventsProjectsSection from './components/sections/EventsProjectsSection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <HeroSection></HeroSection>
    <AboutUs></AboutUs>
    <EventsProjectsSection />
    <Footer/>
  </StrictMode>,
)
