// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // Add this useEffect to Navbar.js (after the other useEffect)
useEffect(() => {
  if (isMenuOpen) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
  
  return () => {
    document.body.classList.remove('menu-open');
  };
}, [isMenuOpen]);

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Close menu when resizing to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu on mobile after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && isMenuOpen && !event.target.closest('.nav-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobile, isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">JO</span>
          <span className="logo-dot">.</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            <i className="fas fa-user"></i>
            <span>About</span>
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            <i className="fas fa-code"></i>
            <span>Projects</span>
          </button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">
            <i className="fas fa-briefcase"></i>
            <span>Experience</span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </button>
        </div>

        {/* Social Icons - Show on desktop, hide in mobile menu */}
        <div className="social-icons desktop-only">
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

        {/* Social Icons in Mobile Menu */}
        <div className={`social-icons mobile-only ${isMenuOpen ? 'active' : ''}`}>
          <a href="https://github.com/joekaro" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/joseph-obanovwe-481a7130a" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="mailto:obanovwejoseph@gmail.com" className="social-icon">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;