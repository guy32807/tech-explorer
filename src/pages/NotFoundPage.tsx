import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SEO from '../components/SEO';

const NotFoundContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem 2rem;
  text-align: center;
  
  h1 {
    font-size: 6rem;
    margin: 0;
    color: #0066cc;
  }
  
  h2 {
    margin-top: 0;
    margin-bottom: 2rem;
    color: #333;
  }
  
  p {
    margin-bottom: 2rem;
    color: #666;
  }
  
  .home-link {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #0066cc;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #0052a3;
    }
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist."
      />
      <NotFoundContainer>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="home-link">Go to Homepage</Link>
      </NotFoundContainer>
    </>
  );
};

export default NotFoundPage;