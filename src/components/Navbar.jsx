import React, { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Experience', target: 'experience' },
  { label: 'Education', target: 'education' },
  { label: 'Certifications', target: 'certifications' },
  { label: 'Contact', target: 'contact' }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll position to apply blur background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is in view
      const scrollPosition = window.scrollY + 120; // offset for navbar height
      
      for (const item of navItems) {
        const el = document.getElementById(item.target);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.target);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(target);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // offset
        behavior: 'smooth'
      });
      setActiveSection(target);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary/80 backdrop-blur-md border-b border-accent/10 py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, 'home')}
          className="flex items-center gap-2 text-glow-accent text-accent font-mono font-bold text-lg"
        >
          <Terminal className="w-5 h-5 text-cyanAccent" />
          <span>VAIBHAV_JADHAV</span>
          <span className="text-cyanAccent text-glow-cyan animate-pulse">_</span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(e) => handleScrollTo(e, item.target)}
              className={`text-sm font-mono transition-colors relative py-1 px-2 ${
                activeSection === item.target 
                  ? 'text-cyanAccent' 
                  : 'text-textGray hover:text-textWhite'
              }`}
            >
              {item.label}
              {activeSection === item.target && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyanAccent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-textGray hover:text-textWhite focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-secondary border-b border-accent/15 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.target}
                  href={`#${item.target}`}
                  onClick={(e) => handleScrollTo(e, item.target)}
                  className={`text-sm font-mono py-2 px-3 rounded-lg transition-colors ${
                    activeSection === item.target 
                      ? 'bg-accent/10 text-cyanAccent border-l-2 border-cyanAccent' 
                      : 'text-textGray hover:text-textWhite hover:bg-card/50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
