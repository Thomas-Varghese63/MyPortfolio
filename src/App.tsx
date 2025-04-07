import Header from './components/Header'
import HeroSection from "./components/Hero-Section"
import AboutSection from "./components/About-Section"
import ServicesSection from "./components/Services-Section"
import ExperienceSection from "./components/Experience-Section"
import ContactSection from "./components/Contact-Section"
import Footer from "./components/Footer"

function App() {
  return (
    <main>
      <div className="wavy-bg"></div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
