// src/components/Projects.js
import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce store with user authentication, admin dashboard, and inventory management system. Built with modern technologies for optimal performance.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Redux"],
      features: [
        "User authentication & authorization",
        "Admin dashboard with analytics",
        "Product inventory management",
        "Shopping cart & checkout",
        "Order tracking system",
      ],
      github: "https://github.com/joekaro",
      demo: "https://modumart.netlify.app/",
      color: "#2563eb",
    },
    {
      id: 2,
      title: "Project Manager App",
      description:
        "A comprehensive platform for project management.",
      tech: ["React","TypeScript","JavaScript","Tailwind CSS", "React Beautiful DnD or dnd-kit", "Node.js + Express","MongoD" ],
      features: [
        "User authentication - Sign up, login, logout",
        "Projects - Create, view, edit, delete projects",
        "Add tasks to projects",
        "Kanban board view",
        "Dashboard",
      ],
      github: "https://github.com/joekaro",
      demo: "https://teamviews.vercel.app/",
      color: "#16a34a",
    },
    {
      id: 3,
      title: "Inventory management system",
      description:
        "A modern, full-featured inventory management system,Perfect for small to medium businesses to track products, manage stock, record sales, and monitor multiple locations.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Redux"],
      features: [
        "Product Management - Full CRUD operations for products",
        " Multi-Location Support - Track inventory across warehouses and stores",
        "Stock Movement Tracking - Complete history of all inventory transactions",
        "Low Stock Alerts - Automatic notifications when stock falls below reorder points",
        "Real-time Dashboard - Live statistics and key performance indicators",
      ],
      github: "https://github.com/joekaro",
      demo: "https://mystoreplace.netlify.app/",
      color: "#2563eb",
    },
   
    {
      id: 4,
      title: "Real Estate Website",
      description:
        "A responsive property listing platform with advanced search, filtering, and property management features for real estate agencies.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL"],
      features: [
        "Property search with filters",
        "Interactive property listings",
        "Responsive mobile design",
        "Contact forms & inquiries",
        "Image gallery & virtual tours"
      ],
      github: "https://github.com/joekaro",
      demo: "https://luxelivin.netlify.app/",
      color: "#7c3aed",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-code"></i>
            <span>My Work</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills in
            full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Project Header */}
              <div className="project-header">
                <div
                  className="project-icon"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  <i
                    className="fas fa-project-diagram"
                    style={{ color: project.color }}
                  ></i>
                </div>
                <div className="project-title-wrapper">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="project-description">{project.description}</p>

              {/* Project Features */}
              <div className="project-features">
                <h4 className="features-title">Key Features:</h4>
                <ul className="features-list">
                  {project.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <i
                        className="fas fa-check-circle"
                        style={{ color: project.color }}
                      ></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Links */}
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{ backgroundColor: project.color }}
                >
                  <i className="fab fa-github"></i>
                  View Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link demo-link"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Live Demo
                </a>
              </div>

              {/* Project Stats */}
              <div className="project-stats">
                <div className="stat">
                  <span className="stat-number">{project.tech.length}</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <span className="stat-number">{project.features.length}</span>
                  <span className="stat-label">Features</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <span className="stat-number">Full-Stack</span>
                  <span className="stat-label">Project</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="github-cta">
          <div className="github-stats">
            <div className="github-stat">
              <i className="fab fa-github"></i>
              <div>
                <span className="stat-number">View All Projects</span>
                <span className="stat-label">on GitHub</span>
              </div>
            </div>
            <a
              href="https://github.com/joekaro"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              Visit My GitHub
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
