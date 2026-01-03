// src/components/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  // Experience Data
  const experiences = [
    {
      id: 1,
      title: "IT Support Officer",
      company: "Starbite Integrated Catering Services Ltd",
      location: "Lagos, Nigeria",
      period: "September 2025 – Present",
      type: "Full-time",
      description: "Providing technical support and maintaining IT infrastructure for a leading catering services company.",
      responsibilities: [
        "Manage and maintain company IT systems and networks",
        "Provide technical support to staff and resolve IT issues",
        "Implement and monitor cybersecurity measures",
        "Assist in digital transformation initiatives"
      ],
      skills: ["IT Support", "Networking", "Technical Troubleshooting", "System Maintenance"],
      logoColor: "#2563eb"
    },
    {
      id: 2,
      title: "Full-Stack Developer Intern",
      company: "Hostedlinger",
      location: "Remote",
      period: "2025",
      type: "Internship",
      description: "Contributed to the development of Cityserver webAPP, an online platform for ordering artisan services.",
      responsibilities: [
        "Developed user interfaces with React components",
        "Implemented backend APIs with Node.js and Express",
        "Collaborated with team using Git version control",
        "Participated in agile development sprints"
      ],
      skills: ["React", "Node.js", "Express", "Git", "Agile Development"],
      logoColor: "#16a34a"
    },
    {
      id: 3,
      title: "Freelance Web Developer",
      company: "Self-employed",
      location: "Lagos, Nigeria",
      period: "2024 – Present",
      type: "Freelance",
      description: "Creating responsive websites and web applications for corporate and small businesses.",
      responsibilities: [
        "Develop custom landing pages for businesses",
        "Implement responsive designs for all devices",
        "Optimize websites for performance and SEO",
        "Provide ongoing maintenance and support"
      ],
      skills: ["Web Development", "Responsive Design", "JavaScript", "HTML/CSS"],
      logoColor: "#7c3aed"
    }
  ];

  // Education Data
  const education = [
    {
      id: 1,
      degree: "BSc Computer Science",
      institution: "Olabisi Onabanjo University",
      period: "2019 – 2023",
      description: "Specialized in software engineering, algorithms, and database management systems.",
      courses: ["Data Structures", "Software Engineering", "Database Systems", "Web Technologies"],
      grade: "Second class Upper",
      icon: "fas fa-university"
    },
    {
      id: 2,
      degree: "OND Computer Science",
      institution: "Ogun State Institute of Technology",
      period: "2018 – 2020",
      description: "Foundation in computer programming and information technology principles.",
      courses: ["Programming Fundamentals", "Computer Architecture", "Networking Basics"],
      grade: "Distinction",
      icon: "fas fa-graduation-cap"
    }
  ];

  // Certifications Data
  const certifications = [
    {
      id: 1,
      name: "Data Analytics",
      provider: "Data Science Africa (DSA)",
      period: "2025",
      description: "Comprehensive data analysis and visualization training",
      icon: "fas fa-chart-line"
    },
    {
      id: 2,
      name: "Software Development",
      provider: "Moducode",
      period: "2025",
      description: "Full-stack web development certification",
      icon: "fas fa-code"
    }
  ];

  // Skills Data with proficiency levels
  const skills = {
    frontend: [
      { name: "React", level: 85, color: "#61DAFB" },
      { name: "Vue.js", level: 75, color: "#42B883" },
      { name: "JavaScript", level: 90, color: "#F7DF1E" },
      { name: "HTML/CSS", level: 95, color: "#E34F26" },
      { name: "Tailwind CSS", level: 80, color: "#06B6D4" }
    ],
    backend: [
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "Express.js", level: 80, color: "#000000" },
      { name: "Python", level: 70, color: "#3776AB" },
      { name: "REST APIs", level: 85, color: "#FF6B6B" }
    ],
    databases: [
      { name: "MongoDB", level: 80, color: "#47A248" },
      { name: "PostgreSQL", level: 75, color: "#336791" },
      { name: "MySQL", level: 70, color: "#4479A1" }
    ],
    tools: [
      { name: "Git", level: 90, color: "#F05032" },
      { name: "Figma", level: 75, color: "#F24E1E" },
      { name: "Docker", level: 65, color: "#2496ED" },
      { name: "AWS", level: 60, color: "#FF9900" }
    ]
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-briefcase"></i>
            <span>My Journey</span>
          </div>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey, education background, and technical skills
          </p>
        </div>

        <div className="experience-content">
          {/* Left Column - Experience Timeline */}
          <div className="experience-column">
            <div className="column-header">
              <h3 className="column-title">
                <i className="fas fa-history"></i>
                Work Experience
              </h3>
            </div>
            
            <div className="timeline">
              {experiences.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker" style={{ backgroundColor: exp.logoColor }}>
                    <i className="fas fa-briefcase"></i>
                  </div>
                  
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div className="timeline-title-wrapper">
                        <h4 className="timeline-title">{exp.title}</h4>
                        <span className="timeline-company">{exp.company}</span>
                      </div>
                      <div className="timeline-meta">
                        <span className="timeline-period">{exp.period}</span>
                        <span className="timeline-type" style={{ backgroundColor: `${exp.logoColor}20`, color: exp.logoColor }}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="timeline-description">{exp.description}</p>
                    
                    <div className="timeline-responsibilities">
                      <h5>Key Responsibilities:</h5>
                      <ul>
                        {exp.responsibilities.map((resp, index) => (
                          <li key={index}>
                            <i className="fas fa-check" style={{ color: exp.logoColor }}></i>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="timeline-skills">
                      {exp.skills.map((skill, index) => (
                        <span key={index} className="skill-tag" style={{ borderColor: exp.logoColor }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Education & Skills */}
          <div className="education-column">
            {/* Education Cards */}
            <div className="education-cards">
              <h3 className="column-title">
                <i className="fas fa-graduation-cap"></i>
                Education
              </h3>
              
              {education.map((edu) => (
                <div key={edu.id} className="education-card">
                  <div className="education-icon">
                    <i className={edu.icon}></i>
                  </div>
                  
                  <div className="education-content">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <span className="education-institution">{edu.institution}</span>
                    <span className="education-period">{edu.period}</span>
                    
                    <p className="education-description">{edu.description}</p>
                    
                    <div className="education-courses">
                      <span className="courses-label">Key Courses:</span>
                      <div className="courses-tags">
                        {edu.courses.map((course, index) => (
                          <span key={index} className="course-tag">{course}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="education-grade">
                      <span className="grade-label">Status:</span>
                      <span className="grade-value">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="certifications-section">
              <h3 className="column-title">
                <i className="fas fa-certificate"></i>
                Certifications
              </h3>
              
              <div className="certifications-grid">
                {certifications.map((cert) => (
                  <div key={cert.id} className="certification-card">
                    <div className="certification-icon">
                      <i className={cert.icon}></i>
                    </div>
                    <div className="certification-content">
                      <h4 className="certification-name">{cert.name}</h4>
                      <span className="certification-provider">{cert.provider}</span>
                      <span className="certification-period">{cert.period}</span>
                      <p className="certification-description">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Overview */}
            <div className="skills-overview">
              <h3 className="column-title">
                <i className="fas fa-tools"></i>
                Skills Overview
              </h3>
              
              <div className="skills-category">
                <h4 className="skills-category-title">Frontend</h4>
                <div className="skills-list">
                  {skills.frontend.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: skill.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skills-category">
                <h4 className="skills-category-title">Backend</h4>
                <div className="skills-list">
                  {skills.backend.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: skill.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skills-category">
                <h4 className="skills-category-title">Tools & Others</h4>
                <div className="skills-tags-grid">
                  {skills.tools.map((tool) => (
                    <div 
                      key={tool.name} 
                      className="skill-tag-circle"
                      style={{ 
                        backgroundColor: `${tool.color}20`,
                        borderColor: tool.color,
                        color: tool.color
                      }}
                    >
                      <span>{tool.name}</span>
                      <span className="skill-level-circle">{tool.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
