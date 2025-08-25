
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { FaHandshake, FaTrophy, FaAward } from 'react-icons/fa';
import './CorporateEvents.css';


const CorporateEvents = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>

      {/* Hero Section */}
      <div className="hero-container-corporate">
        <video
          className="hero-video-corporate"
          src="/images/corporate-events.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-corporate">
          <h1 className="hero-tagline-corporate">Crafting Unforgettable Moments</h1>
          <p className="hero-paragraph-corporate">
            From corporate galas to dream weddings, we handle every detail with precision and creativity. Let us bring your vision to life.
          </p>
          <div className="hero-btns-corporate">
            <button className="btn btn-primary" onClick={() => handleGetStarted("/services")}>Discover Our Services</button>
          </div>
        </div>
      </div>

      {/* Corporate Events Section */}
      <section className="corporate-events-section">
        <div className="corporate-events-wrapper">
          <div className="corporate-events-image-container">
            <img
              src="images/corporate-s.jpg"
              alt="Professionals at a corporate event"
            />
          </div>
          <div className="corporate-events-content">
            <h2>Corporate Event Management</h2>
            <p style={{ textAlign: "justify" }}>
              Corporate events are a powerful tool for businesses to connect with employees, clients, and partners. Our approach focuses on creating memorable and impactful experiences that align with your company's goals and values.
              Corporate Event Management is the strategic art and science of orchestrating business gatherings—ranging from conferences, product launches, and annual general meetings to team retreats and trade shows—in alignment with an organization's overarching goals
            </p>
            <ul>
              <li>Conferences and Seminars</li>
              <li>Product Launches and Galas</li>
              <li>Team-Building Retreats</li>
              <li>Award Ceremonies and Banquets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Showcase Section with Flip-Card Style */}
      <section className={`services-section ${darkMode ? 'dark-mode' : ''}`}>
        <div className="services-wrapper">
          <h2 className="services-heading">Our Expertise, Your Success</h2>
          <div className="services-grid">
            {/* Flip Card 1 */}
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-card-front">
                  <FaHandshake className="service-icon" />
                  <h3>Networking Events</h3>
                  <p>Facilitating meaningful connections with engaging and professional networking sessions.</p>
                </div>
                <div className="service-card-back">
                  <p>Ready to connect? Let us handle all the details for your next networking event.</p>
                  <button className="btn">Learn More</button>
                </div>
              </div>
            </div>
            {/* Flip Card 2 */}
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-card-front">
                  <FaTrophy className="service-icon" />
                  <h3>Conferences & Seminars</h3>
                  <p>Designing seamless and inspiring large-scale events that leave a lasting impression.</p>
                </div>
                <div className="service-card-back">
                  <p>Host a world-class conference. Our team ensures a flawless experience from start to finish.</p>
                  <button className="btn">Learn More</button>
                </div>
              </div>
            </div>
            {/* Flip Card 3 */}
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-card-front">
                  <FaAward className="service-icon" />
                  <h3>Award Ceremonies</h3>
                  <p>Crafting elegant and memorable celebrations that honor achievements and success.</p>
                </div>
                <div className="service-card-back">
                  <p>Celebrate your team's success with a truly spectacular and well-organized award ceremony.</p>
                  <button className="btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client-spotlight-section">
        <div className="client-spotlight-wrapper">
          <div className="spotlight-content">
            <h2 className="spotlight-heading">Client Spotlight: Innovatech's Annual Summit</h2>
            <p className="spotlight-paragraph">
              Facing the challenge of a fully remote workforce, Innovatech needed to host an annual summit that felt engaging and connected. We designed a unique hybrid event experience, blending live-streamed presentations with interactive virtual breakouts and personalized networking sessions.
            </p>
            <div className="spotlight-details">
              <div className="detail-item">
                Event Type: <span>Hybrid Conference</span>
              </div>
              <div className="detail-item">
                Attendees: <span>1,500+</span>
              </div>
              <div className="detail-item">
                Location: <span>San Francisco, CA & Virtual</span>
              </div>
              <div className="detail-item">
                Key Challenge: <span>Remote Engagement</span>
              </div>
            </div>
          </div>
          <div className="spotlight-image-container">
            {/* Replace the image tag with this video tag */}
            <video
              src="images/corporate.mp4"
              alt="Innovatech Annual Summit"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>
      {/* New Event Planning Process Section */}
      <section className="event-process-section">
        <div className="event-process-wrapper">
          <h2 className="event-process-heading">Our Seamless Event Planning Process</h2>
          <p className="event-process-subheading">From initial concept to flawless execution, we guide you every step of the way.</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-icon">1</div>
              <h3>Discovery & Strategy</h3>
              <p>We start by understanding your goals, vision, and budget to create a tailored event strategy.</p>
            </div>
            <div className="process-step">
              <div className="step-icon">2</div>
              <h3>Design & Curation</h3>
              <p>Our team develops a creative concept, curating every element from venue to decor and entertainment.</p>
            </div>
            <div className="process-step">
              <div className="step-icon">3</div>
              <h3>Execution & Management</h3>
              <p>We handle all logistics, vendor coordination, and on-site management for a stress-free event day.</p>
            </div>
            <div className="process-step">
              <div className="step-icon">4</div>
              <h3>Post-Event Evaluation</h3>
              <p>After the event, we provide a detailed report and gather feedback to measure success.</p>
            </div>
          </div>
        </div>
      </section>
      {/* New Service Highlights Section */}
      <section className="service-highlights-section">
        <div className="service-highlights-wrapper">
          <h2 className="highlights-heading">Tailored Events, Exceptional Results</h2>
          <p className="highlights-subheading">From concept to completion, we craft experiences that exceed expectations.</p>
          <div className="highlight-grid">
            {/* Highlight 1 - Visual on the left */}
            <div className="highlight-item">
              <div className="highlight-image-container">
                <img src="images/Innovative.png" alt="A well-lit conference room with a speaker on stage." />
              </div>
              <div className="highlight-content">
                <h3>Innovative Conference Planning</h3>
                <p>We blend cutting-edge technology with thoughtful design to create conferences that are both informative and immersive. Our focus is on seamless logistics and impactful content delivery.</p>
              </div>
            </div>
            {/* Highlight 2 - Visual on the right */}
            <div className="highlight-item reverse-row">
              <div className="highlight-image-container">
                <img src="images/Engaging.png" alt="Professionals at a networking happy hour." />
              </div>
              <div className="highlight-content">
                <h3>Engaging Team-Building Retreats</h3>
                <p>Move beyond generic activities. We design custom retreats that foster genuine connection, collaboration, and a stronger company culture, all tailored to your team’s unique dynamics.</p>
              </div>
            </div>
            {/* Highlight 3 - Visual on the left */}
            <div className="highlight-item">
              <div className="highlight-image-container">
                <img src="images/gala.png" alt="A corporate awards ceremony with people in formal wear." />
              </div>
              <div className="highlight-content">
                <h3>Stunning Gala & Award Ceremonies</h3>
                <p>Celebrate success in style. Our galas are meticulously planned to provide a luxurious and memorable experience, honoring achievements with elegance and grandeur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final Call to Action Section */}
      <section className="cta-final-section">
        <div className="cta-final-content">
          <h2>Ready to Begin Your Event Journey?</h2>
          <p>
            Let's create a memorable experience together. Contact us today to discuss your vision and receive a tailored proposal.
          </p>
          <a href="#contact" className="cta-final-btn"onClick={()=>handleGetStarted("/contact")}>
            Plan Your Event
          </a>
        </div>
      </section>
    </div>
  );
};

export default CorporateEvents;