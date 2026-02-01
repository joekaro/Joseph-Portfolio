// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-user"></i>
            <span>About Me</span>
          </div>
          <h2 className="section-title">Get to Know Me</h2>
          <p className="section-subtitle">
            Passionate developer crafting digital solutions with modern technologies
          </p>
        </div>

        <div className="about-content">
          {/* Left Column - Introduction */}
          <div className="about-intro">
            <div className="intro-card">
              <div className="intro-header">
                <div className="intro-avatar">
                  <div className="avatar-placeholder">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="avatar-info">
                    <h3>Joseph Obanovwe</h3>
                    <p>Full-Stack Developer</p>
                    <div className="avatar-location">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Lagos, Nigeria</span>
                    </div>
                  </div>
                </div>
                
                <div className="intro-stats">
                  <div className="stat-item">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">2+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">Full-Stack</span>
                    <span className="stat-label">Specialist</span>
                  </div>
                </div>
              </div>

              <div className="intro-body">
                <p className="intro-text">
                  Hello! I'm Joseph, a passionate Full-Stack Developer specializing in React and Node.js. 
                  I create efficient, scalable web applications with clean code and modern technologies.
                </p>
                
                <p className="intro-text">
                  Currently based in Lagos, Nigeria, I combine technical expertise with creative 
                  problem-solving to deliver exceptional digital experiences.
                </p>

                <div className="intro-highlights">
                  <h4>What I Bring:</h4>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" style={{ color: '#2563eb' }}></i>
                      <span>Full-Stack Development expertise</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle" style={{ color: '#2563eb' }}></i>
                      <span>Responsive and modern design</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle" style={{ color: '#2563eb' }}></i>
                      <span>Clean, maintainable code</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle" style={{ color: '#2563eb' }}></i>
                      <span>Problem-solving mindset</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Technical Expertise */}
          <div className="about-expertise">
            <div className="expertise-card">
              <h3 className="expertise-title">
                <i className="fas fa-code"></i>
                Technical Expertise
              </h3>
              
              <div className="expertise-categories">
                <div className="category">
                  <h4>Frontend Development</h4>
                  <div className="category-skills">
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Next.js (App Router)</span>
                    <span className="skill-tag">Vue.js</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">HTML5/CSS3</span>
                    <span className="skill-tag">Tailwind CSS</span>
                    <span className="skill-tag">Bootstrap</span>
                  </div>
                </div>

                <div className="category">
                  <h4>Backend Development</h4>
                  <div className="category-skills">
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Express.js</span>
                    <span className="skill-tag">REST APIs</span>
                    <span className="skill-tag">Authentication & Authorization (JWT, RBAC)</span>
                    <span className="skill-tag">Python(Laravel)</span>
                  </div>
                </div>

                <div className="category">
                  <h4>Databases</h4>
                  <div className="category-skills">
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">PostgreSQL</span>
                    <span className="skill-tag">MySQL</span>
                  </div>
                </div>

                <div className="category">
                  <h4>Tools & Others</h4>
                  <div className="category-skills">
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">Figma</span>
                    <span className="skill-tag">Docker</span>
                    <span className="skill-tag">AWS</span>
                    <span className="skill-tag">CI/CD</span>
                  </div>
                </div>
              </div>

              <div className="expertise-quote">
                <i className="fas fa-quote-left"></i>
                <p>
                  I believe in writing code that's not just functional, but also clean, maintainable, 
                  and scalable. Every project is an opportunity to learn and grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
