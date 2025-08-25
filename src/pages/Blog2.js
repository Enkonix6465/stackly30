import React, { useState } from 'react';

const Blog2 = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Finding Your Perfect Event Space</h1>
        <p style={styles.subtitle}>Creative approaches to venue selection that go beyond the basics</p>
      </header>
      
      <div style={styles.tabContainer}>
        <button 
          style={{...styles.tab, ...(activeTab === 0 ? styles.activeTab : {})}} 
          onClick={() => setActiveTab(0)}
        >
          The Vibe Assessment
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 1 ? styles.activeTab : {})}} 
          onClick={() => setActiveTab(1)}
        >
          Spatial Alchemy
        </button>
      </div>
      
      <div style={styles.content}>
        {activeTab === 0 ? (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>The Vibe Assessment: Reading a Space's Energy</h2>
            <div style={styles.cardContainer}>
              <div style={styles.card}>
                <div style={styles.cardIcon}>🔊</div>
                <h3 style={styles.cardTitle}>Acoustic Personality</h3>
                <p style={styles.cardText}>
                  Every venue has its own sound signature. Visit at a similar time to your event and listen. 
                  Is there ambient noise? How do sounds carry? The acoustics can make or break your gathering.
                </p>
              </div>
              
              <div style={styles.card}>
                <div style={styles.cardIcon}>💡</div>
                <h3 style={styles.cardTitle}>Lighting Language</h3>
                <p style={styles.cardText}>
                  Notice how light interacts with the space throughout the day. Does natural light create 
                  interesting patterns? How does artificial lighting affect the mood? The right lighting 
                  tells your story without words.
                </p>
              </div>
              
              <div style={styles.card}>
                <div style={styles.cardIcon}>👣</div>
                <h3 style={styles.cardTitle}>Flow Footprint</h3>
                <p style={styles.cardText}>
                  Trace the natural pathways people will take. Where do doors and architecture naturally 
                  guide guests? The unconscious flow of movement through a space significantly impacts 
                  guest experience.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Spatial Alchemy: Transforming Venues Through Design Thinking</h2>
            <div style={styles.cardContainer}>
              <div style={styles.card}>
                <div style={styles.cardIcon}>🔄</div>
                <h3 style={styles.cardTitle}>Modular Mindset</h3>
                <p style={styles.cardText}>
                  Look beyond the current layout. How can movable elements or temporary structures 
                  create the experience you want? The best venues are clay, not marble - ready to be 
                  shaped for your vision.
                </p>
              </div>
              
              <div style={styles.card}>
                <div style={styles.cardIcon}>🌐</div>
                <h3 style={styles.cardTitle}>Context Weaving</h3>
                <p style={styles.cardText}>
                  How does the venue connect to its surroundings? Can you incorporate local art, 
                  culture, or landscape? A space that dialogues with its environment creates a 
                  richer, more authentic experience.
                </p>
              </div>
              
              <div style={styles.card}>
                <div style={styles.cardIcon}>🎭</div>
                <h3 style={styles.cardTitle}>Multi-Dimensional Experience</h3>
                <p style={styles.cardText}>
                  Plan for different engagement zones within the same venue. Create areas for 
                  interaction, reflection, and observation. Like a good story, your event should 
                  have rhythm and variety in its spatial narrative.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div style={styles.visualizer}>
        <h3 style={styles.visualizerTitle}>Venue Atmosphere Spectrum</h3>
        <div style={styles.spectrum}>
          <div style={styles.spectrumItem}>
            <div style={{...styles.spectrumBox, backgroundColor: '#f0f0f0'}}></div>
            <span>Minimalist</span>
          </div>
          <div style={styles.spectrumItem}>
            <div style={{...styles.spectrumBox, backgroundColor: '#d0d0d0'}}></div>
            <span>Industrial</span>
          </div>
          <div style={styles.spectrumItem}>
            <div style={{...styles.spectrumBox, backgroundColor: '#ff6347', opacity: 0.7}}></div>
            <span>Warm</span>
          </div>
          <div style={styles.spectrumItem}>
            <div style={{...styles.spectrumBox, backgroundColor: '#333'}}></div>
            <span>Intimate</span>
          </div>
          <div style={styles.spectrumItem}>
            <div style={{...styles.spectrumBox, backgroundColor: '#a0a0a0'}}></div>
            <span>Adaptable</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    color: '#333',
    backgroundColor: 'white',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '20px',
    borderBottom: '2px solid #ff6347'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    fontWeight: '300'
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px'
  },
  tab: {
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: '600',
    backgroundColor: 'white',
    border: '2px solid #ff6347',
    color: '#ff6347',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    margin: '0 10px'
  },
  activeTab: {
    backgroundColor: '#ff6347',
    color: 'white'
  },
  content: {
    marginBottom: '40px'
  },
  section: {
    padding: '20px'
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '30px',
    paddingBottom: '15px',
    borderBottom: '1px dashed #ccc'
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px'
  },
  card: {
    flex: '1 1 300px',
    backgroundColor: '#f9f9f9',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    minWidth: '250px'
  },
  cardIcon: {
    fontSize: '2rem',
    marginBottom: '15px'
  },
  cardTitle: {
    fontSize: '1.3rem',
    color: '#ff6347',
    marginBottom: '15px'
  },
  cardText: {
    lineHeight: '1.6',
    color: '#555'
  },
  visualizer: {
    backgroundColor: '#f5f5f5',
    padding: '30px',
    borderRadius: '8px',
    marginTop: '20px'
  },
  visualizerTitle: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  },
  spectrum: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap'
  },
  spectrumItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '1',
    minWidth: '100px'
  },
  spectrumBox: {
    width: '80%',
    height: '80px',
    marginBottom: '10px',
    borderRadius: '4px'
  }
};

export default Blog2;