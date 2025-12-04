import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'fade-in';
  delay?: number;
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0,
  className = ''
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.animation = `${animation} 0.8s ease-out ${delay}ms forwards`;
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animation, delay]);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
