"use client"
import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Download } from "lucide-react"
import profileImage from "../assets/passport_size_photo.png"
import { fadeIn, staggerContainer, textVariant, slideIn } from '../animation'

export default function HeroSection() {
  return (
    <section id="home" className="hero section">
      <motion.h2
        className="hero-heading-background"
        variants={fadeIn('right', 0.5)}
        initial="hidden"
        animate="show"
      >
        {['T', 'H', 'O', 'M', 'A', 'S'].map((letter, index) => (
          <motion.span
            key={index}
            variants={textVariant(0.15 * index)}
            initial="hidden"
            animate="show"
          >
            {letter}<br />
          </motion.span>
        ))}
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container"
      >
        <div className="hero__content">
          <motion.div
            className="hero__text"
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            animate="show"
          >
            <motion.h2
              className="hero__greeting"
              variants={textVariant(0.3)}
              initial="hidden"
              animate="show"
            >
              Hi There, I'm
            </motion.h2>
            <motion.h1
              className="hero__name"
              variants={textVariant(0.1)}
              initial="hidden"
              animate="show"
            >
              Thomas Varghese
              <div className="hero__name-underline"></div>
            </motion.h1>
            <motion.h3
              className="hero__title"
              variants={textVariant(0.3)}
              initial="hidden"
              animate="show"
            >
              Young Professional
            </motion.h3>
            <motion.p
              className="hero__description"
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              animate="show"
            >
              An enthusiastic learner who wish to explore the new horizons and contribute my skills to the digital landscape.
            </motion.p>
          </motion.div>

          <motion.div
            className="hero__image-container"
            variants={slideIn('left', 'tween', 0.2, 1)}
            initial="hidden"
            animate="show"
          >
            <div className="hero__image-circle hero__image-circle--border"></div>
            <div className="hero__image-circle hero__image-circle--accent"></div>
            <div className="hero__image-circle hero__image-circle--dotted"></div>
            <div className="hero__image">
              <img src={profileImage} alt="Thomas" width={500} height={500} />
            </div>
          </motion.div>

          <motion.a
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            animate="show"
            href="/THOMAS VARGHESE RESUME.pdf"
            download="THOMAS VARGHESE RESUME.pdf"
            className="resume-button"
            aria-label="Download Resume"
          >
            <div className="resume-text">
              Resume <Download size={20} className="contact-icon" />
            </div>
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="hero__social"
        variants={fadeIn('right', 0.6)}
        initial="hidden"
        animate="show"
      >
        <a href="https://github.com/meetThomas" className="hero__social-link" aria-label="GitHub">
          <Github size={22} />
        </a>
        <a href="https://www.instagram.com/thomas_._varghese/?__pwa=1" className="hero__social-link" aria-label="Instagram">
          <Instagram size={22} />
        </a>
        <a href="https://www.linkedin.com/in/thomas-varghese-836000280/" className="hero__social-link" aria-label="LinkedIn">
          <Linkedin size={22} />
        </a>
      </motion.div>
    </section>
  )
}
