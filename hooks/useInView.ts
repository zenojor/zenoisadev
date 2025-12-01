import { useEffect, useState, useRef, RefObject } from 'react';

export const useInView = <T extends HTMLElement>(threshold = 0.1): { ref: RefObject<T | null>; isVisible: boolean } => {
  const [isVisible, setIsVisible] = useState(false);
  // Use a mutable ref object that can hold null initially
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
};