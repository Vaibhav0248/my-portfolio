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
  if (n.includes('springboot') || n.includes('spring boot')) return <SiSpringboot className="w-5 h-5 text-[#6DB33F]" />;
  if (n.includes('spring')) return <SiSpring className="w-5 h-5 text-[#6DB33F]" />;
  if (n.includes('java (core') || n === 'java') return <FaJava className="w-5 h-5 text-[#007396]" />;
  if (n.includes('javascript') || n === 'js') return <FaJs className="w-5 h-5 text-[#F7DF1E]" />;
  if (n === 'sql') return <FaDatabase className="w-5 h-5 text-[#00758F]" />;
  if (n === 'mysql') return <SiMysql className="w-5 h-5 text-[#4479A1]" />;
  if (n === 'html') return <FaHtml5 className="w-5 h-5 text-[#E34F26]" />;
  if (n === 'css') return <FaCss3Alt className="w-5 h-5 text-[#1572B6]" />;
  if (n === 'react') return <FaReact className="w-5 h-5 text-[#61DAFB]" />;
  if (n.includes('oop')) return <FaProjectDiagram className="w-5 h-5 text-[#3B82F6]" />;
  if (n.includes('concurrency') || n.includes('multithreading')) return <FaCogs className="w-5 h-5 text-[#06B6D4]" />;
  if (n.includes('lambdas') || n.includes('streams') || n.includes('java 8+')) return <FaCode className="w-5 h-5 text-[#3B82F6]" />;
  if (n.includes('api') || n.includes('rest')) return <FaServer className="w-5 h-5 text-[#06B6D4]" />;
  if (n.includes('git')) return <FaGitAlt className="w-5 h-5 text-[#F05032]" />;
  if (n.includes('collaboration') || n.includes('team')) return <FaUsers className="w-5 h-5 text-[#06B6D4]" />;
  return <FaCode className="w-5 h-5 text-[#94A3B8]" />;
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
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
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
              
              <div className="space-y-4 flex-1 flex flex-col justify-start">
                {category.items.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2 text-textWhite font-semibold">
                        {getSkillIcon(skill.name)}
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-cyanAccent">{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-cyanAccent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.1 }}
                      />
                    </div>
                  </div>
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
