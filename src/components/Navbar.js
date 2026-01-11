import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const navItems = ['About', 'Skills', 'Projects', 'Contact'];
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].toLowerCase());
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-8 lg:px-16 py-3 flex justify-between items-center backdrop-blur-md bg-purple-950/80 border-b border-purple-400/20 text-white">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative bg-gradient-to-br from-purple-600/20 to-primary/20 backdrop-blur-sm p-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_0_20px_rgba(217,70,239,0.4)]">
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-glow"></div>
          <img 
            src="/logo.png" 
            alt="Sujan Chakma Logo" 
            className="h-10 w-10 object-contain rounded-full relative z-10"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-bold tracking-tight leading-none">
            <span className="bg-gradient-to-r from-purple-400 via-primary to-purple-600 bg-clip-text text-transparent">SUJAN CHAKMA</span>
          </div>
          <div className="text-[10px] text-gray-400 tracking-wider">FULL STACK DEVELOPER</div>
        </div>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className={`font-medium transition-all duration-300 relative group ${
              activeSection === item.toLowerCase()
                ? 'text-purple-300'
                : 'text-gray-300 hover:text-purple-200'
            }`}
          >
            {item}
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-primary transition-all duration-300 ${
              activeSection === item.toLowerCase() 
                ? 'w-full' 
                : 'w-0 group-hover:w-full'
            }`}></span>
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Toggle menu"
      >
        <span className="material-icons-outlined text-white text-2xl">
          {isMobileMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-purple-950/95 backdrop-blur-md border-b border-purple-400/20 md:hidden">
          <div className="flex flex-col py-4 px-8 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={closeMobileMenu}
                className="font-medium transition-all duration-300 py-2 px-4 relative group inline-block w-fit text-gray-300 hover:text-white hover:bg-white/10 rounded-lg"
              >
                {item}
                <span className="absolute bottom-1 left-4 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-primary transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;