import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

interface FurtherReadingProps {
  src1: string;
  src2: string;
  title1: string;
  title2: string;
  time1: string;
  description1: string;
  time2: string;
  description2: string;
  link1: string;
  link2: string;
}

const FurtherReading: React.FC<FurtherReadingProps> = ({
  src1,
  src2,
  title1,
  title2,
  time1,
  description1,
  time2,
  description2,
  link1,
  link2,
}) => (
  <div className={styles.root}>
    <h3>Further Readings</h3>
    <div className={styles.readingContainer}>
      <Link
        to={`/blog/${link1}`}
        style={{ color: "inherit", textDecoration: "none", display: "flex" }}
      >
        <div className={styles.reading}>
          <img src={src1} alt={title1} />
          <p className={styles.title}>
            {title1} | {time1}
          </p>
          <p>{description1}</p>
        </div>
      </Link>
      <Link
        to={`/blog/${link2}`}
        style={{ color: "inherit", textDecoration: "none", display: "flex" }}
      >
        <div className={styles.reading}>
          <img src={src2} alt={title2} />
          <p className={styles.title}>
            {title2} | {time2}
          </p>
          <p>{description2}</p>
        </div>
      </Link>
    </div>
  </div>
);

export default FurtherReading;
