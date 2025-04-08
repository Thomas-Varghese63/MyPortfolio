
import React from 'react';
import { GraduationCap, School } from 'lucide-react';

interface EducationStep {
  title: string;
  institution: string;
  passoutYear?: string;
  icon: React.ReactNode;
  color: string;
}

const educationJourney: EducationStep[] = [
  {
    title: '10th',
    institution: 'KRISTU JYOTHI H.S.S',
    passoutYear: '2019-20',
    icon: <School className="icon" />,
    color: '#8B5CF6'
  },
  {
    title: '+2',
    institution: 'KRISTU JYOTHI H.S.S',
    passoutYear: '2020-22',
    icon: <School className="icon" />,
    color: '#EF4444'
  },
  {
    title: 'B.TECH COMPUTER SCIENCE AND ENGINEERING',
    institution: 'ST. JOSEPH' + '\n' + 'S COLLEGE OF ENGINEERING AND TECHNOLOGY',
    passoutYear: '2022-26',
    icon: <GraduationCap className="icon" />,
    color: '#10B981'
  },
];

function EducationSection() {
  return (
    <section id="education" className="education section">
      <div className="section-heading">
        <h2 className="section-heading-background">MY EDUCATIONAL JOURNEY</h2>
        <h3 className="section-heading__title">EDUCATION</h3>
      </div>
    <div className="container">
      <div className="timeline">
        <div className="timeline-track">
          {educationJourney.map((step, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-point">
                {step.icon}
              </div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <h4>{step.institution}</h4>
                <p>{step.passoutYear}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     </section>
  );
}

export default EducationSection;