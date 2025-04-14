"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt'
import { ExternalLink, Github } from "lucide-react"
import image1 from "../assets/santa.png"
import image2 from "../assets/user.png"
import image3 from "../assets/how_it_works_pic_updated.webp"
import image4 from "../assets/todo.jpg"

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
    title: "Santa Clause Portfolio",
    description: "A fully responsive santa clause portfolio website",
    image: image1,
    technologies: ["Html", "Css"],
    liveLink: "https://meetthomas.github.io/santaclause-portfolio/",
    githubLink: "https://github.com/meetThomas/santaclause-portfolio",
  },
  {
    id: 2,
    title: "User identification system",
    description: "A simple databse that stores and shows data based on user ID and role",
    image: image2,
    technologies: ["Html", "Node.js", "Express.js", "MySql"],
    liveLink: "Not yet live",
    githubLink: "https://github.com/meetThomas/USER_IDENTFICATION_SYSTEM",
  },
  {
    id: 3,
    title: "HouseMate Hub",
    description: "A web application for managing household works and book services",
    image: image3,
    technologies: ["React", "D3.js", "Node.js", "MQTT"],
    liveLink: "Not yet live",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    description: "A platform fitness tracking app for users to do workouts and track their progress (In development)",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
    technologies: [],
    liveLink: "Not yet live",
    githubLink: "Under development",
  },
  {
    id: 5,
    title: "To do list",
    description: "A simple to do list app to manage your tasks (In development)",
    image: image4,
    technologies: [],
    liveLink: "Not yet live",
    githubLink: "Under development",
  },
]

const ProjectSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleCardClick = (id: number) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement
          if (entry.isIntersecting) {
            target.classList.add("in-view")
          } else {
            target.classList.remove("in-view")
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [isMobile])

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-heading">
          <div className="projects__background-text">PROJECTS</div>
          <h2 className="section-heading__title">MY PROJECTS</h2>
          <p className="projects__description">
            Here are some of my completed projects and ongoing works.
          </p>
        </div>

        <div className="projects-container">
          <div className="card-fan">
            {projects.map((project, index) => {
              const totalCards = projects.length
              const middleIndex = (totalCards - 1) / 2
              const distanceFromMiddle = index - middleIndex

              const baseRotation = distanceFromMiddle * 5
              const baseX = distanceFromMiddle * 150
              const baseY = Math.abs(distanceFromMiddle) * 5

              return (
                <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                  initial={{
                    opacity: isMobile ? 1 : 0,
                    rotate: isMobile ? 0 : baseRotation,
                    x: isMobile ? 0 : baseX,
                    y: isMobile ? 0 : baseY,
                    scale: 1,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: isMobile ? 0 : (selectedId === project.id ? 0 : baseRotation),
                    x: isMobile ? 0 : (selectedId === project.id ? 0 : baseX),
                    y: isMobile ? 0 : (selectedId === project.id ? -50 : baseY),
                    scale: selectedId === project.id ? 1.1 : 1,
                    zIndex: selectedId === project.id ? 50 : 5,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 25
                    }
                  }}
                  onClick={() => handleCardClick(project.id)}
                  className={`project-card ${selectedId === project.id ? 'selected' : ''}`}
                >
                  <Tilt
                    tiltEnable={!isMobile}
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    scale={1}
                    transitionSpeed={2000}
                    className="project-card__inner"
                    style={{
                      transformStyle: isMobile ? "flat" : "preserve-3d",
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
