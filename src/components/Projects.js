import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Blood Donation Platform',
      description: 'A comprehensive blood donation management system connecting donors with recipients. Features include donor registration, blood request management, and real-time availability tracking.',
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: 'https://tubular-marshmallow-f6305c.netlify.app/',
      githubUrl: 'https://github.com/SujanChakma679/blood-donation-client',
      featured: true
    },
    {
      id: 2,
      title: 'Indoor Plant Care',
      description: 'Plant care management application helping users maintain healthy indoor plants. Includes care schedules, watering reminders, and plant health tracking features.',
      image: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://playful-youtiao-c05cbb.netlify.app/',
      githubUrl: 'https://github.com/SujanChakma679/indoor-plant-care',
      featured: true
    },
    {
      id: 3,
      title: 'Movie Master Pro',
      description: 'Movie discovery and management platform with advanced search, ratings, reviews, and personalized recommendations. Built with modern web technologies for seamless user experience.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Movie API'],
      liveUrl: 'https://enchanting-baklava-bb9cbc.netlify.app/',
      githubUrl: 'https://github.com/SujanChakma679/movie-master-pro-client',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-primary text-white shadow-[0_0_20px_rgba(217,70,239,0.4)]'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-purple-400/20'
              }`}
            >
              {filter.label}
              <span className="ml-2 text-sm opacity-75">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-primary px-3 py-1 rounded-full text-white text-xs font-medium">
                    Featured
                  </div>
                )}

                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full font-medium hover:bg-white/30 transition-colors flex items-center gap-2"
                  >
                    <span className="material-icons-outlined text-sm">open_in_new</span>
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full font-medium hover:bg-white/30 transition-colors flex items-center gap-2"
                  >
                    <span className="material-icons-outlined text-sm">code</span>
                    Repository
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-center border border-purple-400/20 hover:border-purple-400/40"
                  >
                    Repository
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-primary hover:from-purple-700 hover:to-primary text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-center shadow-[0_0_15px_rgba(217,70,239,0.3)]"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;