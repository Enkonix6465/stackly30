import './ContactUs.css';
import { useDarkMode } from '../context/Darkmodecontext';
import { useState } from 'react';

function ContactUs() {
  const { darkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you shortly.');
  };

  // Event gallery data
  const eventGallery = [
    {
      id: 1,
      title: "Corporate Gala Night",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Corporate"
    },
    {
      id: 2,
      title: "Dream Wedding Celebration",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Wedding"
    },
    {
      id: 3,
      title: "Product Launch Event",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Corporate"
    },
    {
      id: 4,
      title: "Annual Conference",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Conference"
    },
    {
      id: 5,
      title: "Elegant Birthday Soiree",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Birthday"
    },
    {
      id: 6,
      title: "Charity Fundraiser Gala",
      image: "https://plus.unsplash.com/premium_photo-1683134050449-080429c850a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhcml0eSUyMGZ1bmRyYWlzZXIlMjBnYWxhfGVufDB8fDB8fHww",
      category: "Gala"
    }
  ];

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>
      {/* Hero Section */}
      <div className="hero-container-corporate">
        <video
          className="hero-video-corporate"
          src="/images/contact.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-corporate">
          <h1 className="hero-tagline-corporate">Get In Touch with US</h1>
          <p className="hero-paragraph-corporate">
         Friendly and welcoming, used by brands like Unbounce to make visitors feel valued and at ease.
          </p>
          
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <h2>Get in Touch</h2>
            <p>Fill out the form below and our team will contact you within 24 hours</p>

            <form onSubmit={handleSubmit} className="event-contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="eventType">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Event Type</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="conference">Conference</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="gala">Gala Dinner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="eventDate">Event Date</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Tell us about your event</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <h2>Other Ways to Reach Us</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567</p>
              <span>Mon-Fri, 9am-6pm EST</span>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>events@yourcompany.com</p>
              <span>Response within 24 hours</span>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Visit Us</h3>
              <p>123 Event Plaza, Suite 456</p>
              <span>New York, NY 10001</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="event-gallery-section">
        <div className="container-contact">
          <h2>Our Event Portfolio</h2>
          <p className="section-subtitle">Browse through our successfully executed events</p>
          
          <div className="gallery-grid">
            {eventGallery.map(event => (
              <div key={event.id} className="gallery-item">
                <div className="gallery-image">
                  <img src={event.image} alt={event.title} />
                  <div className="gallery-overlay">
                    <h3>{event.title}</h3>
                    <span className="event-category">{event.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          
        </div>
      </section>

      
      
    </div>
  );
}

export default ContactUs;