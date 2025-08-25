import  { useRef, useEffect, useState } from 'react';
import './AboutUs.css';
import { useDarkMode } from "../context/Darkmodecontext";

function AboutUs() {
  const { darkMode } = useDarkMode();
  const videoRef = useRef(null);

  const benefits = [
    { icon: '💡', text: 'Gain valuable insights from industry leaders and experts.' },
    { icon: '🤝', text: 'Network with peers and build meaningful professional relationships.' },
    { icon: '🚀', text: 'Discover innovative solutions to empower your business.' },
    { icon: '📈', text: 'Enhance your skills with hands-on workshops and masterclasses.' },
  ];

  const storyRef = useRef(null);
  const benefitsRef = useRef(null);
  const teamRef = useRef(null);

  const [storyVisible, setStoryVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const storyObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStoryVisible(true);
        storyObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const benefitsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setBenefitsVisible(true);
        benefitsObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const teamObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTeamVisible(true);
        teamObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const currentStoryRef = storyRef.current;
    const currentBenefitsRef = benefitsRef.current;
    const currentTeamRef = teamRef.current;

    if (currentStoryRef) storyObserver.observe(currentStoryRef);
    if (currentBenefitsRef) benefitsObserver.observe(currentBenefitsRef);
    if (currentTeamRef) teamObserver.observe(currentTeamRef);

    return () => {
      if (currentStoryRef) storyObserver.unobserve(currentStoryRef);
      if (currentBenefitsRef) benefitsObserver.unobserve(currentBenefitsRef);
      if (currentTeamRef) teamObserver.unobserve(currentTeamRef);
    };
  }, []);

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>
      <div className="hero-container-about">
        <video
          ref={videoRef}
          className="hero-video-about"
          src="/images/hero-about.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-about">
          <h1 className="hero-tagline-about">Turning Ideas into Unforgettable Experiences.</h1>
          <p className="hero-paragraph-about">
            We believe every event begins with a spark—a dream, a vision, an idea.
          </p>
          <div className="hero-btns-about">
            <button className="btn">Discover Our Services</button>
          </div>
        </div>
      </div>
      <section className="mission-section-new">
        <div className="mission-card">
          <div className="mission-quote-container">
            <h2 className="mission-title-new">Our Mission</h2>
            <p className="mission-quote">"We don't just plan events; we craft experiences that tell a story."</p>
          </div>
          <div className="mission-text-container">
            <p className="mission-text-new">
              At the heart of our work lies a single guiding principle: turning ideas into unforgettable experiences. Our mission is to seamlessly transform your vision into reality with meticulous planning, creative flair, and unwavering dedication. We specialize in delivering tailor-made events—be it an intimate celebration, a dynamic corporate gathering, or an immersive cultural showcase—that resonate with your goals and captivate your audience.
            </p>
            <p className="mission-text-new">
              From initial concept to flawless execution, we pride ourselves on exceptional service, personalized attention, and collaborative creativity. Our goal is not just to meet expectations, but to set new benchmarks for event excellence—ensuring every moment is meaningful, memorable, and uniquely yours.
            </p>
          </div>
        </div>
      </section>
      <section className="vision-section">
        <div className="vision-card">
          <div className="vision-quote-container">
            <h2 className="vision-title">Our Vision</h2>
            <p className="vision-quote">"To be the architects of tomorrow's most memorable moments."</p>
          </div>
          <div className="vision-text-container">
            <p className="vision-text-new">
              Our vision is to revolutionize the event management landscape by setting new standards of creativity and seamless execution. We aspire to be more than just a service provider; we aim to be a creative partner for our clients, recognized globally for our commitment to innovation and excellence. We envision a future where every event is a masterpiece, uniquely designed to inspire, connect, and elevate human experiences.
            </p>
            <p className="vision-text-new">
              By continuously pushing creative boundaries and embracing cutting-edge technology, we will lead the industry in delivering events that are not only successful but also transformative. We believe that the future of events is about creating immersive environments that resonate on a deeper, more emotional level, and our vision is to be at the forefront of this evolution.
            </p>
          </div>
        </div>
      </section>
      <section
        ref={storyRef}
        className={`story-section ${storyVisible ? 'visible' : ''}`}
      >
        <div className="story-container">
          <h2 className="story-heading">Our Journey So Far</h2>
          <p style={{ marginBottom: "60px" }}>What began as a modest idea—driven by a shared passion for creativity and impeccable execution</p>
          <div className="timeline-wrapper">
            <div className="timeline-item-new" style={{ animationDelay: '0.2s' }}>
              <div className="timeline-dot"></div>
              <div className="timeline-year">2010</div>
              <div className="timeline-content-new">
                <h3 className="story-title-new">The Foundation</h3>
                <p className="story-text-new">
                  Founded with a simple idea: to bring a new level of creativity and professionalism to the events industry. We started with a small team and a big vision.
                </p>
              </div>
            </div>
            <div className="timeline-item-new" style={{ animationDelay: '0.4s' }}>
              <div className="timeline-dot"></div>
              <div className="timeline-year">2015</div>
              <div className="timeline-content-new">
                <h3 className="story-title-new">First Major Success</h3>
                <p className="story-text-new">
                  Successfully planned and executed our first large-scale international conference, gaining recognition for our innovative approach and meticulous planning.
                </p>
              </div>
            </div>
            <div className="timeline-item-new" style={{ animationDelay: '0.6s' }}>
              <div className="timeline-dot"></div>
              <div className="timeline-year">2020</div>
              <div className="timeline-content-new">
                <h3 className="story-title-new">Expanding Our Reach</h3>
                <p className="story-text-new">
                  Expanded our services to include virtual and hybrid events, adapting to the changing global landscape and setting new industry standards for digital experiences.
                </p>
              </div>
            </div>
            <div className="timeline-item-new" style={{ animationDelay: '0.8s' }}>
              <div className="timeline-dot"></div>
              <div className="timeline-year">2023</div>
              <div className="timeline-content-new">
                <h3 className="story-title-new">Pioneering Sustainability</h3>
                <p className="story-text-new">
                  Launched our sustainable events initiative, integrating eco-friendly practices and materials to reduce our environmental impact and help clients do the same.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={benefitsRef}
        className={`event-description-section-new ${benefitsVisible ? 'visible' : ''}`}
      >
        <div className="container-new-style">
          <h2 className="section-title-new">Why Attend?</h2>
          <p className="overview-new-style">
            Join us for an unparalleled event experience designed to inspire, connect, and empower. This event is a unique platform to gain valuable insights, network with peers, and discover innovative solutions.
          </p>
          <div className="benefits-grid-new">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-item-new-style"
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <span className="benefit-icon-new-style">{benefit.icon}</span>
                <h3 className="benefit-heading-new-style">Benefit {index + 1}</h3>
                <p className="benefit-text-new-style">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        ref={teamRef}
        className={`team-section ${teamVisible ? 'visible' : ''}`}
      >
        <div className="team-container">
          <h2 className="team-heading">Meet the Architects of Our Success</h2>
          <p className="team-description">
            Our diverse team of experts brings passion, creativity, and dedication to every project, ensuring your vision becomes a reality.
          </p>
          <div className="team-grid">
            <div className="team-member" style={{ animationDelay: '0.2s' }}>
              <img src="/images/team1.jpg" alt="Team Member Name" className="member-photo" />
              <h3 className="member-name">Jane Doe</h3>
              <p className="member-role">Lead Event Strategist</p>
            </div>
            <div className="team-member" style={{ animationDelay: '0.4s' }}>
              <img src="/images/team2.jpg" alt="Team Member Name" className="member-photo" />
              <h3 className="member-name">John Smith</h3>
              <p className="member-role">Creative Director</p>
            </div>
            <div className="team-member" style={{ animationDelay: '0.6s' }}>
              <img src="/images/team3.jpg" alt="Team Member Name" className="member-photo" />
              <h3 className="member-name">Emily White</h3>
              <p className="member-role">Logistics Coordinator</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section-minimal">
        <div className="contact-container-minimal">
          <h2 className="contact-tagline-minimal">Let's Create Something Unforgettable.</h2>
          <p className="contact-text-minimal">
            Ready to turn your vision into a remarkable experience? Reach out to us, and let's start planning the event you've always dreamed of.
          </p>
          <button className="contact-button-minimal">Contact Us</button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;