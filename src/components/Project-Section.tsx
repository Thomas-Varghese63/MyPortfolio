"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt'
import { ExternalLink, Github } from "lucide-react"


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
  {
    id: 5,
    title: "AI Chat Application",
    description: "An intelligent chat application powered by machine learning",
    image: "https://images.unsplash.com/photo-1495592822108-9e6261896da8?auto=format&fit=crop&q=80&w=800",
    technologies: ["Python", "TensorFlow", "WebSocket", "React"],
    liveLink: "#",
    githubLink: "#",
  },
]

const ProjectSection = () => {
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
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-heading">
          <div className="projects__background-text">PROJECTS</div>
          <h2 className="section-heading__title">MY PROJECTS</h2>
        </div>

        <div className="projects-container">
          <div className="card-fan">
            {projects.map((project, index) => {
              const isSelected = selectedId === project.id
              const wasSelected = previouslySelected === project.id

              const totalCards = projects.length
              const middleIndex = (totalCards - 1) / 2
              const distanceFromMiddle = index - middleIndex

              // Reduce rotation and movement values
              const baseRotation = distanceFromMiddle * 15  // wider fan effect
              const baseX = distanceFromMiddle * 50        // more horizontal spacing
              const baseY = Math.abs(distanceFromMiddle) * 15

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
                    y: isSelected ? -10 : baseY, // Reduced from -20
                    scale: isSelected ? 1.05 : 1, // Reduced from 1.1
                    zIndex: isSelected ? 50 : 10 - Math.abs(distanceFromMiddle),
                    transition: {
                      type: "spring",
                      stiffness: window.innerWidth <= 1024 ? 0 : 200,
                      damping: window.innerWidth <= 1024 ? 0 : 25,
                    },
                  }}
                  whileHover={{
                    y: window.innerWidth <= 1024 ? 0 : (isSelected ? -10 : baseY - 5),
                    scale: window.innerWidth <= 1024 ? 1 : (isSelected ? 1.05 : 1.02),
                    transition: {
                      duration: 0.4, // Increased duration
                      ease: "easeOut",
                    },
                  }}
                  className={`project-card ${isSelected ? "selected" : ""} ${wasSelected ? "was-selected" : ""}`}
                  onClick={() => handleCardClick(project.id)}
                >
                  <Tilt
                    tiltEnable={!isSelected}
                    tiltMaxAngleX={8} // Reduced from 15
                    tiltMaxAngleY={8}
                    scale={1}
                    transitionSpeed={2000} // Increased from 1000
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

export default ProjectSection
