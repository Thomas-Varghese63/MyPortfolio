import { useEffect, useRef } from "react"
import { ChevronsLeftRightIcon as ChevronsLeftRightEllipsis, ClipboardPen, DatabaseZap } from "lucide-react"
import image1 from "../assets/development.png"
import image2 from "../assets/content.jpg"
import image3 from "../assets/data.jpg"
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      y: direction === "up" ? 20 : -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  };
};

export default function ServicesSection() {
  const servicesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            if (isMobile) {
              entry.target.classList.add("in-view");
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    servicesRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      servicesRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    {
      icon: <ChevronsLeftRightEllipsis className="service-card__icon-svg" />,
      title: "Web Development",
      description:
        "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
      image: image1,
    },
    {
      icon: <ClipboardPen className="service-card__icon-svg" />,
      title: "Content Writing",
      description:
        "I write simple and effective content for businesses, including blogs, website text, and SEO content to help you reach more people.",
      image: image2,
    },
    {
      icon: <DatabaseZap className="service-card__icon-svg" />,
      title: "Data Analysis",
      description:
        "I analyze data to find useful patterns and insights that help businesses make smarter decisions. I'm currently pursuing data analysis as a service to help brands grow using real information and clear reports.",
      image: image3,
    },
  ];

  return (
    <section id="services" className="services section">
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
          <h2 className="section-heading__background">SERVICES</h2>
          <h3 className="section-heading__title">MY SERVICES</h3>
        </motion.div>

        <motion.div 
          className="services__grid"
          variants={staggerContainer}
        >
        {services.map((service, index) => (
  <motion.div
    key={index}
    className={`service-card service-card--${index + 1}`}
    variants={fadeIn('up', 0.3 * (index + 1))}
    ref={(el) => {
      servicesRef.current[index] = el!;
    }}
  >
    <div className="service-card__overlay">
      <div className="service-card__icon">{service.icon}</div>
      <h4 className="service-card__title">{service.title}</h4>
      <p className="service-card__description">{service.description}</p>
    </div>
  </motion.div>
))}

        </motion.div>
      </motion.div>
    </section>
  )
}
