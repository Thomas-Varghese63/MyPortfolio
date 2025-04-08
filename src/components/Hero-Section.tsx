import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h2 className="hero__greeting">Hi There, I'm</h2>
            <h1 className="hero__name">
              Thomas Varghese
              <div className="hero__name-underline"></div>
            </h1>
            <h3 className="hero__title">Freelance</h3>
            <p className="hero__description">
              The dynamics of how users interact with interactive elements within a user interface flow chart based on
              container proportion.
            </p>
            <a href="#contact" className="contact-button">
              <div className="contact-text">Contact Me</div> 
            </a>
          </div>

          <div className="hero__image-container">
            {/* Decorative elements */}
            <div className="hero__image-circle hero__image-circle--border"></div>
            <div className="hero__image-circle hero__image-circle--accent"></div>
            <div className="hero__image-circle hero__image-circle--dotted"></div>

            {/* Profile image */}
            <div className="hero__image">
              <img src="/placeholder.svg" alt="Zemo Plakson" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>

      {/* Social media sidebar */}
      <div className="hero__social">
        <a href="#" className="hero__social-link" aria-label="Facebook">
          <Facebook size={20} />
        </a>
        <a href="#" className="hero__social-link" aria-label="Twitter">
          <Twitter size={20} />
        </a>
        <a href="#" className="hero__social-link" aria-label="Instagram">
          <Instagram size={20} />
        </a>
        <a href="#" className="hero__social-link" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
      </div>
    </section>
  )
}
