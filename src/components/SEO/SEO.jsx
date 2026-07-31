import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Kolonia Polonia Hair Studio';
const SITE_URL = 'https://www.koloniapolonia.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * SEO
 * Drop-in per-page meta tag manager: title, description, keywords,
 * canonical URL, Open Graph and Twitter Card tags.
 */
export default function SEO({
  title,
  description,
  keywords = '',
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
}) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
