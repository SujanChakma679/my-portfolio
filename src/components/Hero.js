import React from 'react';
import ProfileSection from './ProfileSection';
import SocialLinks from './SocialLinks';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/resume.pdf';
    link.download = 'Sujan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-8 lg:px-16 pt-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-8 lg:space-y-10 order-2 lg:order-1" data-aos="fade-right">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
              <span>Hi, I'm </span>
              <span className="block">Sujan Chakma</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-gradient min-h-[3rem]">
              <ReactTyped
                strings={[
                  'Full stack developer',
                  'MERN Stack Specialist',
                  'React Developer',
                  'Node.js Developer'
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                loop
                showCursor={true}
                cursorChar="|"
              />
            </h2>
            
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-lg" data-aos="fade-up" data-aos-delay="200">
              Crafting modern, responsive, and user-friendly websites with passion and precision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6" data-aos="fade-up" data-aos-delay="400">
            <button 
              onClick={handleDownloadResume}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-primary p-[1px] shadow-[0_0_30px_rgba(217,70,239,0.4)] hover:shadow-[0_0_40px_rgba(217,70,239,0.6)] transition-all duration-300 hover:scale-105"
            >
              <div className="relative flex items-center justify-center gap-3 rounded-full bg-black/40 backdrop-blur-sm px-8 py-4 transition-all group-hover:bg-opacity-0">
                <span className="font-semibold text-white text-lg">
                  Download Resume
                </span>
                <span className="material-icons-outlined text-white text-xl">
                  download
                </span>
              </div>
            </button>

            <div data-aos="fade-left" data-aos-delay="600">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Right Content - Profile */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="300">
          <ProfileSection />
        </div>
      </div>
    </main>
  );
};

export default Hero;