import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  image = '/logo.png',
  type = 'website'
}) => {
  const { i18n } = useTranslation();
  const baseUrl = 'https://alinda-europe-affiliate.com'; // Replace with your actual domain
  const defaultTitle = 'Alinda Europe | Quality Electronics';
  const defaultDescription = 'Discover high-quality electronic products from Alinda Europe that enhance your lifestyle and meet your technological needs.';
  
  const siteTitle = title ? `${title} | Alinda Europe` : defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteImage = image.startsWith('http') ? image : `${baseUrl}${image}`;
  const url = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:locale" content={i18n.language} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      
      {/* Alternate language versions */}
      {i18n.language === 'en' && (
        <link rel="alternate" href={`${baseUrl}/hu${canonical || ''}`} hrefLang="hu" />
      )}
      {i18n.language === 'hu' && (
        <link rel="alternate" href={`${baseUrl}${canonical || ''}`} hrefLang="en" />
      )}
    </Helmet>
  );
};

export default SEO;