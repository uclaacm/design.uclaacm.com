import { StrictMode } from 'react'
import './styles/global.css'
import { createRoot } from 'react-dom/client'
import Header from './components/layout/Header.tsx'
import Footer from './components/layout/Footer.tsx'
import HeroSection from './components/sections/HeroSection.tsx'
import AboutHero from './components/sections/AboutHero.tsx'
import MeetOurBoard from './components/sections/MeetOurBoard.tsx'
import MeetOurOfficers from './components/sections/MeetOurOfficers.tsx'
import Alumni from './components/sections/Alumni.tsx'
import EventsProjectsSection from './components/sections/EventsProjectsSection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <AboutHero/>
    <MeetOurBoard/>
    <MeetOurOfficers/>
    <Alumni/>
    <Footer/>
  </StrictMode>,
)
