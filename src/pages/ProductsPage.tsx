import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import SEO from '../components/SEO';

const ProductsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  h1 {
    text-align: center;
    margin-bottom: 2rem;
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
`;

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
  const affiliateLink = "https://www.kqzyfj.com/click-9083409-15735691";
  
  const products = [
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
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: "€89.99",
      imageUrl: "/images/product5.jpg"
    },
    {
      id: 6,
      name: "Smart Watch",
      price: "€199.99",
      imageUrl: "/images/product6.jpg"
    },
    {
      id: 7,
      name: "Wireless Charger",
      price: "€39.99",
      imageUrl: "/images/product7.jpg"
    },
    {
      id: 8,
      name: "Smart Light Bulbs",
      price: "€29.99",
      imageUrl: "/images/product8.jpg"
    }
  ];
  
  return (
    <>
      <SEO 
        title="Products" 
        description="Browse our selection of high-quality electronics and smart home devices."
        canonical="/products"
      />
      <ProductsContainer>
        <h1>Products</h1>
        <div className="products-grid">
          {products.map(product => (
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
      </ProductsContainer>
    </>
  );
};

export default ProductsPage;