import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 30;
      if (currentProgress > 100) currentProgress = 100;
      
      setScrollProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          onLoadingComplete();
        }, 500);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-purple-950 via-black to-black flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Scrolling data visualization */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent, rgba(217, 70, 239, 0.3), transparent)`,
            transform: `translateY(${scrollProgress * 2}%)`,
            animation: 'scroll-motion 3s linear infinite'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 max-w-3xl px-4">
        {/* Logo/Name */}
        <div className="space-y-3">
          <div className="text-3xl lg:text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-300 via-primary to-purple-400 bg-clip-text text-transparent">
              Hi, I'm Sujan Chakma
            </span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-primary mx-auto rounded-full"></div>
        </div>

        {/* Welcome Message */}
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-white animate-fade-in leading-tight">
            Welcome to My Digital Space
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 animate-fade-in leading-relaxed max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
            Full-Stack Developer crafting modern and meaningful web experiences
          </p>
        </div>

        {/* Main Loading Bar */}
        <div className="space-y-3 pt-4">
          <div className="w-full max-w-md mx-auto h-2 bg-gray-700/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 via-primary to-purple-600 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(217,70,239,0.5)]"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm font-medium">
            {Math.round(scrollProgress)}% - Loading portfolio...
          </p>
        </div>

        {/* Data packets animation */}
        <div className="flex justify-center gap-2 pt-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              style={{
                animation: `pulse-dot 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                opacity: scrollProgress > 30 ? 1 : 0.3
              }}
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll-motion {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes pulse-dot {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
