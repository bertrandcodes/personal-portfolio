import React, { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <div id="footer">
        <ul className="social-networks square spin-icon">
          <li>
            <a
              href="https://www.linkedin.com/in/bertrandshao/"
              target="_blank"
              className="icon-linkedin"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/bertrandcodes"
              target="_blank"
              className="icon-github"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/bertrand.shao"
              target="_blank"
              className="icon-facebook"
            >
              Facebook
            </a>
          </li>
        </ul>
        <p className="copyright">
          Copyright © 2020, Bertrand Shao. All Rights Reserved
        </p>
      </div>
    </Fragment>
  );
}
