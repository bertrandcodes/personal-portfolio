import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { useHeadsObserver } from "./hooks";

interface HeadingStateType {
  id: string;
  text: string;
}

const TOC = () => {
  const [headings, setHeadings] = useState<HeadingStateType[]>([]);
  const { activeId } = useHeadsObserver();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h3")).map((elem) => ({
      id: elem.id,
      text: elem instanceof HTMLElement ? elem.innerText : "",
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

  return (
    <nav className={styles.root}>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
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
