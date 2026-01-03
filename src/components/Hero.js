// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a link element for PDF download
    const link = document.createElement('a');
    
    // Path to your PDF in public folder
    link.href = '/Joseph_Obanovwe_Resume.pdf';
    
    // Set the download attribute with a filename
    link.download = 'Joseph_Obanovwe_FullStack_Developer.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    alert('Resume downloaded successfully! Check your downloads folder.');
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left side - Text content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">Full-Stack Developer</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Joseph</span> Obanovwe
          </h1>
          
          <h2 className="hero-subtitle">
            <span className="typewriter-text">
              Building <span className="highlight">scalable</span> web applications
            </span>
          </h2>
          
          <p className="hero-description">
            A passionate Full-Stack Developer specializing in React and Node.js, 
            creating efficient and user-centered applications. Based in Lagos, Nigeria.
          </p>
          
          <div className="hero-location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Lagos, Nigeria</span>
          </div>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleContactClick}>
              Get In Touch
              <i className="fas fa-arrow-right"></i>
            </button>
            
            <button className="btn btn-secondary" onClick={handleDownloadResume}>
              <i className="fas fa-download"></i>
              Download Resume
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">Full-Stack</span>
              <span className="stat-label">Expertise</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">React</span>
              <span className="stat-label">Specialist</span>
            </div>
          </div>
        </div>
        
        {/* Right side - Your Photo */}
        <div className="hero-visual">
          <div className="image-container">
            <div className="profile-image-wrapper">
              <img 
                src="/images/joseph-photo.png" 
                alt="Joseph Obanovwe - Full Stack Developer" 
                className="profile-image"
                onError={(e) => {
                  // If image fails to load, show initials
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="profile-initials">
                      <span class="initials">JO</span>
                      <div class="initials-subtitle">Full-Stack Developer</div>
                    </div>
                  `;
                }}
              />
              {/* Decorative frame */}
              <div className="image-frame"></div>
              
              {/* Tech badges */}
              <div className="tech-badge react-badge">
                <i className="fab fa-react"></i>
                <span>React</span>
              </div>
              <div className="tech-badge node-badge">
                <i className="fab fa-node-js"></i>
                <span>Node.js</span>
              </div>
              <div className="tech-badge js-badge">
                <i className="fab fa-js-square"></i>
                <span>JavaScript</span>
              </div>
            </div>
            
            {/* Experience Card */}
            <div className="experience-card">
              <div className="exp-header">
                <i className="fas fa-briefcase"></i>
                <h4>Development Experience</h4>
              </div>
              <div className="exp-items">
                <div className="exp-item">
                  <span className="exp-years">2+ Years</span>
                  <span className="exp-title">Web Development</span>
                </div>
                <div className="exp-item">
                  <span className="exp-years">3+</span>
                  <span className="exp-title">Projects</span>
                </div>
                <div className="exp-item">
                  <span className="exp-years">Full-Stack</span>
                  <span className="exp-title">Specialist</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating shapes for background effect */}
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll down</p>
      </div>
    </section>
  );
};

export default Hero;
