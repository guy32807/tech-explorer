import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
  }

  .logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 800;
    color: #1d3557;
    font-family: 'Montserrat', sans-serif;
    
    .logo-icon {
      margin-right: 0.5rem;
      color: #e63946;
    }
    
    span {
      color: #e63946;
    }
  }

  .nav-content {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 1.5rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -5px;
      left: 0;
      background-color: #e63946;
      transition: width 0.3s ease;
    }
    
    &:hover:after, &.active:after {
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    color: #1d3557;
    font-weight: 600;
    transition: color 0.3s;
    
    &:hover {
      color: #e63946;
    }
  }

  .language-switcher {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    border-left: 1px solid #edf2f4;
    padding-left: 1.5rem;
  }

  .lang-btn {
    background: none;
    border: none;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    margin-left: 0.5rem;
    opacity: 0.5;
    font-weight: 600;
    transition: opacity 0.3s, color 0.3s;
    
    &.active {
      opacity: 1;
      color: #1d3557;
      font-weight: 700;
    }
    
    &:hover {
      opacity: 0.8;
      color: #457b9d;
    }
  }
  
  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }
  
  @media (max-width: 768px) {
    .mobile-menu-btn {
      display: block;
    }
    
    .nav-content {
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background-color: #ffffff;
      flex-direction: column;
      align-items: flex-start;
      padding: 1.5rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      
      &.open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
    }
    
    ul {
      flex-direction: column;
      width: 100%;
    }
    
    li {
      margin: 0;
      padding: 0.75rem 0;
      border-bottom: 1px solid #edf2f4;
      width: 100%;
      
      &:last-child {
        border-bottom: none;
      }
      
      &:after {
        display: none;
      }
    }
    
    .language-switcher {
      margin: 1rem 0 0 0;
      padding: 1rem 0 0 0;
      border-left: none;
      border-top: 1px solid #edf2f4;
      width: 100%;
      justify-content: center;
    }
  }
`;

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <StyledHeader className={scrolled ? 'scrolled' : ''}>
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path d="M2 17L12 22L22 17" fill="currentColor" />
              <path d="M2 12L12 17L22 12" fill="currentColor" />
            </svg>
          </div>
          <Link to="/">Tech<span>Explorer</span>Hub</Link>
        </div>
        
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6L18 18" stroke="#1d3557" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#1d3557" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
        
        <div className={`nav-content ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">{t('header.home')}</Link></li>
            <li><Link to="/products">{t('header.products')}</Link></li>
            <li><Link to="/blog">{t('header.blog')}</Link></li>
            <li><Link to="/contact">{t('header.contact')}</Link></li>
          </ul>
          <div className="language-switcher">
            <button 
              className={i18n.language === 'en' ? 'lang-btn active' : 'lang-btn'} 
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button 
              className={i18n.language === 'hu' ? 'lang-btn active' : 'lang-btn'} 
              onClick={() => changeLanguage('hu')}
            >
              HU
            </button>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;