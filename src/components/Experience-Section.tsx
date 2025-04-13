"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt';import { ExternalLink, Github } from "lucide-react"


interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveLink: string
  githubLink: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "An intelligent chat application powered by machine learning",
    image: "https://images.unsplash.com/photo-1495592822108-9e6261896da8?auto=format&fit=crop&q=80&w=800",
    technologies: ["Python", "TensorFlow", "WebSocket", "React"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Smart Home Dashboard",
    description: "A comprehensive IoT dashboard for smart home devices",
    image: "https://images.unsplash.com/photo-1558002038-876f1d8e9f89?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "D3.js", "Node.js", "MQTT"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    description: "A mobile-first fitness tracking application",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
    technologies: ["React Native", "GraphQL", "Node.js", "PostgreSQL"],
    liveLink: "#",
    githubLink: "#",
  },
]

const ExperienceSection = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [previouslySelected, setPreviouslySelected] = useState<number | null>(null)

  const handleCardClick = (id: number) => {
    if (selectedId === id) {
      setPreviouslySelected(id)
      setSelectedId(null)
    } else {
      setSelectedId(id)
    }
  }

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <div className="section-heading__background">PROJECTS</div>
          <h2 className="section-heading__title">
            My Projects
          </h2>
        </div>

        <div className="projects-container">
          <div className="card-fan">
            {projects.map((project, index) => {
              const isSelected = selectedId === project.id
              const wasSelected = previouslySelected === project.id

              // Calculate position and rotation for fan layout
              // Middle cards are more upright, outer cards have more extreme angles
              const totalCards = projects.length
              const middleIndex = (totalCards - 1) / 2
              const distanceFromMiddle = index - middleIndex

              // Calculate rotation - middle cards are more upright
              const baseRotation = distanceFromMiddle * 12

              // Calculate horizontal position - create a fan effect
              const baseX = distanceFromMiddle * 40

              // Calculate vertical position - middle cards are higher
              const baseY = Math.abs(distanceFromMiddle) * 10

              // Calculate z-index - middle cards are on top in default state
              const baseZIndex = 10 - Math.abs(distanceFromMiddle)

              return (
                <motion.div
                  key={project.id}
                  layoutId={`project-${project.id}`}
                  initial={{
                    opacity: 0,
                    rotate: baseRotation,
                    x: baseX,
                    y: baseY,
                    scale: 1,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: isSelected ? 0 : baseRotation,
                    x: isSelected ? 0 : baseX,
                    y: isSelected ? -20 : baseY,
                    scale: isSelected ? 1.1 : 1,
                    zIndex: isSelected ? 50 : baseZIndex,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: 100,
                    transition: { duration: 0.2 },
                  }}
                  whileHover={{
                    y: isSelected ? -20 : baseY - 10,
                    scale: isSelected ? 1.1 : 1.05,
                    zIndex: isSelected ? 50 : baseZIndex + 5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className={`project-card ${isSelected ? "selected" : ""} ${wasSelected ? "was-selected" : ""}`}
                  onClick={() => handleCardClick(project.id)}
                >
                  <Tilt
                    tiltEnable={true}
                    tiltMaxAngleX={isSelected ? 5 : 15}
                    scale={1}
                    transitionSpeed={1000}
                    className="project-card__inner"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="project-card__content">
                      <div className="project-card__image-container">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="project-card__image"
                        />
                        <div className="project-card__overlay"></div>
                      </div>

                      <div className="project-card__details">
                        <h3 className="project-card__title">{project.title}</h3>
                        <p className="project-card__description">{project.description}</p>

                        <div className="project-card__technologies">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="technology-tag">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="project-card__links">
                          <a
                            href={project.liveLink}
                            className="project-card__link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={20} />
                            <span>Live Demo</span>
                          </a>
                          <a
                            href={project.githubLink}
                            className="project-card__link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={20} />
                            <span>Source Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
