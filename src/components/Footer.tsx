import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #1d3557;
  color: #f1faee;
  padding: 4rem 0 2rem;
  margin-top: 4rem;
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
  }
  
  .footer-column {
    h3 {
      color: #f1faee;
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
      position: relative;
      padding-bottom: 0.75rem;
      
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 3px;
        background-color: #e63946;
      }
    }
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    li {
      margin-bottom: 0.75rem;
    }
    
    a {
      color: #f1faee;
      text-decoration: none;
      transition: color 0.3s, transform 0.3s;
      display: inline-block;
      
      &:hover {
        color: #e63946;
        transform: translateX(5px);
      }
    }
    
    p {
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
  }
  
  .social-icons {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      transition: background-color 0.3s, transform 0.3s;
      
      &:hover {
        background-color: #e63946;
        transform: translateY(-5px);
      }
    }
  }
  
  .subscribe-form {
    display: flex;
    margin-top: 1rem;
    
    input {
      flex: 1;
      padding: 0.75rem 1rem;
      border: none;
      border-radius: 4px 0 0 4px;
      font-family: inherit;
      font-size: 0.95rem;
      
      &:focus {
        outline: none;
      }
    }
    
    button {
      background-color: #e63946;
      color: white;
      border: none;
      border-radius: 0 4px 4px 0;
      padding: 0 1.25rem;
      cursor: pointer;
      transition: background-color 0.3s;
      font-weight: 600;
      
      &:hover {
        background-color: #c1121f;
      }
    }
  }
  
  .footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 2rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    
    .copyright {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
    }
    
    .footer-links {
      display: flex;
      gap: 1.5rem;
      
      a {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        text-decoration: none;
        transition: color 0.3s;
        
        &:hover {
          color: #e63946;
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0 1.5rem;
    
    .footer-bottom {
      flex-direction: column;
      text-align: center;
      
      .footer-links {
        justify-content: center;
      }
    }
  }
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };
  
  return (
    <StyledFooter>
      <div className="footer-content">
        <div className="footer-column">
          <h3>TechExplorerHub</h3>
          <p>Your trusted guide to the world of premium electronics and cutting-edge technology. We help you make informed decisions about your tech purchases.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" />
                <path d="M6 9H2V21H6V9Z" />
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>{t('header.products')}</h3>
          <ul>
            <li><Link to="/products/category/smart-home">Smart Home</Link></li>
            <li><Link to="/products/category/audio">Audio</Link></li>
            <li><Link to="/products/category/wearables">Wearables</Link></li>
            <li><Link to="/products/category/gadgets">Gadgets</Link></li>
            <li><Link to="/products/category/accessories">Accessories</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">{t('header.home')}</Link></li>
            <li><Link to="/blog">{t('header.blog')}</Link></li>
            <li><Link to="/about">{t('footer.about')}</Link></li>
            <li><Link to="/privacy">{t('footer.privacy')}</Link></li>
            <li><Link to="/terms">{t('footer.terms')}</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>{t('footer.subscribe')}</h3>
          <p>{t('footer.subscribePrompt')}</p>
          <form onSubmit={handleSubscribe} className="subscribe-form">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              required 
            />
            <button type="submit">{t('footer.subscribeBtn')}</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">
          © {currentYear} TechExplorerHub. {t('footer.rights')}
        </div>
        <div className="footer-links">
          <Link to="/privacy">{t('footer.privacy')}</Link>
          <Link to="/terms">{t('footer.terms')}</Link>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;