import { useState, useEffect, useRef } from 'react';

const Counter = ({ start = 0, end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(null);
  const startTimeRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smoother animation
      const easeOutQuad = percentage => 1 - (1 - percentage) * (1 - percentage);
      const easedProgress = easeOutQuad(percentage);

      const range = end - start;
      const currentCount = Math.floor(start + (easedProgress * range));
      setCount(currentCount);

      if (percentage < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [start, end, duration]);

  return (
    <span ref={countRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default Counter;
