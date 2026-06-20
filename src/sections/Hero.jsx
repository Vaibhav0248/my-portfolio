import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const { name, title, shortIntro, github, linkedin, email, resumeUrl } = portfolioData.personalDetails;
  
  // Typing animation for subtitle
  const [displayedTitle, setDisplayedTitle] = useState('');
  const fullTitle = `const role = "${title}";`;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedTitle((prev) => prev + fullTitle.charAt(index));
      index++;
      if (index >= fullTitle.length) {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 flex items-center justify-center relative overflow-hidden bg-primary">
      {/* Decorative subtle gradient background circle */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyanAccent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Info Column */}
        <motion.div 
          className="lg:col-span-7 flex flex-col space-y-6 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 font-mono text-cyanAccent text-sm font-semibold">
            <span>public class VaibhavJadhav &#123;</span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <span className="text-textGray text-lg block font-mono">Hello, My Name is</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-textWhite tracking-tight">
              {name}
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="h-8 flex items-center">
            <span className="font-mono text-base sm:text-lg text-accent font-semibold">
              {displayedTitle}
              <span className="text-cyanAccent animate-ping font-bold ml-1">|</span>
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-textGray text-base md:text-lg leading-relaxed max-w-xl">
            {shortIntro}
          </motion.p>

          {/* Call-to-actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent/80 transition-all flex items-center gap-2 group shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/30"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="px-6 py-3 rounded-xl bg-card border border-accent/20 hover:border-accent text-textWhite font-medium transition-all"
            >
              Contact Me
            </a>
            <a
              href={resumeUrl}
              download="VAIBHAV_JADHAV_CV.pdf"
              className="px-6 py-3 rounded-xl bg-secondary border border-cyanAccent/20 hover:border-cyanAccent hover:text-cyanAccent text-textGray font-medium transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-6 border-t border-card max-w-sm">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textGray hover:text-cyanAccent transition-colors flex items-center gap-2 group"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs hidden sm:inline">/Vaibhav0248</span>
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textGray hover:text-accent transition-colors flex items-center gap-2 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs hidden sm:inline">/vaibhav-jadhav</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="text-textGray hover:text-cyanAccent transition-colors flex items-center gap-2 group"
              aria-label="Email Address"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs hidden sm:inline">vaibhavjadhav0248</span>
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="font-mono text-cyanAccent text-sm font-semibold pt-2">
            <span>&#125;</span>
          </motion.div>
        </motion.div>

        {/* Right Image Column */}
        <motion.div 
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
        >
          <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Outer glow frames */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-cyanAccent rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-tr from-accent to-cyanAccent rounded-3xl opacity-10 group-hover:opacity-30 blur-xl transition-all duration-300 animate-pulse-subtle" />
            
            {/* Image frame container */}
            <div className="absolute inset-0 bg-card rounded-3xl overflow-hidden border-2 border-accent/20 group-hover:border-cyanAccent/50 transition-colors duration-300">
              <img 
                src={profileImg} 
                alt="Vaibhav Jadhav" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </div>
            
            {/* Embedded coding bracket overlays */}
            <div className="absolute top-4 left-4 bg-primary/70 backdrop-blur-sm px-3 py-1 rounded-lg border border-accent/20 text-accent font-mono text-xs select-none">
              &lt;img src="profile.jpg" /&gt;
            </div>
            <div className="absolute bottom-4 right-4 bg-primary/70 backdrop-blur-sm px-3 py-1 rounded-lg border border-cyanAccent/20 text-cyanAccent font-mono text-xs select-none">
              java.size = "full"
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
