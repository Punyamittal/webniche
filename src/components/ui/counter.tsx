import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  value: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({ 
  value, 
  suffix = '', 
  duration = 2000,
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric value
    const numericValue = parseInt(value.replace(/\D/g, ''));
    if (isNaN(numericValue)) {
      setCount(0);
      return;
    }

    // Check if it's a percentage
    const isPercentage = value.includes('%');
    const targetValue = isPercentage ? numericValue : numericValue;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOut);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  const displayValue = value.includes('%') 
    ? `${count}%` 
    : value.includes('+')
    ? `${count}+`
    : value.includes('/')
    ? value // Keep "5-7" or "24/7" as is
    : count.toString();

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix && !value.includes(suffix) && suffix}
    </span>
  );
};

export default Counter;

