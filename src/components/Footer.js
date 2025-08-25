import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo and About */}
        <div className="footer-section">
          <img src="/images/logo.png" alt="Stackly Logo" className="footer-logo" />
          <p className="footer-description">
            Stackly empowers businesses with cutting-edge cloud, AI, and cybersecurity solutions to transform your digital future.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>

            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/corporate-events">Corporate Events</Link></li>
            <li><Link to="/social-celebrations">Social Celebrationst</Link></li>

            <li><Link to="/festivals-concerts">Festival & Concerts</Link></li>
            <li><Link to="/trade-shows">Trade Shows</Link></li>
            <li><Link to="/private-events">Private Events</Link></li>
            <li><Link to="/non-profit-galas">Non-Profit Galas</Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="footer-section">
          <h4>Connect with us</h4>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/login"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/linkedin.png"
                alt="LinkedIn"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="https://www.twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/twitter.png"
                alt="Twitter"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/facebook.png"
                alt="Facebook"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="https://mail.google.com"
              aria-label="Gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/google.png"
                alt="Gmail"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
          <p className="footer-contact">
            Email: support@stackly.com<br />
            Phone: +1 (800) 123-4567
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        {/* Scroll to Top Button */}
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          ⬆️
        </button>
        <p>© {new Date().getFullYear()} Stackly. All rights reserved By ESS.</p>
      </div>
    </footer>
  );
};

export default Footer;