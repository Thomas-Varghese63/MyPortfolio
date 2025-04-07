import Image from "next/image"

export default function AboutSection() {
  const designTools = ["Adobe Xd", "Illustrator", "Photoshop", "Figma", "Sketch"]
  const technologies = [
    "Html",
    "Css",
    "Scss",
    "Less",
    "jQuery",
    "php",
    "React",
    "Javascript",
    "Graphic Design",
    "Art Design",
    "Ui/Ux Design",
  ]

  return (
    <section id="about-us" className="about section">
      <div className="container">
        <div className="about__content">
          <div className="about__image">
            <Image src="/placeholder.svg?height=600&width=500" alt="About Me" width={500} height={600} />
          </div>

          <div className="about__info">
            <div className="about__section">
              <div className="about__section-heading">
                <div className="section-bar"></div>
                <h3 className="about__section-title">About Me</h3>
              </div>
              <p className="about__intro">Hello, my name is Zemo and I am UX/UI designer and front-end developer</p>
              <p className="about__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>

            <div className="about__section">
              <div className="about__section-heading">
                <div className="section-bar"></div>
                <h4 className="about__section-title">Design Tools</h4>
              </div>
              <div className="about__skills">
                {designTools.map((tool) => (
                  <span key={tool} className="about__skill">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="about__section">
              <div className="about__section-heading">
                <div className="section-bar"></div>
                <h4 className="about__section-title">Technologies and Skills</h4>
              </div>
              <div className="about__skills">
                {technologies.map((tech) => (
                  <span key={tech} className="about__skill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="about__section">
              <div className="about__section-heading">
                <div className="section-bar"></div>
                <h4 className="about__section-title">Work Process</h4>
              </div>
              <div className="about__process">
                {["Research", "Design", "Coding", "Launch"].map((step, index) => (
                  <div key={step} className="about__process-item">
                    <div className="about__process-circle">{`0${index + 1}`}</div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__background-text">ABOUT</div>
    </section>
  )
}

