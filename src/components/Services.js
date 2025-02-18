import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Database,
  BarChart2,
  Cpu,
  Cloud,
  Code,
  Lightbulb,
} from "lucide-react";
import "../assest/testimonialServices.css";
import client from "../assest/client.png";

const Services = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  const testimonials = [
    {
      name: "Janshi",
      position: "VP of Products and Technology",
      image: "/api/placeholder/48/48",
      quote: "The software development provided by kazmodels's team was instrumental in propelling the project forward, demonstrating their expertise in the field."
    },
    {
      name: "Sarah Chen",
      position: "CTO, TechCorp",
      image: "/api/placeholder/48/48",
      quote: "Outstanding collaboration and technical expertise. The team delivered exceptional results that exceeded our expectations."
    },
    {
      name: "Michael Rodriguez",
      position: "Director of Innovation",
      image: "/api/placeholder/48/48",
      quote: "Their innovative approach and dedication to quality made them the perfect partner for our digital transformation journey."
    }
  ];

  const services = [
    { icon: <Database className="service-icon" />, title: "AI Solutions", number: "01" },
    { icon: <BarChart2 className="service-icon" />, title: "Data & analytics", number: "02" },
    { icon: <Cpu className="service-icon" />, title: "IoT & Embedded Systems", number: "03" },
    { icon: <Cloud className="service-icon" />, title: "Cloud & Modernization services", number: "04" },
    { icon: <Code className="service-icon" />, title: "Software Engineering", number: "05" },
    { icon: <Lightbulb className="service-icon" />, title: "Innovation Consulting", number: "06" }
  ];

  const handlePrevious = () => {
    setSlideDirection('slide-right');
    setTimeout(() => {
      setCurrentTestimonial((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }, 10);
    setTimeout(() => setSlideDirection(''), 500);
  };

  const handleNext = () => {
    setSlideDirection('slide-left');
    setTimeout(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 10);
    setTimeout(() => setSlideDirection(''), 500);
  };

  const handleItemClick = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="main-container">
     <section className="testimonial-section">
        <div className="section-container">
          <div className="testimonial-header">
            <h2>What clients say about us</h2>
            <div className="nav-buttons">
              <button className="nav-button" onClick={handlePrevious}>
                <ChevronLeft size={20} />
              </button>
              <button className="nav-button" onClick={handleNext}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="testimonial-slider">
            <div className={`testimonial-content ${slideDirection}`}>
              <div className="client-avatar">
                <img src={client} alt="Client" />
              </div>
              <div className="testimonial-text">
                <h3>{testimonials[currentTestimonial].name}</h3>
                <p className="client-position">{testimonials[currentTestimonial].position}</p>
                </div>
                <div>
                <p className="testimonial-quote">{testimonials[currentTestimonial].quote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-container">
          <h2>How we can help you</h2>

          <div className="services-list">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-item ${
                  expandedItem === index ? "expanded" : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                <div className="service-header">
                  <div className="service-left">
                    {service.icon}
                    <span className="service-title">{service.title}</span>
                  </div>
                  <div className="service-right">
                    <span className="service-number">{service.number}</span>
                    <ChevronDown
                      className={`chevron ${
                        expandedItem === index ? "rotated" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="cta-button">Let's talk about my project</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
