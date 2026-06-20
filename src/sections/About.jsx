import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, BookOpen, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { careerObjective, shortIntro } = portfolioData.personalDetails;

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section id="about" className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="font-mono text-cyanAccent text-sm mb-2 font-semibold flex items-center gap-2">
            <span>&lt;section id="about"&gt;</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-textWhite">
            About Me
          </h2>
          <div className="w-12 h-1 bg-accent mt-3 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Summary Panel */}
          <motion.div 
            className="lg:col-span-7 bg-card p-6 md:p-8 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all text-left flex flex-col justify-between"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-accent mb-4">
                <Code className="w-6 h-6" />
                <span className="font-mono text-xs text-cyanAccent font-bold">@Component("vaibhavSummary")</span>
              </div>
              <h3 className="text-xl font-bold text-textWhite">
                Full Stack Developer & Java Specialist
              </h3>
              <p className="text-textGray leading-relaxed text-sm md:text-base">
                I am a passionate Computer Science & Engineering student at the Maharashtra Institute of Technology. I specialize in designing and implementing high-efficiency application backends with Java, Spring Boot, and relational databases. 
              </p>
              <p className="text-textGray leading-relaxed text-sm md:text-base">
                Through hands-on project experience, I have integrated AI models into database managers, implemented secure role-based authorization rules using Spring Security, and developed dynamic hospital booking and billing schemas. I love solving concurrency problems, writing clean code, and working closely with cross-functional development teams.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-accent/10 font-mono text-xs text-textGray">
              <span>// Output details from VAIBHAV_JADHAV_CV.pdf</span>
            </div>
          </motion.div>

          {/* Goals & Focus Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Career Objective */}
            <motion.div 
              className="bg-card p-6 rounded-2xl border border-cyanAccent/10 hover:border-cyanAccent/30 transition-all text-left flex-1"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-3 text-cyanAccent mb-3">
                <Layers className="w-5 h-5" />
                <h4 className="font-bold text-textWhite font-mono text-sm">Career Objective</h4>
              </div>
              <p className="text-textGray text-xs md:text-sm leading-relaxed">
                {careerObjective}
              </p>
            </motion.div>

            {/* Tech Preferences & Studying Roadmap */}
            <motion.div 
              className="bg-card p-6 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all text-left flex-1"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-3 text-accent mb-4">
                <BookOpen className="w-5 h-5 text-accent" />
                <h4 className="font-bold text-textWhite font-mono text-sm">Learning Focus</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-xs text-cyanAccent font-mono block">Currently Learning:</span>
                  <span className="text-textWhite text-sm font-semibold">Microservices Architectures & Cloud deployment (AWS)</span>
                </div>
                <div>
                  <span className="text-xs text-accent font-mono block">Favorite Stack:</span>
                  <span className="text-textWhite text-sm font-semibold">Java 8+ / Spring Boot / MySQL / React / RESTful APIs</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        <div className="flex justify-start font-mono text-cyanAccent text-sm mt-8">
          <span>&lt;/section&gt;</span>
        </div>

      </div>
    </section>
  );
};

export default About;
