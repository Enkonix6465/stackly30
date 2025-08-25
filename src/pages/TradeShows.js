
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { FaHandshake, FaTrophy, FaAward } from 'react-icons/fa';
import './TradeShows.css';


const TradeShows = () => {
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
          src="/images/trade.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-corporate">
          <h1 className="hero-tagline-corporate">Where Ideas Meet Opportunity</h1>
          <p className="hero-paragraph-corporate">
           Step into a realm where concepts and commerce converge.
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
              src="images/trade-s.jpg"
              alt="Professionals at a corporate event"
            />
          </div>
          <div className="corporate-events-content">
            <h2>Trade Shows & Exhibitions</h2>
            <p style={{ textAlign: "justify" }}>
              Step into a realm where concepts and commerce converge. Our exhibitions are more than displays—they’re dynamic platforms designed to spark meaningful partnerships, showcase visionary products, and accelerate your brand’s next big breakthrough. Let every handshake and innovation be a step toward lasting success.
            </p>
            <ul>
              <li>Retirement Parties & Graduation Ceremonies → Conferences & Symposia</li>
              <li>Holiday & Cultural Festivals → Consumer & Hybrid Trade Shows</li>
              <li>Game Nights, Potlucks & Talent Shows → Pop-ups & Specialty Exhibits</li>
              <li>Weddings, Anniversaries & Birthdays → Industry & Local Expos</li>
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
            <h2 className="spotlight-heading">Client Spotlight: Innovatech’s Signature Exhibition Experience</h2>
            <p className="spotlight-paragraph">
              After months of hybrid operations and virtual briefings, Innovatech sought a platform to elevate team cohesion and brand innovation in a tangible setting. Their goal: host an exhibition-style showcase that combined dynamic engagement with meaningful interaction.
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
              src="/images/trade.mp4"
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
              <h3>Visionary Booths, Unforgettable Impressions</h3>
              <p>After the event, we provide a detailed report and gather feedback to measure success.</p>
            </div>
          </div>
        </div>
      </section>
      {/* New Service Highlights Section */}
      <section className="service-highlights-section">
        <div className="service-highlights-wrapper">
          <h2 className="highlights-heading">Exhibit with Elegance, Engage with Energy</h2>
          <p className="highlights-subheading">From concept to completion, we craft experiences that exceed expectations.</p>
          <div className="highlight-grid">
            {/* Highlight 1 - Visual on the left */}
            <div className="highlight-item">
              <div className="highlight-image-container">
                <img src="images/trade1.png" alt="A well-lit conference room with a speaker on stage." />
              </div>
              <div className="highlight-content">
                <h3>Exhibit with Elegance, Engage with Energy</h3>
                <p>When style and substance unite, magic happens. We design exhibition experiences where aesthetic meets action—from interactive storytelling zones to themed surprise pop-ups that delight</p>
              </div>
            </div>
            {/* Highlight 2 - Visual on the right */}
            <div className="highlight-item reverse-row">
              <div className="highlight-image-container">
                <img src="images/trade2.png" alt="Professionals at a networking happy hour." />
              </div>
              <div className="highlight-content">
                <h3>Meaningful Encounters, Memorable Impressions</h3>
                <p>We shape trade shows that are as personal as they are professional. Through hands-on demos, sensory storytelling, and inviting conversation zones, every visitor at your booth becomes part of a shared narrative</p>
              </div>
            </div>
            {/* Highlight 3 - Visual on the left */}
            <div className="highlight-item">
              <div className="highlight-image-container">
                <img src="images/trade3.png" alt="A corporate awards ceremony with people in formal wear." />
              </div>
              <div className="highlight-content">
                <h3>Seamless Exhibitions, Memorable Engagements</h3>
                <p>From concept to execution, we orchestrate every phase of your trade show presence with precision and care. With logistics managed and visuals optimized, you can focus on what matters most: sparking conversations,</p>
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

export default TradeShows;