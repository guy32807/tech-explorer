import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import SEO from '../components/SEO';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .contact-info {
    margin-bottom: 2rem;
    
    p {
      margin-bottom: 0.5rem;
    }
  }
  
  .contact-form {
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
    
    .form-group {
      margin-bottom: 1.5rem;
      
      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
      }
      
      input,
      textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-family: inherit;
        font-size: 1rem;
        
        &:focus {
          outline: none;
          border-color: #0066cc;
        }
      }
      
      textarea {
        min-height: 150px;
        resize: vertical;
      }
    }
    
    button {
      padding: 0.75rem 1.5rem;
      background-color: #0066cc;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
      
      &:hover {
        background-color: #0052a3;
      }
      
      &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
      }
    }
    
    .form-message {
      margin-top: 1rem;
      padding: 0.75rem;
      border-radius: 4px;
      
      &.success {
        background-color: #d4edda;
        color: #155724;
      }
      
      &.error {
        background-color: #f8d7da;
        color: #721c24;
      }
    }
  }
`;

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Contact us for more information about our electronic products or any inquiries you may have."
        canonical="/contact"
      />
      <ContactContainer>
        <h1>Contact Us</h1>
        
        <div className="contact-info">
          <p>Email: info@alinda-europe.com</p>
          <p>Phone: +36 1 234 5678</p>
          <p>Address: Váci út 1-3, Budapest, Hungary</p>
        </div>
        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {formStatus === 'success' && (
              <div className="form-message success">
                Your message has been sent successfully. We'll get back to you soon!
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="form-message error">
                There was an error sending your message. Please try again later.
              </div>
            )}
          </form>
        </div>
      </ContactContainer>
    </>
  );
};

export default ContactPage;