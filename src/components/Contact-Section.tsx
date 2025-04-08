"use client"
 
import { useState } from "react"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Message sent! (This is a demo)")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

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
              <p className="contact-section__text">info@domainname.com</p>
              <p className="contact-section__text">support@domain.com</p>
            </div>

            <div className="contact-section">
              <div className="contact-section__heading">
                <div className="section-bar"></div>
                <h4 className="contact-section__title">Visit My Studio</h4>
              </div>
              <p className="contact-section__text">Warrawe Park Streetperrine,</p>
              <p className="contact-section__text">FL 33157 New York City</p>
            </div>

            <div className="contact-section">
              <div className="contact-section__heading">
                <div className="section-bar"></div>
                <h4 className="contact-section__title">Phone</h4>
              </div>
              <p className="contact-section__text">+01 123 654 8096</p>
            </div>

            <div className="contact__social">
              <a href="#" className="contact__social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="contact__social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="contact__social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="contact__social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="contact__form-container">
            <h4 className="contact__form-title">Get In Touch</h4>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form__row">
                <input
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-form__input"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-form__input"
                />
              </div>
              <input
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
                required
                className="contact-form__input"
              />
              <textarea
                name="message"
                placeholder="Your message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="contact-form__textarea"
              />
              <button type="submit" className="contact-form__button">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="contact__background-text">CONTACT</div>
    </section>
  )
}
