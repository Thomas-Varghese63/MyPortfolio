import React from 'react';
import { GraduationCap, School } from 'lucide-react';
import { motion } from 'framer-motion';
import image1 from '../assets/kj.png';
import image2 from '../assets/image.png';

interface EducationStep {
  title: string;
  institution: string;
  passoutYear?: string;
  icon: React.ReactNode;
  color: string;
  logo: string;
}

const educationJourney: EducationStep[] = [
  {
    title: '10th',
    institution: 'KRISTU JYOTHI H.S.S',
    passoutYear: '2019-20',
    icon: <School className="icon" />,
    color: '#8B5CF6',
    logo: image1
  },
  {
    title: '+2',
    institution: 'KRISTU JYOTHI H.S.S',
    passoutYear: '2020-22',
    icon: <School className="icon" />,
    color: '#EF4444',
    logo: image1
  },
  {
    title: 'B.TECH COMPUTER SCIENCE AND ENGINEERING',
    institution: 'ST. JOSEPH' + '\n' + 'S COLLEGE OF ENGINEERING AND TECHNOLOGY',
    passoutYear: '2022-26',
    icon: <GraduationCap className="icon" />,
    color: '#10B981',
    logo: image2
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: { opacity: 0, y: direction === 'up' ? 20 : -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5 }
    }
  };
};

export default function EducationSection() {
  return (
    <section id="education" className="education section">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div 
          className="section-heading"
          variants={fadeIn('down', 0.2)}
        >
          <h2 className="section-heading-background">EDUCATION</h2>
          <h3 className="section-heading__title">EDUCATION</h3>
        </motion.div>

        <motion.div 
          className="timeline"
          variants={staggerContainer}
        >
          <div className="timeline-track">
            {educationJourney.map((step, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={fadeIn('up', 0.3 * (index + 1))}
              >
                <div className="timeline-point">
                  {step.icon}
                </div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <h4>{step.institution}</h4>
                  <img 
                    src={step.logo} 
                    alt={`${step.institution} logo`} 
                    className="institution-logo"
                  />
                  <p>{step.passoutYear}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}