export default function AboutSection() {
  const designTools = ["Adobe Xd", "Illustrator", "Photoshop", "Figma", "Sketch"];
  const technologies = [
    "Html",
    "Css",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySql",
    "Python",
    "Ui/Ux Design",
  ];

  return (
    <section id="about-us" className="about section">
      <div className="container">
        <div className="about__content">
          <div className="about__image">
            <img src="/placeholder.svg" alt="About Me" width={500} height={600} />
          </div>

          <div className="about__info">
            <div className="about__section">
              <div className="about__section-heading">
                <div className="section-bar"></div>
                <h3 className="about__section-title">About Me</h3>
              </div>
              <p className="about__intro">Hiii!, I am Thomas Varghese </p>
              <p className="about__description">
              I am a passionate and dedicated B.Tech Computer Science Engineerung student with a strong
              interest in web development, software development, and data analysis. I thrive on
              solving complex problems and continuously learning new technologies to enhance
              my skills.
              With a hardworking mindset and adaptability, I can quickly adjust to new challenges
              and environments. I also possess strong communication skills, allowing me to
              collaborate effectively with teams and convey technical concepts clearly.
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
  );
}
