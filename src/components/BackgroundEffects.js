import React from 'react';

const BackgroundEffects = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      {/* Deep purple-black base matching screenshot */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-black"></div>
      
      {/* Secondary gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/30 to-purple-900/20"></div>
      
      {/* Prominent purple glow on the right side like in screenshot */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[1000px] bg-gradient-radial from-purple-600/40 via-purple-800/25 to-transparent rounded-full blur-[200px]"></div>
      
      {/* Large gradient orbs matching screenshot intensity */}
      <div className="absolute top-[-20%] left-[-20%] w-[900px] h-[900px] bg-gradient-to-br from-purple-700/25 to-primary/20 rounded-full blur-[250px] animate-pulse"></div>
      <div className="absolute bottom-[-25%] right-[-15%] w-[1000px] h-[1000px] bg-gradient-to-tl from-purple-500/35 to-purple-800/30 rounded-full blur-[280px] animate-pulse" style={{animationDelay: '3s'}}></div>
      
      {/* Center atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-purple-700/20 via-purple-900/15 to-transparent rounded-full blur-[220px]"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-25"></div>
      
      {/* Additional purple atmospheric layers */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/25 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '5s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '7s'}}></div>
      
      {/* Final overlays for screenshot-like depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-transparent to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-purple-900/20"></div>
    </div>
  );
};

export default BackgroundEffects;