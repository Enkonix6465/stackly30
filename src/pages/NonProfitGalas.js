
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { FaHandshake, FaTrophy, FaAward } from 'react-icons/fa';
import './NonProfitGalas.css';


const NonProfitGalas = () => {
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
          src="/images/non-profit-gala.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-corporate">
          <h1 className="hero-tagline-corporate">Join the Movement for Good</h1>
          <p className="hero-paragraph-corporate">
           Step into a gala that transcends the ordinary—where every greeting,
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
              src="images/fund-s.jpg"
              alt="Professionals at a corporate event"
            />
          </div>
          <div className="corporate-events-content">
            <h2>Non-Profit Gala</h2>
            <p style={{ textAlign: "justify" }}>
             Step into a gala that transcends the ordinary—where every greeting, every toast, and every moment pulses with purpose. Join the Movement for Good is an invitation to be part of something bigger than yourself. More than a celebration, this is a collective pledge: each smile shared and each contribution given strengthens a shared mission of hope, impact, and change
            </p>
            <ul>
              <li>Weddings, Anniversaries & Birthdays</li>
              <li>Retirement Parties & Graduation Ceremonies</li>
              <li>Holiday & Cultural Festivals</li>
              <li>Game Nights, Potlucks & Talent Shows</li>
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
            <h2 className="spotlight-heading">Client Spotlight: Innovatech’s Annual Gala Celebration</h2>
            <p className="spotlight-paragraph">
              After a long year of remote work, Innovatech wanted to reignite team spirit and togetherness with a memorable, heartfelt gathering. They sought a celebration that combined thoughtful recognition with genuine interaction.
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
              src="/images/non-profit-gala.mp4"
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
          <h2 className="highlights-heading">Creative Party Concepts, Unforgettable Experiences</h2>
          <p className="highlights-subheading">From concept to completion, we craft experiences that exceed expectations.</p>
          <div className="highlight-grid">
            {/* Highlight 1 - Visual on the left */}
            <div className="highlight-item">
              <div className="highlight-image-container">
                <img src="images/social-1.png" alt="A well-lit conference room with a speaker on stage." />
              </div>
              <div className="highlight-content">
                <h3>Elevating Gatherings with Style & Fun</h3>
                <p>When every celebration deserves a spark of originality, we bring vision to life. From themed soirées to immersive surprise parties, our creative touches</p>
              </div>
            </div>
            {/* Highlight 2 - Visual on the right */}
            <div className="highlight-item reverse-row">
              <div className="highlight-image-container">
                <img src="images/social-2.png" alt="Professionals at a networking happy hour." />
              </div>
              <div className="highlight-content">
                <h3>Heartfelt Gatherings, Meaningful Connections</h3>
                <p>Social celebrations are all about the people you share them with. Whether it's reconnecting friends at a reunion or forging new friendships at a community mixer, we design events that feel personal, warm, and deeply memorable</p>
              </div>
            </div>
            {/* Highlight 3 - Visual on the left */}
            <div className="highlight-item">
              <div className="highlight-image-container">
                <img src="images/social-3.png" alt="A corporate awards ceremony with people in formal wear." />
              </div>
              <div className="highlight-content">
                <h3>Effortless Celebrations, Cherished Memories</h3>
                <p>The best gatherings happen when hosts can relax and immerse in the moment. We handle planning, decor, logistics, and surprises—so you can savor the laughter, toasts, and bright smiles. No stress, just seamless celebration and treasured memories.</p>
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

export default NonProfitGalas;