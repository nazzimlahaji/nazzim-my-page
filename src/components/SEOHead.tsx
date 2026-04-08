import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";

const SITE_URL = "https://nazzim.my";

interface SEOHeadProps {
  /** Page title — will be appended with " | Mohd Nazzim Lahaji" */
  title: string;
  /** Meta description for the page */
  description: string;
  /** Canonical path, e.g. "/experience" */
  path?: string;
  /** Override the default OG image */
  ogImage?: string;
}

export default function SEOHead({
  title,
  description,
  path = "/",
  ogImage = "/og-image.png",
}: SEOHeadProps) {
  const { lang } = useLanguage();

  const fullTitle =
    path === "/"
      ? "Mohd Nazzim Lahaji | Software Engineer — Portfolio"
      : `${title} | Mohd Nazzim Lahaji`;

  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImageUrl = `${SITE_URL}${ogImage}`;

  return (
    <Helmet>
      {/* Primary */}
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Mohd Nazzim Lahaji — Portfolio" />
      <meta
        property="og:locale"
        content={lang === "ms" ? "ms_MY" : "en_US"}
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Misc */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Mohd Nazzim Bin Lahaji" />
    </Helmet>
  );
}
