import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  LinkedinShareButton, 
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

const ArticleContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  
  .back-button {
    display: inline-block;
    margin-bottom: 2rem;
    color: #e63946;
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;
    transition: color 0.2s ease;
    
    &:hover {
      color: #c1121f;
    }
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #1d3557;
    font-weight: 700;
    line-height: 1.2;
  }
  
  .article-meta {
    color: #457b9d;
    margin-bottom: 2rem;
    font-size: 0.9rem;
    font-style: italic;
  }
  
  .article-image {
    width: 100%;
    height: 400px;
    background-color: #f1faee;
    background-size: cover;
    background-position: center;
    margin-bottom: 2rem;
    border-radius: 8px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  
  .article-content {
    line-height: 1.8;
    color: #2b2d42;
    
    p {
      margin-bottom: 1.5rem;
      font-size: 1.05rem;
    }
    
    a {
      color: #e63946;
      text-decoration: none;
      font-weight: 600;
      border-bottom: 1px solid transparent;
      transition: border-color 0.3s;
      
      &:hover {
        border-bottom-color: #e63946;
      }
    }
  }
  
  .share-container {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid #edf2f4;
    display: flex;
    align-items: center;
    
    span {
      margin-right: 1rem;
      font-weight: 600;
      color: #1d3557;
    }
    
    button {
      margin-right: 0.8rem;
      background: none;
      border: none;
      cursor: pointer;
      transition: transform 0.2s;
      
      &:hover {
        transform: translateY(-3px);
      }
    }
  }
  
  .content-highlight {
    background-color: #f1faee;
    padding: 1.5rem;
    border-left: 4px solid #e63946;
    margin: 2rem 0;
    border-radius: 0 8px 8px 0;
  }
  
  .cta-box {
    background: linear-gradient(135deg, #1d3557 0%, #457b9d 100%);
    color: white;
    padding: 2rem;
    border-radius: 8px;
    margin: 2.5rem 0;
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
    
    h3 {
      margin-top: 0;
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    
    p {
      margin-bottom: 1.5rem;
      font-size: 1.05rem;
    }
    
    .cta-button {
      display: inline-block;
      background-color: #e63946;
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 600;
      transition: background-color 0.3s, transform 0.2s;
      
      &:hover {
        background-color: #c1121f;
        transform: translateY(-2px);
      }
    }
  }
`;

const BlogArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const affiliateLink = "https://www.kqzyfj.com/click-9083409-15735691";
  
  const articles = {
    'top-5-electronic-gadgets-2025': {
      id: 1,
      imageUrl: '/images/article1.jpg',
      translationKey: 'articles.article1',
      date: '2025-04-20'
    },
    'choose-right-electronics-for-home': {
      id: 2,
      imageUrl: '/images/article2.jpg',
      translationKey: 'articles.article2',
      date: '2025-04-15'
    }
  };
  
  const article = slug ? articles[slug as keyof typeof articles] : null;
  
  if (!article) {
    return <div>Article not found</div>;
  }
  
  const shareUrl = `https://tech-explorer-hub.com/blog/${slug}`;
  const articleTitle = t(`${article.translationKey}.title`);
  const articleContent = t(`${article.translationKey}.content`);
  
  // Format the date in the current language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(i18n.language, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  // Convert markdown-like content to HTML (simple version)
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Handle links with markdown format [text](url)
      const processedText = paragraph.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
      );
      
      if (index === 2) {
        return (
          <div className="content-highlight" key={index}>
            <p dangerouslySetInnerHTML={{ __html: processedText }} />
          </div>
        );
      }
      
      if (index === content.split('\n\n').length - 2) {
        return (
          <div className="cta-box" key={index}>
            <h3>Discover Premium Electronics</h3>
            <p>Ready to upgrade your home with cutting-edge technology? Alinda offers exceptional quality at competitive prices.</p>
            <a href={affiliateLink} className="cta-button" target="_blank" rel="noopener noreferrer">
              Explore Exclusive Deals
            </a>
          </div>
        );
      }
      
      return <p key={index} dangerouslySetInnerHTML={{ __html: processedText }} />;
    });
  };
  
  return (
    <>
      <SEO 
        title={articleTitle}
        description={t(`${article.translationKey}.excerpt`)}
        canonical={`/blog/${slug}`}
        image={article.imageUrl}
        type="article"
      />
      <ArticleContainer>
        <span className="back-button" onClick={() => navigate('/blog')}>
          ← Back to Blog
        </span>
        <h1>{articleTitle}</h1>
        <div className="article-meta">
          Published on {formatDate(article.date)} • Tech Explorer Hub
        </div>
        <div 
          className="article-image" 
          style={{ backgroundImage: `url(${article.imageUrl})` }}
        ></div>
        <div className="article-content">
          {renderContent(articleContent)}
        </div>
        
        <div className="share-container">
          <span>Share this article:</span>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={36} round />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={articleTitle}>
            <TwitterIcon size={36} round />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl} title={articleTitle}>
            <LinkedinIcon size={36} round />
          </LinkedinShareButton>
        </div>
      </ArticleContainer>
    </>
  );
};

export default BlogArticlePage;