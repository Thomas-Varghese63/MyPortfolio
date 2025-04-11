export default function AboutSection() {
  const technologies = [
    {name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"},
    {name:"C", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"},
    { name: "HTML", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "TypeScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
    { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
    { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
    {name:"supabase", logo:"https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg"},
      ]

  return (
    <section id="about-us" className="about section">
      <div className="container">
        <div className="about__content">
          <div className="about__background-text">ABOUT</div>
          <h3 className="section-heading-title">ABOUT ME</h3>
          <div className="about__info">
            <div className="about__section">
              <div className="about__section-heading">
                 
              </div>
              <p className="about__intro">Hiii, I am Thomas Varghese ! </p>
              <p className="about__description">
              I am a passionate and dedicated B.Tech Computer Science Engineering student with a strong
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
                 <h4 className="about__section-title">Technologies and Skills</h4>
              </div>

              <div className="tech-scroll-container">
                <div className="tech-scroll">
                  {/* Duplicate the technologies array to create a seamless loop */}
                  {[...technologies, ...technologies].map((tech, index) => (
                    <div key={index} className="tech-item">
                      <div className="tech-logo">
                        <img src={tech.logo} alt={tech.name} />
                      </div>
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
