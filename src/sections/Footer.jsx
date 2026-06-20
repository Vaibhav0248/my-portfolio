import React from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { name, github, linkedin, email } = portfolioData.personalDetails;
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, target) => {
    e.preventDefault();
    const el = document.getElementById(target);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-secondary border-t border-accent/10 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 text-left">
        
        {/* Left Side: Brand */}
        <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, 'home')}
            className="flex items-center gap-2 text-accent font-mono font-bold text-lg text-glow-accent"
          >
            <Terminal className="w-5 h-5 text-cyanAccent" />
            <span>VAIBHAV_JADHAV</span>
          </a>
          <p className="text-textGray text-xs max-w-xs leading-relaxed">
            Java Full Stack Developer portfolios. Structured with high performance React, Vite, and tailwind.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs text-textGray">
          <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-cyanAccent transition-colors">
            About
          </a>
          <a href="#skills" onClick={(e) => handleScrollTo(e, 'skills')} className="hover:text-cyanAccent transition-colors">
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-cyanAccent transition-colors">
            Projects
          </a>
          <a href="#experience" onClick={(e) => handleScrollTo(e, 'experience')} className="hover:text-cyanAccent transition-colors">
            Experience
          </a>
          <a href="#certifications" onClick={(e) => handleScrollTo(e, 'certifications')} className="hover:text-cyanAccent transition-colors">
            Certifications
          </a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-cyanAccent transition-colors">
            Contact
          </a>
        </div>

        {/* Right Side: Copyrights & Developer Tag */}
        <div className="flex flex-col items-center md:items-end space-y-3 text-center md:text-right font-mono text-xs text-textGray">
          <div className="flex items-center gap-4">
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-cyanAccent transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${email}`} className="hover:text-cyanAccent transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <div className="space-y-1">
            <p>&copy; {currentYear} Vaibhav Jadhav. All rights reserved.</p>
            <p className="text-[10px] text-accent/80 font-bold">
              <span>Designed &amp; Developed with </span>
              <span className="text-cyanAccent">&lt;code&gt;</span>
              <span> &amp; </span>
              <span className="text-cyanAccent">&lt;/code&gt;</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
