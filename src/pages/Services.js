import  { useEffect } from 'react';
import {  useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import "./Services.css";

const Services = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  useEffect(() => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');

        // Toggle the 'open' class on the answer and rotate the icon
        answer.classList.toggle('open');
        icon.classList.toggle('rotate');
      });
    });

    // Cleanup function to remove event listeners if the component unmounts
    return () => {
      faqQuestions.forEach(question => {
        question.removeEventListener('click', () => {});
      });
    };
  }, []);

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "service-page dark-mode" : "service-page light-mode"}>
      <div className="hero-container-service">
        <video
          className="hero-video-service"
          src="/images/hero-services.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-service">
          <h1 className="hero-tagline-service">Turning Ideas into Unforgettable Experiences</h1>
          <p className="hero-paragraph-service">
            We believe every event begins with a spark—a dream, a vision, an idea.
          </p>
          <div className="hero-btns-service">
            <button className="btn" onClick={()=>handleGetStarted("/contact")}>Contact Us</button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="services-section-service">
        <div className="services-container-service">
          <h2 className="services-heading-service">Our Event Management Services</h2>
          <p className="services-intro-service">
            From concept to execution, we handle every detail so you can enjoy your moment.
          </p>
          <div className="services-grid-service">
            <div className="service-card-service">
              <img src="/images/corporate-s.jpg" alt="Corporate Events" className="service-image-service" />
              <h3>Corporate Events</h3>
              <p>Conferences, product launches, galas, and team-building retreats.</p>
              <button className="service-btn-service corporate-btn"onClick={()=>handleGetStarted("/corporate-events")}>Learn More</button>
            </div>
            <div className="service-card-service">
              <img src="/images/social-s.jpg" alt="Social Celebrations" className="service-image-service" />
              <h3>Social Celebrations</h3>
              <p>Weddings, birthdays, anniversaries, and private parties.</p>
              <button className="service-btn-service social-btn"onClick={()=>handleGetStarted("/social-celebrations")}>Plan Your Event</button>
            </div>
            <div className="service-card-service">
              <img src="/images/musica-s.jpg" alt="Festivals & Concerts" className="service-image-service" />
              <h3>Festivals & Concerts</h3>
              <p>Large-scale music festivals, public events, and community gatherings.</p>
              <button className="service-btn-service festival-btn"onClick={()=>handleGetStarted("/festivals-concerts")}>Get a Quote</button>
            </div>
            <div className="service-card-service">
              <img src="/images/trade-s.jpg" alt="Trade Shows" className="service-image-service" />
              <h3>Trade Shows & Exhibitions</h3>
              <p>Comprehensive planning for booths, logistics, and attendee experience.</p>
              <button className="service-btn-service tradeshow-btn"onClick={()=>handleGetStarted("/trade-shows")}>Start Planning</button>
            </div>
            <div className="service-card-service">
              <img src="/images/private-s.jpg" alt="Private Events" className="service-image-service" />
              <h3>Private Events</h3>
              <p>Custom-tailored events for intimate gatherings and special occasions.</p>
              <button className="service-btn-service private-btn"onClick={()=>handleGetStarted("/private-events")}>Request Info</button>
            </div>
            <div className="service-card-service">
              <img src="/images/fund-s.jpg" alt="Non-Profit Galas" className="service-image-service" />
              <h3>Non-Profit Galas</h3>
              <p>Fundraising events, charity auctions, and awareness campaigns.</p>
              <button className="service-btn-service nonprofit-btn"onClick={()=>handleGetStarted("/non-profit-galas")}>Partner with Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio & Case Studies Section */}
      <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-content">
            <h2 className="portfolio-heading">Our Signature Events: A Closer Look</h2>
            <p className="portfolio-intro">
              We go beyond planning to create bespoke experiences. Here’s how we transformed a simple idea into an extraordinary event.
            </p>
            <div className="case-study-card">
              <img
                src="/images/gala-night.jpg"
                alt="Corporate event gala night"
                className="case-study-image"
              />
              <div className="case-study-details">
                <span className="case-study-tag">Corporate Gala</span>
                <h3>The Annual Innovators Summit Gala</h3>
                <p>
                  **Challenge:** Our client needed to host their annual summit gala for 500 tech leaders. The brief was to create a futuristic, immersive environment that reflected the company's brand identity while providing a memorable, engaging experience.
                </p>
                <p>
                  **Our Solution:** We designed a multi-sensory experience using holographic projections, interactive light displays, and a custom-built stage. The menu was crafted by a renowned chef, and a live orchestra provided an ambient soundtrack, ensuring every touchpoint felt innovative and exclusive.
                </p>
                <button className="case-study-btn" onClick={()=>handleGetStarted("/corporate-events")}>View Full Case Study</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="why-choose-us-container">
          <h2 className="why-choose-us-heading">Why We're Different</h2>
          <p className="why-choose-us-intro">
            We don't just plan events; we create experiences that resonate. Our unique approach is built on these core principles.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-magic"></i>
              <h3>Creative Vision</h3>
              <p>We blend innovative ideas with flawless execution to bring your unique vision to life.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-handshake-alt"></i>
              <h3>Transparent Process</h3>
              <p>From the first consultation to the final detail, you'll have full visibility and control.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-chart-line"></i>
              <h3>Measurable Impact</h3>
              <p>We focus on delivering tangible results, ensuring your event achieves its goals and ROI.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-user-friends"></i>
              <h3>Dedicated Team</h3>
              <p>Your event is handled by a passionate team committed to your success and peace of mind.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Risk Management</h3>
              <p>We anticipate challenges and have contingency plans to ensure a smooth, stress-free event.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-star-of-life"></i>
              <h3>Exceptional Service</h3>
              <p>We are available 24/7 to address any needs, providing unparalleled support every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Packages Section */}
      <section className="packages-section">
        <div className="packages-container">
          <h2 className="packages-heading">Flexible Packages</h2>
          <p className="packages-intro">
            We offer custom solutions to fit every need and budget. Choose the level of support that's right for you.
          </p>

          <div className="package-tiers">
            <div className="package-box">
              <h3>Partial Planning</h3>
              <p className="package-description">Perfect for clients who have a vision but need expert assistance with key components.</p>
              <ul className="package-features">
                <li><i className="fas fa-check-circle"></i> Vendor recommendations</li>
                <li><i className="fas fa-check-circle"></i> Day-of coordination</li>
                <li><i className="fas fa-check-circle"></i> Budget tracking</li>
                <li><i className="fas fa-check-circle"></i> Timeline creation</li>
              </ul>
              <button className="package-btn" onClick={()=>handleGetStarted("/contact")}>Learn More</button>
            </div>

            <div className="package-box featured-package">
              <span>Most Popular</span>
              <h3>Full-Service Planning</h3>
              <p className="package-description">Our comprehensive package, designed to handle every detail from start to finish.</p>
              <ul className="package-features">
                <li><i className="fas fa-check-circle"></i> All Partial Planning features</li>
                <li><i className="fas fa-check-circle"></i> Concept and theme development</li>
                <li><i className="fas fa-check-circle"></i> Guest list management</li>
                <li><i className="fas fa-check-circle"></i> On-site event management</li>
              </ul>
              <button className="package-btn" onClick={()=>handleGetStarted("/contact")}>Choose This Plan</button>
            </div>

            <div className="package-box">
              <h3>A La Carte Services</h3>
              <p className="package-description">Tailored services for specific needs. Build your own package, your way.</p>
              <ul className="package-features">
                <li><i className="fas fa-check-circle"></i> Venue sourcing</li>
                <li><i className="fas fa-check-circle"></i> Contract negotiation</li>
                <li><i className="fas fa-check-circle"></i> Supplier management</li>
                <li><i className="fas fa-check-circle"></i> Post-event analysis</li>
              </ul>
              <button className="package-btn" onClick={()=>handleGetStarted("/contact")}>Contact for Quote</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- FAQ Section --- */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-intro">
            Find quick answers to the most common questions about our event planning services.
          </p>

          <div className="faq-item">
            <button className="faq-question">
              <h4>What types of events do you specialize in?</h4>
              <i className="fas fa-chevron-down"></i>
            </button>
            <div className="faq-answer">
              <p>We specialize in a wide range of events, including corporate conferences, social celebrations, non-profit galas, and large-scale festivals. Our team has the expertise to handle diverse event types from concept to completion.</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">
              <h4>How do you handle event budget management?</h4>
              <i className="fas fa-chevron-down"></i>
            </button>
            <div className="faq-answer">
              <p>Transparency is key to our process. We work with you to create a detailed budget plan from the start, providing regular updates to ensure we stay on track. Our goal is to maximize your budget while delivering an unforgettable event.</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">
              <h4>Can you assist with vendor selection and management?</h4>
              <i className="fas fa-chevron-down"></i>
            </button>
            <div className="faq-answer">
              <p>Absolutely. We have a trusted network of the best vendors in the industry, from caterers and florists to audiovisual technicians. We handle all communication and negotiation to secure the best services at the best rates for your event.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Services;