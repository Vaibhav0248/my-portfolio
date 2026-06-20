import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal, ShieldAlert, CheckCircle, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const projects = portfolioData.projects;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 80, damping: 15 } 
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="font-mono text-cyanAccent text-sm mb-2 font-semibold flex items-center gap-2">
            <span>&lt;section id="projects"&gt;</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-textWhite">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-accent mt-3 rounded-full" />
        </div>

        {/* Projects Cards Container */}
        <motion.div 
          className="flex flex-col gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl border border-accent/15 hover:border-cyanAccent/50 transition-all duration-500 shadow-xl overflow-hidden relative group text-left"
              variants={cardVariants}
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-cyanAccent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              
              {/* Project Card Layout */}
              <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Side: Overview & Tech Stack */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Project Header */}
                    <div className="flex items-center gap-2 text-cyanAccent mb-3 font-mono text-xs">
                      <Terminal className="w-4 h-4" />
                      <span>Project 0{index + 1}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-extrabold text-textWhite mb-4 tracking-tight group-hover:text-cyanAccent transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((techItem, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 text-xs font-mono bg-secondary border border-accent/10 rounded-md text-textWhite font-semibold"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-accent/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-secondary hover:bg-secondary/70 border border-accent/20 hover:border-cyanAccent text-textWhite hover:text-cyanAccent font-mono text-sm transition-all flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Right Side: Problem, Solution, Details */}
                <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-accent/10 lg:pl-8">
                  
                  {/* Problem & Solution Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-secondary/60 p-4 rounded-xl border border-accent/5">
                      <span className="text-xs font-mono text-red-400 font-semibold block mb-1">PROB_STATEMENT:</span>
                      <p className="text-textGray text-xs md:text-sm leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="bg-secondary/60 p-4 rounded-xl border border-accent/5">
                      <span className="text-xs font-mono text-green-400 font-semibold block mb-1">SOL_IMPLEMENTED:</span>
                      <p className="text-textGray text-xs md:text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <span className="text-xs font-mono text-accent font-semibold block mb-3">&lt;key_features&gt;</span>
                    <ul className="space-y-2 text-xs md:text-sm text-textGray pl-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-cyanAccent mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges & Contributions Grid */}
                  <div className="pt-4 border-t border-accent/10 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs font-mono text-red-400 font-semibold flex items-center gap-1.5 mb-1.5">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>CHALLENGES:</span>
                      </span>
                      <p className="text-textGray text-xs leading-relaxed">{project.challenges}</p>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyanAccent font-semibold flex items-center gap-1.5 mb-1.5">
                        <Database className="w-3.5 h-3.5" />
                        <span>MY_CONTRIBUTION:</span>
                      </span>
                      <p className="text-textGray text-xs leading-relaxed">{project.contribution}</p>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-start font-mono text-cyanAccent text-sm mt-8">
          <span>&lt;/section&gt;</span>
        </div>

      </div>
    </section>
  );
};

export default Projects;
