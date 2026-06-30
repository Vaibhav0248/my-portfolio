import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaUsers, FaDatabase, FaCode, FaServer, FaCogs, FaProjectDiagram
} from 'react-icons/fa';
import { SiSpringboot, SiSpring, SiMysql, SiOpenai } from 'react-icons/si';

// Helper to map skill names to react-icons
const getSkillIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes('springboot') || n.includes('spring boot')) return <SiSpringboot className="w-8 h-8 text-[#6DB33F]" />;
  if (n.includes('spring')) return <SiSpring className="w-8 h-8 text-[#6DB33F]" />;
  if (n.includes('java (core') || n === 'java') return <FaJava className="w-8 h-8 text-[#007396]" />;
  if (n.includes('javascript') || n === 'js') return <FaJs className="w-8 h-8 text-[#F7DF1E]" />;
  if (n === 'sql') return <FaDatabase className="w-8 h-8 text-[#00758F]" />;
  if (n === 'mysql') return <SiMysql className="w-8 h-8 text-[#4479A1]" />;
  if (n === 'html') return <FaHtml5 className="w-8 h-8 text-[#E34F26]" />;
  if (n === 'css') return <FaCss3Alt className="w-8 h-8 text-[#1572B6]" />;
  if (n === 'react') return <FaReact className="w-8 h-8 text-[#61DAFB]" />;
  if (n.includes('oop')) return <FaProjectDiagram className="w-8 h-8 text-[#3B82F6]" />;
  if (n.includes('concurrency') || n.includes('multithreading')) return <FaCogs className="w-8 h-8 text-[#06B6D4]" />;
  if (n.includes('lambdas') || n.includes('streams') || n.includes('java 8+')) return <FaCode className="w-8 h-8 text-[#3B82F6]" />;
  if (n.includes('api') || n.includes('rest')) return <FaServer className="w-8 h-8 text-[#06B6D4]" />;
  if (n.includes('git')) return <FaGitAlt className="w-8 h-8 text-[#F05032]" />;
  if (n.includes('collaboration') || n.includes('team')) return <FaUsers className="w-8 h-8 text-[#06B6D4]" />;
  return <FaCode className="w-8 h-8 text-[#94A3B8]" />;
};

const Skills = () => {
  const skillCategories = portfolioData.skills;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        staggerChildren: 0.08
      } 
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 120, 
        damping: 12 
      }
    }
  };

  const skillIconVariants = {
    hidden: { scale: 1, rotate: 0 },
    visible: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.15, 
      rotate: 6,
      transition: { type: 'spring', stiffness: 300, damping: 10 }
    }
  };

  const skillTextVariants = {
    hidden: { color: '#94A3B8' },
    visible: { color: '#94A3B8' },
    hover: { 
      color: '#F8FAFC',
      transition: { duration: 0.2 }
    }
  };

  const skillGlowVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[250px] h-[250px] bg-cyanAccent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="font-mono text-cyanAccent text-sm mb-2 font-semibold flex items-center gap-2">
            <span>&lt;section id="skills"&gt;</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-textWhite">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-cyanAccent mt-3 rounded-full" />
        </div>

        {/* Skill Category Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-2xl border border-accent/10 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 flex flex-col group text-left"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-bold text-textWhite font-mono border-b border-accent/15 pb-3 mb-4 flex items-center justify-between">
                <span>{category.category}</span>
                <span className="text-[10px] text-cyanAccent opacity-70 group-hover:opacity-100 transition-opacity">
                  0x0{index + 1}
                </span>
              </h3>
              
              <div className="grid grid-cols-2 gap-3 mt-2 flex-1 content-start">
                {category.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={skillItemVariants}
                    whileHover="hover"
                    className="relative bg-slate-900/40 p-4 rounded-xl border border-slate-700/40 hover:border-cyanAccent/40 hover:bg-slate-800/40 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden backdrop-blur-sm"
                  >
                    {/* Background Hover Glow */}
                    <motion.div 
                      variants={skillGlowVariants}
                      className="absolute inset-0 bg-gradient-to-br from-transparent to-cyanAccent/5 pointer-events-none" 
                    />

                    {/* Animated Icon */}
                    <motion.div 
                      variants={skillIconVariants}
                      className="text-textWhite mb-2"
                    >
                      {getSkillIcon(skill.name)}
                    </motion.div>

                    {/* Skill Name */}
                    <motion.span 
                      variants={skillTextVariants}
                      className="text-xs font-mono break-words w-full px-1"
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
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

export default Skills;
