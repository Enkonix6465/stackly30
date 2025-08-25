import  { useRef, useEffect, useState } from "react";
import "./Home.css";
import { useDarkMode } from "../context/Darkmodecontext";
import CircularServices from './CircularServices'; // Assuming this component exists
import { useNavigate } from "react-router-dom";
// Define the TestimonialCard component within this file or in a separate file
const TestimonialCard = ({ name, company, quote, image }) => (
  <div className="testimonial-card">
    <div className="testimonial-header">
      <img src={image} alt={name} className="testimonial-image" />
      <div className="testimonial-info">
        <h4 className="testimonial-name">{name}</h4>
        <p className="testimonial-company">{company}</p>
      </div>
    </div>
    <p className="testimonial-quote">"{quote}"</p>
  </div>
);

const Counter = ({ target, duration = 2000 }) => {
  
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // return () => {
    //   if (counterRef.current) {
    //     observer.unobserve(counterRef.current);
    //   }
    // };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    } else {
      setCount(0);
    }
  }, [isVisible, target, duration]);

  return <p ref={counterRef} className="stats-number">{count}</p>;
};


function Home() {
  const navigate = useNavigate();
    const handleGetStarted = (path) => {
      navigate(path);
    }
  const videoRef = useRef();
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.defaultMuted = true;
      videoEl.play().catch(err => console.warn("Autoplay blocked:", err));
    }
  }, []);

  

  const statsData = [
    { target: 1000, label: 'CORPORATE EVENTS DONE', icon: 'fas fa-users' },
    { target: 78, label: 'CORPORATE EVENT CONSULTATIONS OFFERED', icon: 'fas fa-comments' },
    { target: 123, label: 'HAPPY CLIENTS', icon: 'fas fa-thumbs-up' },
    { target: 30, label: 'HAPPY EMPLOYEES', icon: 'fas fa-user-tie' },
  ];

  const testimonialsData = [
    {
      name: 'Jane Doe',
      company: 'CEO, Innovate Ltd.',
      quote: 'This product has completely transformed our workflow. We saw an immediate increase in productivity.',
      image: 'images/test1.jpg',
    },
    {
      name: 'John Smith',
      company: 'Marketing Manager, Growth Co.',
      quote: 'The support team is incredible. They are fast, knowledgeable, and genuinely care about our success.',
      image: 'images/test2.jpg',
    },
    {
      name: 'Emily Davis',
      company: 'Founder, Creative Studios',
      quote: 'A must-have tool for any business looking to streamline their operations.',
      image: 'images/test3.jpg',
    },
  ];

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>
      {/* Hero Section with autoplay video */}
      <div className="hero-container">
        <video
          ref={videoRef}
          className="hero-video"
          src="/images/video1.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content">
          <h1 className="hero-tagline">Crafting Unforgettable Moments</h1>
          <p className="hero-paragraph">
            From corporate galas to dream weddings, we handle every detail with precision and creativity. Let us bring your vision to life.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={()=>handleGetStarted("/about")}>Discover More</button>
          </div>
        </div>
      </div>

      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">WHY US.</h2>
          <p className="section-para" data-aos="fade-up" data-aos-delay="200">
            Our commitment to excellence ensures every event is a seamless and memorable success.
          </p>
          <div className="line-divider"></div>
          <div className="reasons-container">
            <div className="reason-item" data-aos="fade-up" data-aos-delay="400">
              <div className="icon-wrapper">
                <i className="fa fa-file-alt icon-style"></i>
              </div>
              <h3 className="reason-title">EXPERIENCE AND EXPERTISE</h3>
              <div className="title-underline"></div>
              <p className="reason-description">
                We have been event organizers since 2005 and have worked extensively with companies from different industries.
              </p>
            </div>
            <div className="reason-item" data-aos="fade-up" data-aos-delay="600">
              <div className="icon-wrapper">
                <i className="fa fa-th-large icon-style"></i>
              </div>
              <h3 className="reason-title">VENDOR NETWORK</h3>
              <div className="title-underline"></div>
              <p className="reason-description">
                We have a vast event vendor network who we work with to plan events for our clients in India, Middle East and South East Asia.
              </p>
            </div>
            <div className="reason-item" data-aos="fade-up" data-aos-delay="800">
              <div className="icon-wrapper">
                <i className="fa fa-rupee-sign icon-style"></i>
              </div>
              <h3 className="reason-title">COST EFFECTIVE</h3>
              <div className="title-underline"></div>
              <p className="reason-description">
                Our event services are cost effective and impact-full. we work with you to plan your events in sync with budgets assigned.
              </p>
            </div>
            <div className="reason-item" data-aos="fade-up" data-aos-delay="1000">
              <div className="icon-wrapper">
                <i className="fa fa-users icon-style"></i>
              </div>
              <h3 className="reason-title">TRANSPARENT</h3>
              <div className="title-underline"></div>
              <p className="reason-description">
                We assure complete transparency and implement it at every step of the event planning process.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="section-container">
        <div className="text-content">
          <h1>About US</h1>
          <h2>Crafting Memories, One Event at a Time</h2>
          <p className="description" style={{ textAlign: "justify" }}>
            we believe that every event is a unique story waiting to unfold. With our tagline, ‘Crafting Memories, One Event at a Time,’ we pledge to infuse each occasion with thoughtful planning, attention to detail, and personalized care. From intimate gatherings to grand celebrations, our passion lies in transforming your vision into unforgettable moments—whether it’s the laughter during speeches, the sparkle of décor, or the emotion in every interaction. We’re not just planning events; we’re curating experiences that stay with you and your guests long after the last guest has left.” our signature promise—'Crafting Memories, One Event at a Time'—speaks to our commitment to thoughtfulness and personalization. Every event we create is a living story, lovingly shaped with attention to detail, emotion, and joy.
            From the initial spark of a concept to the final flourish of the event, we infuse every element—design, ambiance, service—with heartfelt care. The result? Genuine connections, unforgettable moments, and memories that last a lifetime
            Our mantra—‘Crafting Memories, One Event at a Time’—underscores our dedication to meticulous planning and meaningful impact.
          </p>
          <button className="go-to-page-button" onClick={()=>handleGetStarted("/about")}>About Us</button>
        </div>
        <div className="image-content">
          <img src="images/events.png" alt="Annual Day Celebration" />
        </div>
      </div>
      
      <CircularServices />
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">What Our Customers Say</h2>
          <p style={{marginBottom:"40px"}}>Eaturing authentic stories that highlight how your product or service solved real problems</p>
          <div className="testimonials-grid">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                company={testimonial.company}
                quote={testimonial.quote}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-header">
          <h2 className="stats-heading">OUR PAST</h2>
          <p>Elegant and forward-looking—perfect for a brand bridging tradition with innovation</p>
        </div>
        <div className="stats-container">
          {statsData.map((stat, index) => (
            <div key={index} className="stats-item">
              <div className="stats-icon">
                <i className={stat.icon}></i>
              </div>
              <Counter target={stat.target} />
              <div className="stats-sub-text">
                <p>{stat.label}</p>
                <span className="stats-dot"></span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*contact section*/}
      <div className="hero-container-home">
      <div className="hero-content-home">
        <h1 className="hero-title-home">Your Perfect Home Starts with a Conversation</h1>
        <p className="hero-subtitle-home">
          Finding your dream home isn’t just about listings—it’s about understanding your unique needs, preferences, and aspirations
        </p>
        <button className="hero-button-home"onClick={()=>handleGetStarted("/contact")}>REACH OUT TODAY</button>
      </div>
    </div>
      
      
    </div>
  );
}

export default Home;