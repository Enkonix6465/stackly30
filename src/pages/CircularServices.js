import React, { useRef, useEffect, useState } from 'react';
import './CircularServices.css';

const services = [
  { name: 'Event Stage Set-ups', },
  { name: 'Event Printing and Designing',  },
  { name: 'Event Lights Set-up',  },
  { name: 'Event Sound Set-up',  },
  { name: 'Event Entertainment',  },
  { name: 'Event AV Set-up',  },
];

function CircularServices() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="circular-services-section">
      <div className="circular-services-container">
        {/* Left-side content */}
        <div className="circular-services-content-wrapper">
          <div className="section-header-line"></div>
          <p className="section-sub-heading">WE PLAN AND DELIVER</p>
          <h2 className="section-main-heading">EVENT SERVICES</h2>
          <p className="section-tagline">to meet your expectations</p>
          <div className="content-break"></div>
          <p className="section-description-circle">
            Our process of understanding your objectives and building the event step by step
            from there helps us provide for any requirement you may have.
            Our end-to-end event services portfolio is updated constantly to match global standards and deliver
            fresh and engaging experiences for clients and attendees alike.
          </p>
        </div>
        
        {/* Right-side circular layout */}
        <div className={`circular-layout-wrapper ${isVisible ? 'animate' : ''}`}>
          <div className="center-circle">
            <p className="center-text">Pegasus Events</p>
          </div>
          {services.map((service, index) => {
            const numServices = services.length;
            const angle = (index / numServices) * 360;
            return (
              <div
                key={index}
                className="service-circle"
                style={{
                  '--angle': `${angle}deg`,
                  '--delay': `${index * 0.15}s`,
                }}
              >
                
                <p>{service.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CircularServices;