import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
}

const SEO: React.FC<MetaProps> = ({ title, description, canonical, ogImage, ogType = 'website' }) => {
  const siteUrl = 'https://ciesclinica.com'; // Adjust
  const fullTitle = `${title} | Clínica Dental CIES ® Málaga`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={`${siteUrl}${ogImage}`} />}
      <meta property="og:url" content={`${siteUrl}${location.pathname}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Security & Others */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;
