// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS Configuration (You need to sign up at https://www.emailjs.com)
    // Replace these with your actual EmailJS credentials
    const serviceID = 'service_kb2r9df'; // Get from EmailJS dashboard
    const templateID = 'template_362lar6'; // Get from EmailJS dashboard
    const userID = '_R6xkt-PbFCT-QTGB'; // Get from EmailJS dashboard
    
    // For now, let's use a placeholder that simulates sending
    // TODO: Replace with real EmailJS integration
    
    // Simulate email sending for demo
    /*
    setTimeout(() => {
      console.log('Form would be sent:', formData);
      console.log('In production, connect EmailJS with your credentials');
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
    */
    // ACTUAL EMAILJS CODE (Uncomment after setting up):
    
    emailjs.send(serviceID, templateID, formData, userID)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitting(false);
        setSubmitStatus('success');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }, (error) => {
        console.error('Email sending failed:', error.text);
        setIsSubmitting(false);
        setSubmitStatus('error');
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      });

  };

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
    
    // Show a success message
    setSubmitStatus('resume');
    setTimeout(() => {
      setSubmitStatus(null);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'obanovwejoseph@gmail.com',
      link: 'mailto:obanovwejoseph@gmail.com',
      color: '#2563eb'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Lagos, Nigeria',
      color: '#16a34a'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+234 8161375240',
      color: '#7c3aed'
    },
    {
      icon: 'fas fa-clock',
      title: 'Response Time',
      value: 'Within 24 hours',
      color: '#f59e0b'
    }
  ];

  const socialLinks = [
    {
      icon: 'fab fa-github',
      name: 'GitHub',
      url: 'https://github.com/joekaro',
      color: '#333333'
    },
    {
      icon: 'fab fa-linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/joseph-obanovwe-481a7130a',
      color: '#0077B5'
    },
    {
      icon: 'fab fa-twitter',
      name: 'Twitter',
      url: '#',
      color: '#1DA1F2'
    },
    {
      icon: 'fab fa-codepen',
      name: 'CodePen',
      url: '#',
      color: '#000000'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-paper-plane"></i>
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="contact-content">
          {/* Left Column - Contact Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h3 className="form-title">
                <i className="fas fa-comment-dots"></i>
                Send me a message
              </h3>
              <p className="form-subtitle">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Success Messages */}
              {submitStatus === 'success' && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'resume' && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <span>Resume downloaded successfully!</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  <span>Failed to send message. Please try again or email me directly.</span>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <i className="fas fa-tag"></i>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-edit"></i>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <div className="form-footer">
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>
                
                <button 
                  type="button" 
                  className="download-resume-btn"
                  onClick={handleDownloadResume}
                >
                  <i className="fas fa-download"></i>
                  Download Resume
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="contact-info-container">
            <div className="contact-info-card">
              <h3 className="info-title">
                <i className="fas fa-info-circle"></i>
                Contact Information
              </h3>
              
              <div className="info-items">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <div className="info-icon" style={{ backgroundColor: `${info.color}20` }}>
                      <i className={info.icon} style={{ color: info.color }}></i>
                    </div>
                    <div className="info-content">
                      <h4 className="info-item-title">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="info-value"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="info-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="social-links-section">
                <h4 className="social-title">
                  <i className="fas fa-share-alt"></i>
                  Connect with me
                </h4>
                <div className="social-links-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ 
                        backgroundColor: `${social.color}20`,
                        borderColor: social.color,
                        color: social.color
                      }}
                    >
                      <i className={social.icon}></i>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="availability-card">
                <div className="availability-header">
                  <div className="status-indicator">
                    <div className="status-dot"></div>
                    <span className="status-text">Available for opportunities</span>
                  </div>
                  <span className="availability-badge">Open to work</span>
                </div>
                <p className="availability-message">
                  I'm currently available for freelance projects and full-time opportunities.
                  Let's discuss how I can help bring your ideas to life!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;