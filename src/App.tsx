import Header from './components/Header'
import HeroSection from './components/Hero-Section'
import AboutSection from './components/About-Section'
import EducationSection from './components/Education-Section'
import ProjectSection from './components/Project-Section'
import ServicesSection from './components/Services-Section'
import ExperienceSection from './components/Experience-Section'
import ContactSection from './components/Contact-Section'
import Footer from './components/Footer'
import './styles/global.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/education.css'
import './styles/project.css'
import './styles/services.css'
import './styles/experience.css'
import './styles/contact.css'
import './styles/footer.css'

function App() {
  return (
    <main>
      <div className="wavy-bg"></div>
      <Header />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App