import React from "react";
import { Helmet } from "react-helmet";

interface SeoDataProps {
  title: string;
  content: string;
}

const SeoData: React.FC<SeoDataProps> = ({ title, content }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={content} />
  </Helmet>
);

export default SeoData;
