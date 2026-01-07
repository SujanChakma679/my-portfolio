import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: '⚛️', level: 95 },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 90, isImage: true },
        { name: 'HTML/CSS', icon: '🌐', level: 95 },
        { name: 'Tailwind CSS', icon: '🎨', level: 85 },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 75, isImage: true }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 88, isImage: true },
        { name: 'Express.js', icon: '⚡', level: 85 },
        { name: 'MongoDB', icon: '🍃', level: 80 },
        { name: 'REST APIs', icon: '🔗', level: 90 },
        { name: 'JWT Auth', icon: '🔐', level: 85 }
      ]
    },
    {
      category: 'Tools & Others',
      technologies: [
        { name: 'Git/GitHub', icon: '📚', level: 85 },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 95, isImage: true },
        { name: 'Postman', icon: '📮', level: 80 },
        { name: 'Figma', icon: '🎯', level: 75 },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', level: 60, isImage: true }
      ]
    }
  ];

  const certifications = [
    {
      title: 'Complete Web Development',
      issuer: 'Programming Hero',
      year: '2025',
      icon: '🏆'
    },
    {
      title: 'JLPT N3 Certification',
      issuer: 'Japanese Language Proficiency Test',
      year: '2023',
      icon: '📖'
    },
    {
      title: 'TOEIC Certification',
      issuer: 'Score: 710 (B2 Level)',
      year: '2024',
      icon: '🌐'
    }
   
  ];

  return (
    <section id="skills" className="py-12 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life. 
            I'm always learning and expanding my skill set to stay current with industry trends.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, groupIndex) => (
            <div key={groupIndex} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-purple-400/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-2">{skillGroup.category}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-primary mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {tech.isImage ? (
                          <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                        ) : (
                          <span className="text-xl">{tech.icon}</span>
                        )}
                        <span className="text-white font-medium">{tech.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm font-medium">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-purple-400/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">Certifications & Achievements</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-400/10 text-center hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-white font-semibold mb-3 text-base">{cert.title}</h4>
                <p className="text-primary text-sm font-medium mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-purple-400/20">
            <h3 className="text-2xl font-semibold text-white mb-6">How I Add Value</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-3">
                <div className="text-4xl">🚀</div>
                <h4 className="text-lg font-semibold text-primary">Performance</h4>
                <p className="text-gray-300 text-sm">Optimized, fast-loading applications with clean, maintainable code</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">📱</div>
                <h4 className="text-lg font-semibold text-primary">Responsive Design</h4>
                <p className="text-gray-300 text-sm">Mobile-first approach ensuring great UX across all devices</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">🛡️</div>
                <h4 className="text-lg font-semibold text-primary">Security</h4>
                <p className="text-gray-300 text-sm">Secure authentication, data protection, and API security best practices</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">🔧</div>
                <h4 className="text-lg font-semibold text-primary">Full Stack</h4>
                <p className="text-gray-300 text-sm">End-to-end development from database to user interface</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
