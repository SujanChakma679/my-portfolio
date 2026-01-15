import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const About = () => {
  const [startCount, setStartCount] = React.useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const learningJourney = [
    {
      title: 'Web Development Bootcamp',
      institution: 'Intensive Training Program',
      period: 'Past 6 Months',
      description: 'Completed a comprehensive web development program focused on the MERN stack, building 10+ real-world projects with 1,000+ hours of hands-on practice in modern web development.'
    },
    {
      title: 'MERN Stack Mastery',
      institution: 'Project-Based Self Learning',
      period: 'Recent',
      description: 'Developed strong proficiency in MongoDB, Express.js, React, and Node.js through continuous project-based learning, real-world problem solving, and practical implementation.'
    },
    {
      title: 'Project Portfolio',
      institution: 'Personal & Professional Development',
      period: 'Ongoing',
      description: 'Building and refining diverse applications, including e-commerce platforms, management systems, and full-stack web applications, to continuously strengthen technical skills and best practices.'
    }
  ];

  return (
    <section id="about" className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Currently working in Japan while transitioning to full-time web development. 
            I'm a passionate MERN stack developer with JLPT N3 certification, creating modern 
            and scalable web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column - Personal Info */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-purple-400/20 flex flex-col" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-white mb-6">Who I Am</h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Hello! I'm Sujan Chakma, a full-stack developer specializing in the MERN 
                stack (MongoDB, Express.js, React, Node.js). I am currently based in Japan, 
                combining professional work experience with a strong passion for web development.
              </p>
              <p className="leading-relaxed">
                Living in Japan for the past 4 years has shaped my adaptability, attention to detail, 
                and cross-cultural communication skills. I hold JLPT N3 certification and have 6 months 
                of full-time experience as a Front Desk Assistant at a Luxury Traditional Japanese Ryokan, where I developed strong customer service, 
                problem-solving, and teamwork abilities that complement my technical skill set.
              </p>
              <p className="leading-relaxed">
                Over the past 6 months, I completed an intensive web development program, dedicating 1,000+ 
                hours to hands-on learning and building real-world applications. I have successfully completed 
                10+ projects, including e-commerce platforms and management systems, strengthening my expertise 
                in modern web development practices.
              </p>
              <p className="leading-relaxed">
                I am now seeking an opportunity to transition into a full-time developer role, where I can 
                apply my technical skills, strong work ethic, and multicultural experience to build impactful 
                and scalable digital solutions.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-auto pt-8" ref={statsRef}>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-purple-400/10 text-center hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-2xl font-bold text-primary mb-1">
                  {startCount ? <CountUp end={10} duration={2} suffix="+" /> : '10+'}
                </div>
                <div className="text-gray-300 text-sm">Projects</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-purple-400/10 text-center hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-2xl font-bold text-primary mb-1">
                  {startCount ? <CountUp end={1000} duration={2.5} suffix="+" /> : '1000+'}
                </div>
                <div className="text-gray-300 text-sm">Hours Practice</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-purple-400/10 text-center hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-2xl font-bold text-primary mb-1">
                  {startCount ? <CountUp end={6} duration={2} suffix="+" /> : '6+'}
                </div>
                <div className="text-gray-300 text-sm">Months of Intensive Learning</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-purple-400/10 text-center hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-2xl font-bold text-primary mb-1">
                  {startCount ? <CountUp end={100} duration={2} suffix="%" /> : '100%'}
                </div>
                <div className="text-gray-300 text-sm">Dedication</div>
              </div>
            </div>
          </div>

          {/* Right Column - Learning Journey Timeline */}
          <div className="space-y-8" data-aos="fade-left">
            {/* Learning Journey */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Learning Journey</h3>
              <div className="space-y-6">
                {learningJourney.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/30 last:border-l-0 hover:border-primary/50 transition-colors duration-300">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.institution}</p>
                      <p className="text-sm text-gray-400">{exp.period}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Beyond Code Section */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Interests Beyond Coding</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:transform hover:translate-x-2">
                  <div className="text-3xl">📚</div>
                  <div>
                    <h4 className="text-base font-semibold text-primary mb-1">Reading</h4>
                    <p className="text-gray-400 text-sm">Supporting lifelong learning, staying updated, and personal growth</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:transform hover:translate-x-2">
                  <div className="text-3xl">🕉️</div>
                  <div>
                    <h4 className="text-base font-semibold text-primary mb-1">Yoga</h4>
                    <p className="text-gray-400 text-sm">Maintaining physical health, balance, and a strong mind–body connection</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:transform hover:translate-x-2">
                  <div className="text-3xl">☯️</div>
                  <div>
                    <h4 className="text-base font-semibold text-primary mb-1">Meditation</h4>
                    <p className="text-gray-400 text-sm">Cultivating inner peace, focus, and mental clarity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;