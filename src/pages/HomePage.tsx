import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import SEO from '../components/SEO';

const HomeContainer = styled.div`
  .hero {
    background-color: #f8f9fa;
    padding: 4rem 2rem;
    text-align: center;
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #333;
    }
    
    p {
      font-size: 1.2rem;
      color: #666;
      max-width: 800px;
      margin: 0 auto 2rem;
    }
    
    .cta-button {
      display: inline-block;
      padding: 0.8rem 1.5rem;
      background-color: #0066cc;
      color: white;
      font-weight: 500;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s;
      
      &:hover {
        background-color: #0052a3;
      }
    }
  }
  
  .featured {
    max-width: 1200px;
    margin: 3rem auto;
    padding: 0 2rem;
    
    h2 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2rem;
      color: #333;
    }
    
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }
    
    .product-card {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.15);
      }
      
      .product-img {
        height: 200px;
        background-color: #f5f5f5;
        background-size: cover;
        background-position: center;
      }
      
      .product-content {
        padding: 1.5rem;
        
        h3 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
        
        .price {
          color: #0066cc;
          font-weight: 500;
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        
        .product-link {
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #0066cc;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s;
          
          &:hover {
            background-color: #0052a3;
          }
        }
      }
    }
  }
`;

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const affiliateLink = "https://www.kqzyfj.com/click-9083409-15735691";
  
  const featuredProducts = [
    {
      id: 1,
      name: "Smart Home Hub",
      price: "€149.99",
      imageUrl: "/images/product1.jpg"
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      price: "€79.99",
      imageUrl: "/images/product2.jpg"
    },
    {
      id: 3,
      name: "HD Security Camera",
      price: "€129.99",
      imageUrl: "/images/product3.jpg"
    },
    {
      id: 4,
      name: "Smart Thermostat",
      price: "€99.99",
      imageUrl: "/images/product4.jpg"
    }
  ];
  
  return (
    <>
      <SEO />
      <HomeContainer>
        <section className="hero">
          <h1>{t('home.title')}</h1>
          <p>{t('home.subtitle')}</p>
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="cta-button">
            {t('home.ctaButton')}
          </a>
        </section>
        
        <section className="featured">
          <h2>{t('home.featuredTitle')}</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div 
                  className="product-img" 
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                ></div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <div className="price">{product.price}</div>
                  <a 
                    href={affiliateLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="product-link"
                  >
                    {t('home.ctaButton')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </HomeContainer>
    </>
  );
};

export default HomePage;