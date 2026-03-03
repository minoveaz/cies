import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface MetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schema?: object;
}

const SEO: React.FC<MetaProps> = ({ 
  title, 
  description, 
  canonical, 
  ogImage = '/images/clinica-dental-malaga-cies-foto.jpg', 
  ogType = 'website',
  schema 
}) => {
  const siteUrl = 'https://ciesclinica.com';
  const location = useLocation();
  const fullTitle = `${title} | Clínica Dental CIES ® Málaga`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : `${siteUrl}${location.pathname}`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={`${siteUrl}${location.pathname}`} />
      <meta property="og:site_name" content="Clínica Dental CIES" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Security & Others */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
