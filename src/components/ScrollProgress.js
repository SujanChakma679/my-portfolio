import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800/30 z-[1000]">
        <div
          className="h-full bg-gradient-to-r from-purple-600 via-primary to-purple-600 transition-all duration-300 shadow-[0_0_10px_rgba(217,70,239,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Scrolling data visualization effect */}
      <div className="fixed left-0 right-0 top-0 bottom-0 pointer-events-none z-[999]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(217, 70, 239, 0.3) 2px,
              rgba(217, 70, 239, 0.3) 4px
            )`,
            transform: `translateY(${scrollProgress * 3}%)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
      </div>

      {/* Scroll indicator dots on the right side */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-[999] hidden lg:flex flex-col gap-4">
        {[0, 25, 50, 75, 100].map((point) => (
          <div
            key={point}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              scrollProgress >= point - 5 && scrollProgress <= point + 5
                ? 'bg-primary scale-150 shadow-[0_0_10px_rgba(217,70,239,0.8)]'
                : 'bg-gray-600/50'
            }`}
          ></div>
        ))}
      </div>

      {/* Scroll percentage indicator */}
      {/* <div className="fixed bottom-8 right-8 z-[999] hidden md:block">
        <div className="bg-white/5 backdrop-blur-md border border-purple-400/30 rounded-full px-4 py-2 text-xs text-gray-300">
          {Math.round(scrollProgress)}%
        </div>
      </div> */}
    </>
  );
};

export default ScrollProgress;
