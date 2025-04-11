import { Github, Instagram, Linkedin,Download,} from "lucide-react"
import profileImage from "../assets/passport_size_photo.png";




 
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
            <h3 className="hero__title">Young Professional</h3>
            <p className="hero__description">
            An enthusiastic learner who wish to explore the new horizons and contribute my skills to the digital landscape.
            </p>
          </div>

          <div className="hero__image-container">
            {/* Decorative elements */}
            <div className="hero__image-circle hero__image-circle--border"></div>
            <div className="hero__image-circle hero__image-circle--accent"></div>
            <div className="hero__image-circle hero__image-circle--dotted"></div>

            {/* Profile image */}
            <div className="hero__image">
            <img src={profileImage} alt="Thomas" width={500} height={500} />            </div>
          </div>

          {/* Moved resume button outside hero__text */}
          <a
            href="/THOMAS VARGHESE RESUME.pdf"
            download="THOMAS VARGHESE RESUME.pdf"
            className="resume-button"
            aria-label="Download Resume"
          >
            <div className="resume-text">
              Resume <Download size={20} className="contact-icon" />
            </div>
          </a>
        </div>
      </div>

      {/* Social media sidebar */}
      <div className="hero__social">
        <a href="https://github.com/meetThomas" className="hero__social-link" aria-label="Facebook">
          <Github size={22} />
        </a>
         
        <a href="https://www.instagram.com/thomas_._varghese/?__pwa=1" className="hero__social-link" aria-label="Instagram">
          <Instagram size={22} />
        </a>
        <a href="https://www.linkedin.com/in/thomas-varghese-836000280/" className="hero__social-link" aria-label="LinkedIn">
          <Linkedin size={22} />
        </a>
      </div>
    </section>
  )
}
