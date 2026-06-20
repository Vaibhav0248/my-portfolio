import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Terminal, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  const certifications = portfolioData.certifications;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="certifications" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[250px] h-[250px] bg-accent/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="font-mono text-cyanAccent text-sm mb-2 font-semibold flex items-center gap-2">
            <span>&lt;section id="certifications"&gt;</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-textWhite">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-cyanAccent mt-3 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 md:p-8 rounded-2xl border border-accent/10 hover:border-cyanAccent/50 transition-all duration-300 flex items-start gap-4 shadow-xl hover:shadow-cyanAccent/5 relative group text-left"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              {/* Badge Icon */}
              <div className="p-3.5 rounded-xl bg-secondary border border-accent/10 text-cyanAccent group-hover:text-accent transition-colors shrink-0">
                <Award className="w-6 h-6" />
              </div>

              {/* Certificate Content */}
              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-cyanAccent bg-cyanAccent/10 px-2.5 py-0.5 rounded-full border border-cyanAccent/20 font-bold">
                    {cert.type}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-green-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-lg font-bold text-textWhite group-hover:text-cyanAccent transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-sm font-semibold font-mono text-accent">
                  {cert.issuer}
                </p>
                
                <p className="text-xs text-textGray leading-relaxed pt-1">
                  {cert.details}
                </p>

                {/* Footer Command */}
                <div className="pt-3 border-t border-accent/10 mt-3 font-mono text-[10px] text-textGray/50 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-cyanAccent" />
                  <span>credentials.verify("0x{index * 17 + 233}")</span>
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

export default Certifications;
