import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #333;
    text-align: center;
  }
  
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }
  
  .blog-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    }
    
    .card-img {
      height: 200px;
      background-color: #f5f5f5;
      background-size: cover;
      background-position: center;
    }
    
    .card-content {
      padding: 1.5rem;
      
      h2 {
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 1.5rem;
      }
      
      p {
        color: #666;
        margin-bottom: 1.5rem;
      }
      
      .read-more {
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

const BlogPage: React.FC = () => {
  const { t } = useTranslation();
  
  const articles = [
    {
      id: 1,
      slug: 'top-5-electronic-gadgets-2025',
      imageUrl: '/images/article1.jpg',
      translationKey: 'articles.article1'
    },
    {
      id: 2,
      slug: 'choose-right-electronics-for-home',
      imageUrl: '/images/article2.jpg',
      translationKey: 'articles.article2'
    }
  ];
  
  return (
    <>
      <SEO 
        title={t('blog.title')} 
        description="Read our latest blogs about electronics, smart home devices, and technology trends."
        canonical="/blog"
      />
      <BlogContainer>
        <h1>{t('blog.title')}</h1>
        <div className="blog-grid">
          {articles.map((article) => (
            <div key={article.id} className="blog-card">
              <div 
                className="card-img" 
                style={{ backgroundImage: `url(${article.imageUrl})` }}
              ></div>
              <div className="card-content">
                <h2>{t(`${article.translationKey}.title`)}</h2>
                <p>{t(`${article.translationKey}.excerpt`)}</p>
                <Link to={`/blog/${article.slug}`} className="read-more">
                  {t('blog.readMore')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </BlogContainer>
    </>
  );
};

export default BlogPage;