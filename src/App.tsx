import { useState } from 'react'
import Intro from './components/Intro'
import Header from './components/Header'
import HeroSection from './components/Hero-Section'
import AboutSection from './components/About-Section'
import EducationSection from './components/Education-Section'
import ProjectSection from './components/Project-Section'
import ServicesSection from './components/Services-Section'
import ContactSection from './components/Contact-Section'
import Footer from './components/Footer'
import './styles/intro.css'
import './styles/global.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/education.css'
import './styles/project.css'
import './styles/services.css'
import './styles/contact.css'
import './styles/footer.css'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  return (
    <main>
      {showIntro ? (
        <Intro 
          onComplete={handleIntroComplete} 
          skipToHome={handleIntroComplete} 
        />
      ) : (
        <>
          <Header />
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ProjectSection />
          <ServicesSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </main>
  )
}

export default App