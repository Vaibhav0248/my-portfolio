import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Terminal, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import resumePreview from '../assets/resume_preview.png';

const ResumeSection = () => {
  const { resumeUrl } = portfolioData.personalDetails;

  return (
    <section id="resume" className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="font-mono text-cyanAccent text-sm mb-2 font-semibold flex items-center gap-2">
            <span>&lt;section id="resume"&gt;</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-textWhite">
            Resume / CV
          </h2>
          <div className="w-12 h-1 bg-accent mt-3 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Mockup Preview */}
          <motion.div 
            className="lg:col-span-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group max-w-md w-full aspect-[1/1.414] bg-card rounded-2xl p-4 border border-accent/20 hover:border-cyanAccent/50 transition-colors shadow-2xl overflow-hidden">
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-cyanAccent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-20" />
              
              {/* Image preview */}
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-secondary">
                <img 
                  src={resumePreview} 
                  alt="Vaibhav Jadhav Resume Preview" 
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Coding tag overlays */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-center bg-primary/95 backdrop-blur px-4 py-3 rounded-xl border border-accent/15">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyanAccent" />
                  <span className="font-mono text-xs text-textWhite font-semibold">VAIBHAV_JADHAV_CV.pdf</span>
                </div>
                <span className="font-mono text-[10px] text-accent font-bold">READY</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Download Details */}
          <motion.div 
            className="lg:col-span-6 text-left space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-textWhite">
              Recruiter-Friendly Resume Format
            </h3>
            <p className="text-textGray leading-relaxed text-sm md:text-base">
              Need a copy of my curriculum vitae for internal forwarding or screening databases? Download the formal PDF version containing my academic records, verified CGPA details, professional internship contributions, and detailed project frameworks.
            </p>

            <div className="space-y-3 font-mono text-xs text-textGray">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>One-click PDF download links</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Fully parsable ATS-friendly schema structure</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Up-to-date with recent internship & project descriptions</span>
              </div>
            </div>

            {/* Large Download Button */}
            <div className="pt-4">
              <a
                href={resumeUrl}
                download="VAIBHAV_JADHAV_CV.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-white font-bold hover:bg-accent/80 transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 group text-base"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>DOWNLOAD FULL PDF RESUME</span>
              </a>
            </div>

            <div className="pt-4 border-t border-accent/10 font-mono text-xs text-textGray/60 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyanAccent" />
              <span>wget {window.location.origin || 'http://localhost:5173'}{resumeUrl}</span>
            </div>
          </motion.div>

        </div>

        <div className="flex justify-start font-mono text-cyanAccent text-sm mt-8">
          <span>&lt;/section&gt;</span>
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
