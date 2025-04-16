"use client"

import { Mail,Instagram, Linkedin} from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__background">CONTACT</h2>
          <h3 className="section-heading__title">CONTACT ME</h3>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact-section">
              <div className="contact-section__heading">
                <div className="section-bar"></div>
                <h4 className="contact-section__title">Email</h4>
              </div>
              <p className="contact-section__text">thomasvarghese540@gmail.com</p>
              <p className="contact-section__text">thomasvarghese2026@cs.sjcetpalai.ac.in</p>
            </div>

            

            <div className="contact-section">
              <div className="contact-section__heading">
                <div className="section-bar"></div>
                <h4 className="contact-section__title">Phone</h4>
              </div>
              <p className="contact-section__text">+91 8086365407</p>
            </div>

            <div className="contact__social">
              <a href="thomasvarghese540@gmail.com" className="contact__social-link" aria-label="Email">
                <Mail size={20} />
              </a>
               
              <a href="https://www.instagram.com/thomas_._varghese/?__pwa=1" className="contact__social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/thomas-varghese-836000280/" className="contact__social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

           
        </div>
      </div>
      
    </section>
  )
}
