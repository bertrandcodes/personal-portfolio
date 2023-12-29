import React from "react";

interface SocialMediaButtonProps {
  link: string;
  className: string;
  content: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ link, className, content }) => (
  <li>
    <a href={link} target="_blank" className={className}>
      {content}
    </a>
  </li>
);

export default SocialMediaButton;
