interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

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

  const experiences: Experience[] = [
    {
      title: "Web Development Intern",
      company: "Luminar Technolab",
      duration: "Aug 2023 - Nov 2023",
      description: [
        "Developed and maintained responsive web applications using React.js",
        "Collaborated with senior developers to implement new features",
        "Worked on both frontend and backend development tasks",
        "Gained hands-on experience with Node.js and MongoDB"
      ]
    }
  ];

  return (
    <section id="about" className="about section">
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

            <div className="about__section">
              <div className="about__section-heading">
                <h4 className="about__section-title">Experience</h4>
              </div>
              <div className="experience-container">
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <h5 className="experience-title">{exp.title}</h5>
                      <p className="experience-company">{exp.company}</p>
                      <span className="experience-duration">{exp.duration}</span>
                    </div>
                    <ul className="experience-description">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
