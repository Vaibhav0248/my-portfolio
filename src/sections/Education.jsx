import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Award, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const educationList = portfolioData.education;

  return (
    <section id="education" className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-cyanAccent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="font-mono text-cyanAccent text-sm mb-2 font-semibold flex items-center gap-2">
            <span>&lt;section id="education"&gt;</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-textWhite">
            Education
          </h2>
          <div className="w-12 h-1 bg-accent mt-3 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative pl-6 border-l-2 border-cyanAccent/20 text-left space-y-12">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Node Icon */}
              <div className="absolute -left-[37px] top-1.5 w-6 h-6 rounded-full bg-card border border-cyanAccent text-cyanAccent flex items-center justify-center shadow-lg">
                <BookOpen className="w-3 h-3 text-accent" />
              </div>

              {/* Education Card */}
              <div className="bg-card p-6 md:p-8 rounded-2xl border border-accent/10 hover:border-cyanAccent/40 transition-colors shadow-xl group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-textWhite group-hover:text-cyanAccent transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-mono text-cyanAccent font-semibold">{edu.institution}</p>
                  </div>
                  
                  {/* Period Badge */}
                  <div className="flex items-center gap-2 text-xs font-mono text-textGray bg-secondary px-3 py-1.5 rounded-lg border border-accent/5">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Score and Metric Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent font-mono text-sm font-bold mb-4">
                  <Award className="w-4 h-4 text-cyanAccent" />
                  <span>{edu.metric}</span>
                </div>

                <p className="text-sm text-textGray leading-relaxed">
                  {edu.details}
                </p>

                {/* Command metadata */}
                <div className="mt-6 pt-4 border-t border-accent/10 font-mono text-xs text-textGray/60 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyanAccent" />
                  <span>system.out.println(academicRecord);</span>
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

export default Education;
