import React, { useState } from 'react';

const Blog3 = () => {
  const [activeSection, setActiveSection] = useState(0);
  
  // Budget allocation data for the chart
  const budgetData = [
    { category: 'Venue', percentage: 40, color: '#ff6347' },
    { category: 'Catering', percentage: 25, color: '#333' },
    { category: 'Photography', percentage: 10, color: '#666' },
    { category: 'Attire', percentage: 8, color: '#999' },
    { category: 'Entertainment', percentage: 7, color: '#ccc' },
    { category: 'Decor', percentage: 5, color: '#ff6347' },
    { category: 'Miscellaneous', percentage: 5, color: '#eee' }
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Budgeting for Your Dream Wedding</h1>
        <p style={styles.subtitle}>Creative financial planning for your special day</p>
      </header>
      
      <nav style={styles.nav}>
        <button 
          style={{...styles.navButton, ...(activeSection === 0 ? styles.activeNavButton : {})}}
          onClick={() => setActiveSection(0)}
        >
          Financial Architecture
        </button>
        <button 
          style={{...styles.navButton, ...(activeSection === 1 ? styles.activeNavButton : {})}}
          onClick={() => setActiveSection(1)}
        >
          Money Alchemy
        </button>
        <button 
          style={{...styles.navButton, ...(activeSection === 2 ? styles.activeNavButton : {})}}
          onClick={() => setActiveSection(2)}
        >
          Budget Visualization
        </button>
      </nav>
      
      <div style={styles.content}>
        {activeSection === 0 && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Financial Architecture: Building Your Budget Framework</h2>
            <div style={styles.cardContainer}>
              <div style={styles.card}>
                <div style={styles.cardIcon}>🏛️</div>
                <h3 style={styles.cardTitle}>The Foundation Stones</h3>
                <p style={styles.cardText}>
                  Your non-negotiables form the foundation of your wedding budget. Identify what matters most 
                  to you as a couple—whether it's photography, food, or venue—and allocate resources accordingly.
                </p>
                <ul style={styles.list}>
                  <li>Prioritize your top 3 must-haves</li>
                  <li>Assign percentage values to each category</li>
                  <li>Build flexibility for unexpected expenses</li>
                </ul>
              </div>
              
              <div style={styles.card}>
                <div style={styles.cardIcon}>📊</div>
                <h3 style={styles.cardTitle}>The Pillars of Allocation</h3>
                <p style={styles.cardText}>
                  Create structural pillars for your budget that support your vision. Traditional percentage 
                  allocations provide a starting point, but customize based on your priorities.
                </p>
                <div style={styles.pillarContainer}>
                  <div style={styles.pillar}>
                    <div style={{...styles.pillarFill, height: '70%', backgroundColor: '#ff6347'}}></div>
                    <span>Venue & Catering (65%)</span>
                  </div>
                  <div style={styles.pillar}>
                    <div style={{...styles.pillarFill, height: '50%', backgroundColor: '#333'}}></div>
                    <span>Visuals & Memories (20%)</span>
                  </div>
                  <div style={styles.pillar}>
                    <div style={{...styles.pillarFill, height: '30%', backgroundColor: '#666'}}></div>
                    <span>Attire & Beauty (10%)</span>
                  </div>
                  <div style={styles.pillar}>
                    <div style={{...styles.pillarFill, height: '20%', backgroundColor: '#999'}}></div>
                    <span>Miscellaneous (5%)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {activeSection === 1 && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Money Alchemy: Transforming Your Budget Constraints</h2>
            <div style={styles.cardContainer}>
              <div style={styles.card}>
                <div style={styles.cardIcon}>⚗️</div>
                <h3 style={styles.cardTitle}>The Philosopher's Stone</h3>
                <p style={styles.cardText}>
                  Learn the art of transforming budgetary limitations into creative opportunities. 
                  Constraints often breed innovation in wedding planning.
                </p>
                <div style={styles.tipBox}>
                  <h4 style={styles.tipTitle}>Creative Solutions:</h4>
                  <ul style={styles.list}>
                    <li>Off-peak season discounts (20-30% savings)</li>
                    <li>Digital invitations vs. traditional printed</li>
                    <li>Local seasonal flowers instead of imports</li>
                    <li>DIY decor with personal significance</li>
                  </ul>
                </div>
              </div>
              
              <div style={styles.card}>
                <div style={styles.cardIcon}>🔍</div>
                <h3 style={styles.cardTitle}>The Magnifying Glass</h3>
                <p style={styles.cardText}>
                  Identify hidden costs that often surprise couples and learn how to anticipate them 
                  in your budgeting process.
                </p>
                <div style={styles.hiddenCosts}>
                  <div style={styles.costItem}>
                    <span>Postage for invitations</span>
                    <span>$100-300</span>
                  </div>
                  <div style={styles.costItem}>
                    <span>Marriage license</span>
                    <span>$50-150</span>
                  </div>
                  <div style={styles.costItem}>
                    <span>Vendor meals</span>
                    <span>$200-500</span>
                  </div>
                  <div style={styles.costItem}>
                    <span>Overtime fees</span>
                    <span>$200-800</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {activeSection === 2 && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Budget Visualization: Seeing Your Financial Landscape</h2>
            <div style={styles.visualization}>
              <div style={styles.chartContainer}>
                <h3 style={styles.chartTitle}>Typical Wedding Budget Allocation</h3>
                <div style={styles.chart}>
                  {budgetData.map((item, index) => (
                    <div key={index} style={styles.chartItem}>
                      <div style={styles.chartLabel}>
                        <div style={{...styles.colorBox, backgroundColor: item.color}}></div>
                        <span>{item.category}</span>
                      </div>
                      <div style={styles.chartBarContainer}>
                        <div 
                          style={{
                            ...styles.chartBar,
                            width: `${item.percentage}%`,
                            backgroundColor: item.color
                          }}
                        >
                          <span style={styles.percentageText}>{item.percentage}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div style={styles.savingsTips}>
                <h3 style={styles.tipsTitle}>Smart Saving Strategies</h3>
                <div style={styles.tip}>
                  <h4 style={styles.tipHeader}>The 10% Buffer Rule</h4>
                  <p>Always keep 10% of your total budget unallocated for unexpected expenses.</p>
                </div>
                <div style={styles.tip}>
                  <h4 style={styles.tipHeader}>The Three-Quotes Rule</h4>
                  <p>Get at least three quotes for each major vendor to ensure competitive pricing.</p>
                </div>
                <div style={styles.tip}>
                  <h4 style={styles.tipHeader}>The Priority-Based Cutting</h4>
                  <p>If you need to reduce costs, start with categories lowest on your priority list.</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '1200px',
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
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
    flexWrap: 'wrap'
  },
  navButton: {
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: '600',
    backgroundColor: 'white',
    border: '2px solid #ff6347',
    color: '#ff6347',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    margin: '0 10px 10px 10px'
  },
  activeNavButton: {
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
    gap: '30px'
  },
  card: {
    flex: '1 1 400px',
    backgroundColor: '#f9f9f9',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    minWidth: '300px'
  },
  cardIcon: {
    fontSize: '2.5rem',
    marginBottom: '15px'
  },
  cardTitle: {
    fontSize: '1.3rem',
    color: '#ff6347',
    marginBottom: '15px'
  },
  cardText: {
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '20px'
  },
  list: {
    paddingLeft: '20px',
    lineHeight: '1.8'
  },
  pillarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '200px',
    marginTop: '20px'
  },
  pillar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '1',
    margin: '0 5px'
  },
  pillarFill: {
    width: '100%',
    borderRadius: '4px 4px 0 0',
    transition: 'height 0.5s ease'
  },
  tipBox: {
    backgroundColor: '#fff4f2',
    padding: '15px',
    borderRadius: '6px',
    borderLeft: '4px solid #ff6347'
  },
  tipTitle: {
    color: '#ff6347',
    marginBottom: '10px'
  },
  hiddenCosts: {
    marginTop: '20px'
  },
  costItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px dashed #ddd'
  },
  visualization: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px'
  },
  chartContainer: {
    flex: '2 1 600px',
    backgroundColor: '#f9f9f9',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    minWidth: '300px'
  },
  chartTitle: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333'
  },
  chart: {
    marginTop: '20px'
  },
  chartItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px'
  },
  chartLabel: {
    display: 'flex',
    alignItems: 'center',
    width: '150px',
    fontWeight: '500'
  },
  colorBox: {
    width: '15px',
    height: '15px',
    marginRight: '10px'
  },
  chartBarContainer: {
    flex: '1',
    backgroundColor: '#eee',
    height: '25px',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  chartBar: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '10px',
    transition: 'width 1s ease'
  },
  percentageText: {
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textShadow: '1px 1px 1px rgba(0,0,0,0.3)'
  },
  savingsTips: {
    flex: '1 1 300px',
    backgroundColor: '#f9f9f9',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    minWidth: '250px'
  },
  tipsTitle: {
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center'
  },
  tip: {
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '1px dashed #ddd'
  },
  tipHeader: {
    color: '#ff6347',
    marginBottom: '8px'
  }
};

export default Blog3;