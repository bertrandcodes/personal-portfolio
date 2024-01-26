import { useEffect, useState, useRef } from "react";

interface ObserverEntry {
  target: Element;
  isIntersecting: boolean;
}

interface UseHeadsObserverReturnType {
  activeId: string;
}

export const useHeadsObserver = (): UseHeadsObserverReturnType => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: ObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "-20% 0% -35% 0px",
    });

    const elements = document.querySelectorAll("h3, h4, h5");
    elements.forEach((elem) => observer.current?.observe(elem as Element));
    return () => observer.current?.disconnect();
  }, []);

  return { activeId };
};
