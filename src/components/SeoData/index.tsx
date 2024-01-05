import React from "react";
import { Helmet } from "react-helmet";

interface SeoDataProps {
  title: string;
  description?: string;
  keywords?: string;
}

const SeoData: React.FC<SeoDataProps> = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    {keywords && <meta name="keyword" content={keywords} />}
  </Helmet>
);

export default SeoData;
