import React from "react";

import { SeoData } from "@src/components";
import styles from "./styles.module.scss";

const Resume = () => (
  <>
    <SeoData title="Resume | Bertrand Shao" content="Check out my resume. Hosted by docdroid." />
    <div className={styles.root}>
      <iframe
        title="Embedded PDF Viewer"
        width="100%"
        height="1200px"
        src="/Resume.pdf#navpanes=0"
      />
    </div>
  </>
);

export default Resume;
