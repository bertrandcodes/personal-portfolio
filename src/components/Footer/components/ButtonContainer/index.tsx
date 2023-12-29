import React from "react";
import "./index.scss";
import SocialMediaButton from "../Button";

const SocialMediaButtonContainer = () => {
  return (
    <ul className="social-networks square spin-icon">
      <SocialMediaButton
        link="https://www.linkedin.com/in/bertrandshao/"
        className="icon-linkedin"
        content="LinkedIn"
      />
      <SocialMediaButton
        link="https://github.com/bertrandcodes"
        className="icon-github"
        content="GitHub"
      />
      <SocialMediaButton
        link="https://www.facebook.com/bertrand.shao"
        className="icon-facebook"
        content="Facebook"
      />
    </ul>
  );
};

export default SocialMediaButtonContainer;
