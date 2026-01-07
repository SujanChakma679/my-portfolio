import React from 'react';

const ProfileSection = () => {
  const techIcons = [
    {
      name: 'React',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      position: 'bottom-4 right-8',
      animation: 'animate-float',
      borderColor: 'border-cyan-400/40',
      shadowColor: 'shadow-[0_0_20px_rgba(6,182,212,0.4)]',
      iconClass: 'w-8 h-8',
      size: 'w-16 h-16'
    },
    {
      name: 'JavaScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      position: 'top-12 left-4',
      animation: 'animate-float-delayed',
      borderColor: 'border-yellow-400/40',
      shadowColor: 'shadow-[0_0_20px_rgba(234,179,8,0.4)]',
      iconClass: 'w-6 h-6',
      size: 'w-14 h-14'
    },
    {
      name: 'MongoDB',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      position: 'top-8 right-12',
      animation: 'animate-float-slow',
      borderColor: 'border-green-400/40',
      shadowColor: 'shadow-[0_0_20px_rgba(34,197,94,0.4)]',
      iconClass: 'w-5 h-5',
      size: 'w-12 h-12'
    }
  ];

  return (
    <div className="relative w-80 h-80 lg:w-96 lg:h-96">
      {/* Glow effect */}
      <div className="absolute inset-4 bg-gradient-to-tr from-purple-600/60 to-primary/60 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Main profile container */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-400/20 shadow-2xl z-10 bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm">
        <img 
          alt="Meriem working on laptop" 
          className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
          src="https://i.ibb.co/fVNqQD1g/Gemini-Generated-Image-efvg30efvg30efvg56t.png"
        />
      </div>

      {/* Floating tech icons */}
      {techIcons.map((icon, index) => (
        <div key={index} className={`absolute ${icon.position} z-20 ${icon.animation}`}>
          <div className={`${icon.size} bg-gray-900/90 backdrop-blur-md rounded-full flex items-center justify-center border ${icon.borderColor} ${icon.shadowColor}`}>
            <img 
              alt={icon.name} 
              className={icon.iconClass} 
              src={icon.src}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileSection;