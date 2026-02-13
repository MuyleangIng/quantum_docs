import { useState, useEffect, useCallback } from 'react';

export function useCarousel(itemsCount: number, autoRotateInterval = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsCount);
  }, [itemsCount]);

  const previous = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemsCount) % itemsCount);
  }, [itemsCount]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(next, autoRotateInterval);
    return () => clearInterval(intervalId);
  }, [next, autoRotateInterval]);

  return { currentIndex, next, previous, goTo };
}

