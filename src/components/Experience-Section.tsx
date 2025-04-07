export default function ExperienceSection() {
    const experiences = [
      {
        period: "Sep, 2016 - May, 2017",
        title: "Junior Designer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        location: "Las Vegas, USA",
      },
      {
        period: "Sep, 2016 - May, 2017",
        title: "Systems Analyst / Web Developer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        location: "Las Vegas, USA",
      },
      {
        period: "Sep, 2016 - May, 2017",
        title: "Full Stack Developer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        location: "Las Vegas, USA",
      },
      {
        period: "Sep, 2016 - May, 2017",
        title: "Full Stack Developer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        location: "Las Vegas, USA",
      },
    ]
  
    return (
      <section id="portfolio" className="experience section">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__background">EXPERIENCE</h2>
            <h3 className="section-heading__title">MY EXPERIENCE</h3>
          </div>
  
          <div className="experience__list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-card__content">
                  <div className="experience-card__date">{exp.period}</div>
                  <div className="experience-card__info">
                    <h4 className="experience-card__title">{exp.title}</h4>
                    <p className="experience-card__description">{exp.description}</p>
                    <p className="experience-card__location">- {exp.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="experience__background-text">EXPERIENCE</div>
      </section>
    )
  }
  
  