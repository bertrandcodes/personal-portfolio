import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer.jsx";

export default function Resume() {
  return (
    <Fragment>
      <div className="pdfContainer">
        <Helmet>
          <title>Resume | Bertrand Shao</title>
          <meta
            name="description"
            content="Check out my resume. Hosted by docdroid."
          ></meta>
        </Helmet>
        <iframe
          width="100%"
          height="100%"
          src="https://docdro.id/V9UOz0d"
          frameBorder="0"
          allowtransparency="true"
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </Fragment>
  );
}