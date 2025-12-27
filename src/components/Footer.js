// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Tagline */}
          <div className="footer-brand">
            <div className="footer-logo" onClick={scrollToTop}>
              <span className="logo-text">JO</span>
              <span className="logo-dot" style={{ color: '#16a34a' }}>.</span>
            </div>
            <p className="footer-tagline">
              Full-Stack Developer | React & Node.js Specialist
            </p>
            <p className="footer-location">
              <i className="fas fa-map-marker-alt"></i>
              Lagos, Nigeria
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="links-list">
              <li><button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
              <li><button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
              <li><button onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>Experience</button></li>
              <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="footer-tech">
            <h4 className="footer-title">Technologies</h4>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Vue.js</span>
              <span className="tech-tag">Express</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="contact-info">
              <a href="mailto:obanovwejoseph@gmail.com" className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>obanovwejoseph@gmail.com</span>
              </a>
              <div className="social-icons">
                <a href="https://github.com/joekaro" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/joseph-obanovwe-481a7130a" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:obanovwejoseph@gmail.com" className="social-icon">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Joseph Obanovwe. All rights reserved.</p>
            <p className="footer-note">
              Built with <i className="fas fa-heart" style={{ color: '#ef4444' }}></i> using React
            </p>
          </div>
          
          <button className="back-to-top" onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;