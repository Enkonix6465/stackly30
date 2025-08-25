import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDarkMode } from '../context/Darkmodecontext';
import './Blog.css';

const Blog = () => {
  
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  
  const handleGetStarted = (path) => {
    navigate(path);
  };

  // Event Spotlight Section
  const [activeEvent, setActiveEvent] = useState(0);
  const [events] = useState([
    {
      id: 1,
      title: "Tech Conference 2023",
      date: "October 15-17, 2023",
      location: "San Francisco, CA",
      description: "The largest gathering of tech innovators and thought leaders.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: { attendees: "2,500", sessions: "85", speakers: "120" },
      path:"/blog1",
    },
    {
      id: 2,
      title: "Music Festival Experience",
      date: "July 22-24, 2023",
      location: "Austin, TX",
      description: "Three days of incredible music, art, and community.",
      image: "https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: { attendees: "15,000", stages: "5", artists: "80" },
      path:"/blog2",
    },
    {
      id: 3,
      title: "Corporate Leadership Summit",
      date: "November 5-6, 2023",
      location: "New York, NY",
      description: "Executive networking and leadership development conference.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: { attendees: "800", workshops: "12", speakers: "25" },
      path:"/blog3"
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [events.length]);

  const handleDotClick = (index) => {
    setActiveEvent(index);
  };

  // Event Planning Timeline Section
  const [activeStep, setActiveStep] = useState(0);
  const planningSteps = [
    {
      title: "Concept & Goal Setting",
      description: "Define the purpose, objectives, and target audience for your event. Establish clear goals and success metrics.",
      tasks: ["Define event purpose", "Identify target audience", "Set measurable goals", "Establish budget"],
      icon: "fas fa-lightbulb",
      time: "6-12 months before"
    },
    {
      title: "Planning & Organization",
      description: "Develop a detailed plan including venue selection, vendor coordination, and timeline creation.",
      tasks: ["Select venue", "Book vendors", "Create event schedule", "Develop marketing plan"],
      icon: "fas fa-clipboard-list",
      time: "3-6 months before"
    },
    {
      title: "Promotion & Marketing",
      description: "Execute your marketing strategy to build awareness and drive registrations for your event.",
      tasks: ["Launch website", "Social media campaign", "Email marketing", "Partnership outreach"],
      icon: "fas fa-bullhorn",
      time: "1-3 months before"
    },
    {
      title: "Final Preparation",
      description: "Complete all final details, confirmations, and brief your team for successful execution.",
      tasks: ["Confirm vendors", "Finalize schedule", "Brief staff/volunteers", "Prepare materials"],
      icon: "fas fa-check-double",
      time: "2-4 weeks before"
    },
    {
      title: "Event Execution",
      description: "The day of your event! Ensure everything runs smoothly and handle any last-minute issues.",
      tasks: ["Setup venue", "Manage registration", "Coordinate vendors", "Engage attendees"],
      icon: "fas fa-calendar-day",
      time: "Event day"
    },
    {
      title: "Post-Event Follow-up",
      description: "Gather feedback, analyze results, and maintain relationships with attendees after the event.",
      tasks: ["Send thank you notes", "Distribute surveys", "Analyze metrics", "Plan follow-up events"],
      icon: "fas fa-chart-line",
      time: "1-4 weeks after"
    }
  ];

  // Existing content
  const articlesData = [
    {
      id: 1,
      title: "Top 5 Trends in Sustainable Event Planning",
      image: "images/article1.png",
      description: "Explore the latest trends in eco-friendly events and how they can benefit your brand and the planet.",
      path: "/blog1"
    },
    {
      id: 2,
      title: "How to Choose the Perfect Venue",
      image: "images/article2.png",
      description: "A comprehensive guide to selecting a venue that perfectly matches your event's theme, budget, and guest count.",
      path: "/blog2"
    },
    {
      id: 3,
      title: "Budgeting for Your Dream Wedding",
      image: "images/article3.png",
      description: "Learn how to effectively manage your wedding budget without compromising on your dream vision.",
      path: "/blog3"
    }
  ];



  // New: Upcoming Events Data
  const upcomingEvents = [
    {
      id: 1,
      title: "Winter Gala Fundraiser",
      date: "December 15, 2023",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Charity"
    },
    {
      id: 2,
      title: "New Year Corporate Summit",
      date: "January 10-12, 2024",
      location: "Las Vegas, NV",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Corporate"
    },
    {
      id: 3,
      title: "Spring Wedding Expo",
      date: "March 5-7, 2024",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Wedding"
    }
  ];

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>
      <div className="hero-container-blog">
        <video
          className="hero-video-blog"
          src="/images/blog.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-blog">
          <h1 className="hero-tagline-blog">Crafting Unforgettable Moments</h1>
          <p className="hero-paragraph-blog">
            From corporate galas to dream weddings, we handle every detail with precision and creativity. Let us bring your vision to life.
          </p>
          <div className="hero-btns-blog">
            <button className="btn btn-primary" onClick={() => handleGetStarted("/services")}>Discover Our Services</button>
          </div>
        </div>
      </div>
      
      <section className="articles-section">
        <h2>Featured Articles</h2>
        <div className="articles-grid">
          {articlesData.map(article => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <button 
                  className="article-button" 
                  onClick={() => handleGetStarted(article.path)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Event Spotlight Section */}
      <section className="event-spotlight">
        <h2 className="section-title">Featured Events</h2>
        <div className="spotlight-container">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={`event-card ${index === activeEvent ? 'active' : ''}`}
            >
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-overlay">
                  <h3>{event.title}</h3>
                  <p>{event.date}</p>
                </div>
              </div>
              <div className="event-content">
                <div className="event-location">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{event.location}</span>
                </div>
                <p className="event-description">{event.description}</p>
                <div className="event-stats">
                  {Object.entries(event.stats).map(([key, value]) => (
                    <div key={key} className="stat">
                      <span className="stat-value">{value}</span>
                      <span className="stat-label">{key}</span>
                    </div>
                  ))}
                </div>
                <button 
                  className="event-button"
                  onClick={() => handleGetStarted(event.path)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
          
          <div className="carousel-dots">
            {events.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeEvent ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Event Planning Timeline Section */}
      <section className="event-timeline">
        <h2 className="section-title">Event Planning Timeline</h2>
        <p className="section-subtitle">A step-by-step guide to successful event planning</p>
        
        <div className="timeline-container">
          <div className="timeline-progress">
            <div 
              className="timeline-progress-bar" 
              style={{ width: `${(activeStep / (planningSteps.length - 1)) * 100}%` }}
            ></div>
          </div>
          
          <div className="timeline-steps">
            {planningSteps.map((step, index) => (
              <div 
                key={index} 
                className={`timeline-step ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="step-marker">
                  <i className={step.icon}></i>
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <span className="step-time">{step.time}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="timeline-details">
            <div className="details-card">
              <div className="details-header">
                <h3>{planningSteps[activeStep].title}</h3>
                <span className="time-badge">{planningSteps[activeStep].time}</span>
              </div>
              <p>{planningSteps[activeStep].description}</p>
              <div className="tasks-container">
                <h4>Key Tasks:</h4>
                <ul>
                  {planningSteps[activeStep].tasks.map((task, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="navigation-buttons">
                <button 
                  className="nav-button prev"
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                >
                  <i className="fas fa-arrow-left"></i> Previous
                </button>
                <div className="step-indicator">
                  Step {activeStep + 1} of {planningSteps.length}
                </div>
                <button 
                  className="nav-button next"
                  onClick={() => setActiveStep(prev => Math.min(planningSteps.length - 1, prev + 1))}
                  disabled={activeStep === planningSteps.length - 1}
                >
                  Next <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* New: Upcoming Events Section */}
      <section className="upcoming-events-section">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">Mark your calendar for these exciting upcoming events</p>
          
          <div className="upcoming-events-grid">
            {upcomingEvents.map(event => (
              <div key={event.id} className="upcoming-event-card">
                <div className="event-image-container">
                  <img src={event.image} alt={event.title} />
                  <span className="event-category-tag">{event.category}</span>
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <p><i className="fas fa-calendar-alt"></i> {event.date}</p>
                    <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                  </div>
                  <button className="event-cta-button"onClick={()=>handleGetStarted("/contact")}>Know More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Existing blog sections */}
      <section className="blog-section pre-event">
        <h2>The Pre-Event Buzz: Crafting an Unforgettable Attendee Journey</h2>
        <p>
          Before the main event, the <strong>pre-event phase</strong> is crucial for building excitement and managing logistics. It sets the tone and ensures a smooth experience for both you and your attendees. This section focuses on strategic planning, communication, and engagement. Start with a detailed <strong>timeline</strong> that includes key milestones like venue booking, vendor contracts, and marketing launch dates.
        </p>
        <p>
          Next, focus on your communication strategy. Create a <strong>multi-channel marketing plan</strong> that leverages social media, email campaigns, and partnerships. Use a mix of countdowns, sneak peeks, and behind-the-scenes content to build anticipation. Don't forget the <strong>ticketing and registration process</strong>. Make it as seamless as possible, offering early bird specials and group discounts. Collect essential attendee data through a well-designed registration form to personalize the experience later. Finally, send out a detailed <strong>welcome packet</strong> a week before the event with all the necessary information, including the schedule, FAQs, and a map of the venue.
        </p>
      </section>

      <hr />

      <section className="blog-section main-event">
        <h2>The Main Event: Mastering the Art of Execution</h2>
        <p>
          The main event is where all your hard work comes to life. This section is all about <strong>flawless execution</strong> and on-the-day management. Begin with a comprehensive <strong>run of show</strong>—a minute-by-minute schedule that outlines every activity, speaker, and technical cue. Assign clear roles and responsibilities to your team to ensure everyone knows what to do and when to do it.
        </p>
        <p>
          Focus on creating a memorable atmosphere. From the <strong>lighting and sound design</strong> to the layout and decor, every element should align with your event's theme and purpose. Pay close attention to <strong>attendee flow</strong> and navigation. Clear signage and helpful staff can prevent confusion and enhance the guest experience. Be prepared for the unexpected with a detailed <strong>contingency plan</strong> that addresses potential issues like technical glitches, bad weather, or last-minute cancellations. During the event, actively engage with your audience through live polls, Q&A sessions, and social media interactions to keep the energy high.
        </p>
      </section>

      <hr />

      <section className="blog-section post-event">
        <h2>The Post-Event Debrief: Leveraging Success and Learning for the Future</h2>
        <p>
          The work doesn't end when the last guest leaves. The <strong>post-event phase</strong> is critical for measuring success, gathering feedback, and planning for your next event. The first step is to send out a <strong>thank-you email</strong> within 24 hours to all attendees, speakers, and sponsors. This is a great opportunity to share photos and videos from the event and ask for feedback.
        </p>
        <p>
          Next, conduct a thorough <strong>event analysis</strong>. Use the data collected from your registration forms, ticket sales, and social media engagement to evaluate what worked and what didn't. Send out a <strong>feedback survey</strong> to gather qualitative insights on their experience.
        </p>
        <p>
          Hold a <strong>debrief meeting</strong> with your team and key stakeholders to discuss successes, challenges, and areas for improvement. This is a chance to document your learnings and create a <strong>report</strong> that highlights key metrics and achievements. By meticulously analyzing your past events, you can refine your strategies and ensure each future event is even more successful.
        </p>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-tagline">Ready to Create Unforgettable Experiences?</h2>
            <p className="cta-paragraph">
              Let us transform your vision into a perfectly executed event. From intimate gatherings 
              to large-scale conferences, our team handles every detail with precision and creativity.
            </p>
            <button className="cta-button"onClick={()=>handleGetStarted("/contact")}>Start Planning Your Event Today</button>
          </div>
          <div className="cta-visual">
            <div className="cta-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;