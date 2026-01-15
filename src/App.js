import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });

    // Configure Tailwind with proper dark mode setup
    if (window.tailwind) {
      window.tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: "#70347bff",
              "background-light": "#F8FAFC",
              "background-dark": "#0B0015",
              "surface-dark": "#120523ff",
              "glow-purple": "#7A1CACE0",
            },
            fontFamily: {
              display: ["Inter", "Outfit", "sans-serif"],
              sans: ["Inter", "Outfit", "sans-serif"],
            },
            borderRadius: {
              DEFAULT: "1rem",
              'xl': '1.5rem',
              '2xl': '2rem',
            },
            backgroundImage: {
              'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
          },
        },
      };
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <ScrollProgress />
      <div className="bg-gradient-to-br from-purple-950 via-black to-black text-gray-100 font-sans min-h-screen relative overflow-hidden selection:bg-primary selection:text-white">
        <BackgroundEffects />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;