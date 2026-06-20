import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-accent/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="font-mono text-cyanAccent text-sm mb-2 font-semibold flex items-center gap-2">
            <span>&lt;section id="experience"&gt;</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-textWhite">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-cyanAccent mt-3 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative pl-6 border-l-2 border-accent/20 text-left space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[37px] top-1.5 w-6 h-6 rounded-full bg-card border border-accent text-accent flex items-center justify-center shadow-lg">
                <Briefcase className="w-3 h-3 text-cyanAccent" />
              </div>

              {/* Experience Card */}
              <div className="bg-card p-6 md:p-8 rounded-2xl border border-accent/10 hover:border-cyanAccent/40 transition-colors shadow-xl group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-textWhite group-hover:text-cyanAccent transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono text-accent font-semibold">{exp.company}</p>
                  </div>
                  
                  {/* Calendar Badge */}
                  <div className="flex items-center gap-2 text-xs font-mono text-textGray bg-secondary px-3 py-1.5 rounded-lg border border-accent/5">
                    <Calendar className="w-3.5 h-3.5 text-cyanAccent" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-textGray font-mono mb-4">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{exp.location}</span>
                </div>

                {/* Bullets */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-cyanAccent block">&lt;activities&gt;</span>
                  <ul className="space-y-2 text-sm text-textGray pl-1">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent font-bold font-mono select-none">-</span>
                        <span dangerouslySetInnerHTML={{ __html: bullet }} />
                      </li>
                    ))}
                  </ul>
                  <span className="text-xs font-mono text-cyanAccent block">&lt;/activities&gt;</span>
                </div>

                {/* Tech Stack */}
                {exp.tech && (
                  <div className="mt-4 pt-3 border-t border-accent/5 flex flex-wrap gap-2">
                    {exp.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 text-[10px] font-mono bg-secondary border border-accent/10 rounded-md text-textWhite font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Subtitle command */}
                <div className="mt-6 pt-4 border-t border-accent/10 font-mono text-xs text-textGray/60 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-accent" />
                  <span>status = ACTIVE_INTERNSHIP</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-start font-mono text-cyanAccent text-sm mt-8">
          <span>&lt;/section&gt;</span>
        </div>

      </div>
    </section>
  );
};

export default Experience;
