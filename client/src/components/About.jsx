import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

export default function About() {

  return (
    <div id="about-body">
      <Helmet>
        <title>About Me | Bertrand Shao</title>
        <meta name="description" content="Learn about who I am and why I love what I do."></meta>
      </Helmet>
      <div className="about-main">
        <div className="about-image" />
        <div className="about-border">
          <div className="about-text">

          </div>
        </div>
      </div>
    </div>
  );
};