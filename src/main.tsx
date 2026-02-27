import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/layout/Header.tsx'
import Footer from './components/layout/Footer.tsx'
import ImagePlaceholder from './components/common/ImagePlaceholder.tsx'
import Carousel from './components/common/Carousel.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <ImagePlaceholder/>
    <Carousel/>
    <Footer/>
  </StrictMode>,
)
