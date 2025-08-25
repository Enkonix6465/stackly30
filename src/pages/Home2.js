import  { useRef, useEffect, useState } from "react";
import { useDarkMode } from "../context/Darkmodecontext";
import "./Home2.css";
import { useNavigate } from "react-router-dom";

// ImageComponent defined within Home2.js
const ImageComponent = ({ imageUrl, eventName }) => {
  return (
    <div className="image-container">
      <img src={imageUrl} alt={eventName} className="image" />
      <div className="overlay">
        <div className="text-container">{eventName}</div>
      </div>
    </div>
  );
};
const clients = [
  { id: 1, logoUrl: '/images/client1.jpg', alt: 'Wildlife Reserves Singapore' },
  { id: 2, logoUrl: '/images/client2.jpg', alt: 'Invixium' },
  { id: 3, logoUrl: '/images/client33.jpg', alt: 'Melbourne' },
  { id: 4, logoUrl: '/images/client4.jpg', alt: 'PAREXEL' },
  { id: 5, logoUrl: '/images/client5.jpg', alt: 'Metro' },
  { id: 6, logoUrl: '/images/client6.jpg', alt: 'Aranca' },
];

function Home2() {
  const navigate = useNavigate();
  const handleGetStarted = (path) => {
    navigate(path);
  };

  const videoRef = useRef(null);
  const clientsRef = useRef(null); // Ref to the clients section
  const [isClientsVisible, setIsClientsVisible] = useState(false); // State to trigger animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsClientsVisible(true);
          observer.disconnect(); // Stop observing after animation is triggered
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (clientsRef.current) {
      observer.observe(clientsRef.current);
    }

    // return () => {
    //   if (clientsRef.current) {
    //     observer.unobserve(clientsRef.current);
    //   }
    // };
  }, []);

  const { darkMode } = useDarkMode();

  // Data for the event images
  const eventImagesData = [
    { id: 1, url: '/images/corporate.jpg', name: 'Corporate Events' },
    { id: 2, url: '/images/wedding.jpg', name: 'Weddings & Private Events' },
    { id: 3, url: '/images/social-ga.jpg', name: 'Social Gatherings' },
    { id: 4, url: '/images/conferences.jpg', name: 'Conferences & Seminars' },
  ];

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>
      {/* Hero Section with autoplay video */}
      <div className="hero-container-home2">
        <video
          ref={videoRef}
          className="hero-video-home2"
          src="/images/video.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        {/*second section content*/}
        <div className="hero-content-home2">
          <h1 className="hero-tagline-home2">Beyond the Ordinary, Into the Extraordinary.</h1>
          <p className="hero-paragraph-home2">
            Our approach transforms every detail of your event into a moment of wonder
          </p>
          <div className="hero-btns-home2">
            <button className="btn" onClick={()=>handleGetStarted("/about")}>About Us</button>
          </div>
        </div>
      </div>
      {/* Other sections can be added here */}
      <section className="who-we-are-section">
        <div className="who-we-are-container">
          <div className="who-we-are-text">
            <h2 className="who-we-are-title">Who We Are</h2>
            <p className="who-we-are-description">
              We are a passionate team of event planners dedicated to creating unforgettable experiences. With over a decade of expertise, we specialize in corporate events, private parties, and large-scale conferences. Our mission is to transform your vision into a stunning reality, handling every detail from conceptualization to execution with precision and creativity. We pride ourselves on building strong relationships with our clients, ensuring a seamless and stress-free planning process that brings your unique story to life.
            </p>
            <p className="who-we-are-description">
              Our approach is rooted in innovation and personalized care. We believe that every event is an opportunity to craft a meaningful memory, and our extensive network of top-tier vendors allows us to deliver exceptional quality every time. Whether it's a small, intimate gathering or a grand celebration, our commitment to excellence remains unwavering.
            </p>
          </div>
          <div className="who-we-are-image">
            <img src="/images/who -home2.jpg" alt="Who We Are" className="who-we-are-photo" />
          </div>
        </div>
      </section>
      {/*third section*/}
      <section className="why-attend-section" style={{ backgroundImage:`url('/images/bacground-img.jpg')` }}>
        <div className="why-attend-container">
          <p className="why-attend-subtitle">WHY ATTEND</p>
          <h2 className="why-attend-title">Maximize Your Event ROI</h2>
          <div className="why-attend-divider"></div>
          <p className="why-attend-description">
            Our events are meticulously crafted to provide unparalleled value. From corporate seminars to brand launches, we ensure every detail aligns with your strategic goals, delivering a significant return on investment. You'll gain access to expert insights, network with industry leaders, and discover innovative solutions that propel your business forward. We don't just plan events; we create opportunities for growth, learning, and connection, guaranteeing a memorable and impactful experience for all attendees.
          </p>
          <button className="why-attend-button" onClick={()=>handleGetStarted("/contact")}>Register Now</button>
        </div>
      </section>

      {/* NEW SECTION: Event Gallery */}
      <section className="event-gallery-section">
        <div className="gallery-header-container">
          <p className="gallery-subtitle">Our Work</p>
          <h2 className="gallery-title">Explore Our Past Events</h2>
        </div>
        <div className="gallery-container">
          {eventImagesData.map((image) => (
            <ImageComponent key={image.id} imageUrl={image.url} eventName={image.name} />
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section" ref={clientsRef}>
        <div className="clients-header">
          <h2>OUR CLIENTS INCLUDE</h2>
          <div className="header-line">
            <span className="dot"></span>
          </div>
        </div>
        <div className={`logos-container ${isClientsVisible ? 'animated' : ''}`}>
          {clients.map(client => (
            <div className="logo-item" key={client.id}>
              <img src={client.logoUrl} alt={client.alt} />
            </div>
          ))}
        </div>
      </section>
      {/* Contact Us Section */}
      <div className="simple-hero-container-contact">
        <div className="simple-hero-background-contact"></div>
        <div className="simple-hero-content-contact">
          <p className="simple-hero-paragraph-contact" style={{ textAlign: "center" }}>
            Experience the next level of event planning and execution. We are committed to delivering exceptional moments that leave a lasting impression on your guests.
          </p>
          <button className="simple-hero-button-contact" style={{ alignSelf: "center" }} onClick={()=>handleGetStarted("/contact")}>
            LEARN MORE
          </button>
        </div>

      </div>
    </div>
  );
}

export default Home2;