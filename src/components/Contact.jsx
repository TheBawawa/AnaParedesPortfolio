import React, { useState } from 'react';
import '../styles/contact.css';

const INITIAL_STATE = { email: '', subject: '', message: '' };

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xvzwgeva", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSent(true);
        setFormData(INITIAL_STATE);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  if (isSent) {
    return (
      <div className="contact-container success-view">
        <div className="success-message">
          <span className="success-icon">✉️</span>
          <h2>Message Sent!</h2>
          <p>Thank you for reaching out. I'll get back to you soon!</p>
          <button onClick={() => setIsSent(false)} className="submit-btn shadow-cozy">Okay</button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="social-links-row">
        {[
          { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ana-paredes-2850b51a6/', icon: '🔗' },
          { label: 'GitHub', url: 'https://github.com/TheBawawa', icon: '💻' },
          { label: 'Email', url: 'mailto:anagabrielaparedes324@gmail.com', icon: '📧' }
        ].map(link => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon" title={link.label}>
            <span>{link.icon}</span> {link.label}
          </a>
        ))}
      </div>

      <p className="contact-prompt">Send me quick message!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        {['email', 'subject'].map(field => (
          <div key={field} className="form-group">
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input 
              type={field === 'email' ? 'email' : 'text'} 
              id={field} 
              name={field} 
              placeholder={field === 'email' ? 'your.email@example.com' : "What's this about?"}
              value={formData[field]}
              onChange={handleChange}
              required 
            />
          </div>
        ))}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" name="message" rows="3" 
            placeholder="Your message here..."
            value={formData.message} onChange={handleChange} required
          />
        </div>
        <button type="submit" className="submit-btn shadow-cozy">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
