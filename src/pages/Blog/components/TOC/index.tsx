import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { useHeadsObserver } from "./hooks";

type HeadingLevel = 3 | 4;

interface HeadingStateType {
  id: string;
  text: string;
  level: HeadingLevel;
}

const TOC = () => {
  const [headings, setHeadings] = useState<HeadingStateType[]>([]);
  const { activeId } = useHeadsObserver();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h3, h4")).map((elem) => ({
      id: elem.id,
      text: elem instanceof HTMLElement ? elem.innerText : "",
      level: Number(elem.nodeName.charAt(1)) as HeadingLevel,
    }));
    setHeadings(elements);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    if (id) {
      document.querySelector(`#${id}`)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const getClassName = (level: HeadingLevel) => {
    switch (level) {
      case 3:
        return "head3";
      case 4:
        return "head4";
      default:
        return "";
    }
  };

  return (
    <nav className={styles.root}>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={styles[getClassName(heading.level)]}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              style={{
                fontWeight: activeId === heading.id ? "bold" : "normal",
                color: activeId === heading.id ? "black" : "gray",
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TOC;
