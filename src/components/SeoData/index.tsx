import React from "react";
import { Helmet } from "react-helmet";

interface SeoDataProps {
  title: string;
  name: string;
  content: string;
}

const SeoData: React.FC<SeoDataProps> = ({ title, name, content }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name={name} content={content} />
    </Helmet>
  );
};

export default SeoData;
