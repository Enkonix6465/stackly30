import React, { useState } from 'react';

const Blog1 = () => {
  const [activeTrend, setActiveTrend] = useState(0);

  const trends = [
    {
      title: "Zero-Waste Events",
      description: "The push toward zero-waste events is transforming how we plan and execute gatherings. This approach focuses on minimizing landfill contributions through comprehensive waste reduction strategies.",
      details: [
        "Compostable tableware and serving materials",
        "Digital alternatives to printed materials",
        "Waste stations with clear sorting instructions",
        "Partnerships with composting facilities",
        "Donation programs for leftover food and materials"
      ],
      icon: "♻️",
      stat: "73%",
      statText: "of event planners report increased attendee satisfaction at zero-waste events"
    },
    {
      title: "Plant-Based Catering",
      description: "Shifting toward plant-based menus significantly reduces the environmental impact of events while catering to growing dietary preferences.",
      details: [
        "Locally-sourced seasonal produce",
        "Creative plant-based alternatives to traditional dishes",
        "Reduced food waste through careful planning",
        "Carbon footprint labeling on menu items",
        "Partnerships with local organic farms"
      ],
      icon: "🌱",
      stat: "58%",
      statText: "reduction in carbon footprint compared to meat-based menus"
    },
    {
      title: "Digital Integration",
      description: "Technology is playing a crucial role in making events more sustainable by reducing the need for physical materials and travel.",
      details: [
        "Event apps replacing printed programs",
        "Virtual attendance options",
        "Digital signage instead of printed banners",
        "Online networking platforms",
        "QR codes for information access"
      ],
      icon: "📱",
      stat: "64%",
      statText: "of attendees prefer digital event materials over printed ones"
    },
    {
      title: "Sustainable Venues",
      description: "Choosing the right venue is critical for sustainable events, with a focus on environmental certifications and green practices.",
      details: [
        "LEED-certified buildings",
        "Venues with renewable energy sources",
        "Natural lighting to reduce energy use",
        "Water conservation systems",
        "Accessibility to public transportation"
      ],
      icon: "🏢",
      stat: "81%",
      statText: "of corporate clients prioritize sustainable venues when planning events"
    },
    {
      title: "Local Sourcing",
      description: "Supporting local economies while reducing transportation emissions is a key trend in sustainable event planning.",
      details: [
        "Locally sourced food and beverages",
        "Hiring local staff and vendors",
        "Using local artisans for decor and gifts",
        "Partnering with community organizations",
        "Showcasing local culture and traditions"
      ],
      icon: "📍",
      stat: "67%",
      statText: "reduction in carbon emissions when using local suppliers"
    }
  ];

  return (
    <div className="sustainable-events">
      {/* Section 1: Hero and Introduction */}
      <section className="sustainable-hero">
        <div className="container">
          <h1>Top 5 Trends in Sustainable Event Planning</h1>
          <p>Discover how the events industry is embracing sustainability with innovative approaches that reduce environmental impact while creating memorable experiences.</p>
          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-number">89%</span>
              <span className="stat-label">of attendees prefer sustainable events</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">42%</span>
              <span className="stat-label">reduction in waste at sustainable events</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+65%</span>
              <span className="stat-label">growth in sustainable events since 2018</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Trends */}
      <section className="trends-section">
        <div className="container">
          <h2>Key Sustainable Event Trends</h2>
          <p className="section-subtitle">Explore the innovative approaches transforming the events industry</p>
          
          <div className="trends-container">
            <div className="trends-nav">
              {trends.map((trend, index) => (
                <button
                  key={index}
                  className={`trend-nav-item ${index === activeTrend ? 'active' : ''}`}
                  onClick={() => setActiveTrend(index)}
                >
                  <span className="trend-icon">{trend.icon}</span>
                  <span className="trend-title">{trend.title}</span>
                </button>
              ))}
            </div>
            
            <div className="trend-content">
              <div className="trend-header">
                <h3>{trends[activeTrend].title}</h3>
                <div className="trend-stat">
                  <span className="stat-figure">{trends[activeTrend].stat}</span>
                  <span className="stat-desc">{trends[activeTrend].statText}</span>
                </div>
              </div>
              
              <p>{trends[activeTrend].description}</p>
              
              <div className="trend-details">
                <h4>Implementation Strategies:</h4>
                <ul>
                  {trends[activeTrend].details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog1;

<style jsx>{`
  .sustainable-events {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  /* Section 1: Hero */
  .sustainable-hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 80px 0;
    text-align: center;
  }
  
  .sustainable-hero h1 {
    font-size: 2.8rem;
    margin-bottom: 20px;
    font-weight: 700;
  }
  
  .sustainable-hero p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 40px;
    opacity: 0.9;
  }
  
  .stats-bar {
    display: flex;
    justify-content: space-around;
    max-width: 1000px;
    margin: 0 auto;
    flex-wrap: wrap;
  }
  
  .stat-item {
    text-align: center;
    padding: 20px;
    flex: 1;
    min-width: 200px;
  }
  
  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: #ff6347;
    margin-bottom: 10px;
  }
  
  .stat-label {
    font-size: 1rem;
    opacity: 0.9;
  }
  
  /* Section 2: Trends */
  .trends-section {
    padding: 80px 0;
    background: white;
  }
  
  .trends-section h2 {
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 15px;
    color: #333;
  }
  
  .section-subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 50px;
    font-size: 1.1rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .trends-container {
    display: flex;
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .trends-nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .trend-nav-item {
    background: #f5f5f5;
    border: none;
    padding: 15px 20px;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 15px;
    border-left: 4px solid transparent;
  }
  
  .trend-nav-item:hover {
    background: #eeeeee;
  }
  
  .trend-nav-item.active {
    background: white;
    border-left-color: #ff6347;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  }
  
  .trend-icon {
    font-size: 1.5rem;
  }
  
  .trend-title {
    font-weight: 600;
    color: #333;
  }
  
  .trend-content {
    flex: 2;
    background: white;
    padding: 30px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
  }
  
  .trend-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eeeeee;
  }
  
  .trend-header h3 {
    font-size: 1.8rem;
    color: #333;
    margin: 0;
  }
  
  .trend-stat {
    text-align: right;
  }
  
  .stat-figure {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: #ff6347;
  }
  
  .stat-desc {
    font-size: 0.9rem;
    color: #666;
    max-width: 150px;
    display: block;
  }
  
  .trend-content p {
    color: #444;
    line-height: 1.7;
    margin-bottom: 25px;
  }
  
  .trend-details h4 {
    color: #333;
    margin-bottom: 15px;
    font-size: 1.2rem;
  }
  
  .trend-details ul {
    list-style: none;
    padding: 0;
  }
  
  .trend-details li {
    padding: 8px 0;
    padding-left: 25px;
    position: relative;
    color: #444;
  }
  
  .trend-details li:before {
    content: "•";
    color: #ff6347;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: 3px;
  }
  
  /* Responsive Design */
  @media (max-width: 900px) {
    .trends-container {
      flex-direction: column;
    }
    
    .trends-nav {
      flex-direction: row;
      overflow-x: auto;
      padding-bottom: 15px;
    }
    
    .trend-nav-item {
      flex-direction: column;
      text-align: center;
      min-width: 120px;
      border-left: none;
      border-bottom: 4px solid transparent;
    }
    
    .trend-nav-item.active {
      border-left-color: transparent;
      border-bottom-color: #ff6347;
    }
  }
  
  @media (max-width: 768px) {
    .sustainable-hero h1 {
      font-size: 2.2rem;
    }
    
    .stats-bar {
      flex-direction: column;
      gap: 20px;
    }
    
    .trend-header {
      flex-direction: column;
    }
    
    .trend-stat {
      text-align: left;
      margin-top: 15px;
    }
  }
`}</style>