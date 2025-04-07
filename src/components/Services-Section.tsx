import { Laptop, LayoutGrid, Layers, Smartphone, Bug, Settings } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Unique design",
      description:
        "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    },
    {
      icon: <LayoutGrid className="w-8 h-8" />,
      title: "Different Layout",
      description:
        "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
      active: true,
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Make it Simple",
      description:
        "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsiveness",
      description:
        "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Testing for Perfection",
      description:
        "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Advanced Options",
      description:
        "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    },
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__background">SERVICES</h2>
          <h3 className="section-heading__title">MY SERVICES</h3>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.active ? "service-card--active" : ""}`}>
              <div className="service-card__icon">{service.icon}</div>
              <h4 className="service-card__title">{service.title}</h4>
              <p className="service-card__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="services__background-text">SERVICES</div>
    </section>
  )
}

