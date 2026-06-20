import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Terminal, AlertCircle, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email, phone, location, github, linkedin } = portfolioData.personalDetails;
  
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setStatus(null);

    // EmailJS Integration
    // Recruiter-focused fallback logic: If Service/Template keys are not configured yet,
    // simulate a successful message send so the UI can be fully tested.
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_EMAILJS_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_EMAILJS_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY';

    if (
      serviceId === 'YOUR_EMAILJS_SERVICE_ID' ||
      templateId === 'YOUR_EMAILJS_TEMPLATE_ID' ||
      !serviceId ||
      !templateId ||
      !publicKey
    ) {
      // Simulation mode
      setTimeout(() => {
        setLoading(false);
        setStatus('success');
        setStatusMessage('System: Message sent successfully (Development Simulation). Thank you!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    } else {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then((result) => {
          setLoading(false);
          setStatus('success');
          setStatusMessage('Message sent successfully. I will get back to you shortly.');
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, (error) => {
          setLoading(false);
          setStatus('error');
          setStatusMessage(`Failed to send message: ${error.text}`);
        });
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyanAccent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="font-mono text-cyanAccent text-sm mb-2 font-semibold flex items-center gap-2">
            <span>&lt;section id="contact"&gt;</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-textWhite">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-cyanAccent mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-textWhite">
                Contact Information
              </h3>
              <p className="text-textGray text-sm md:text-base leading-relaxed">
                Feel free to reach out for internship opportunities, project collaborations, or technical screenings. I will do my best to respond within 24 hours.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="bg-card p-4 rounded-xl border border-accent/10 flex items-center gap-4 hover:border-cyanAccent/30 transition-colors">
                <div className="p-3 bg-secondary rounded-lg text-cyanAccent border border-accent/5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-textGray block">EMAIL</span>
                  <a href={`mailto:${email}`} className="text-sm font-semibold text-textWhite hover:text-cyanAccent transition-colors">
                    {email}
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-card p-4 rounded-xl border border-accent/10 flex items-center gap-4 hover:border-cyanAccent/30 transition-colors">
                <div className="p-3 bg-secondary rounded-lg text-accent border border-accent/5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-textGray block">PHONE</span>
                  <a href={`tel:${phone}`} className="text-sm font-semibold text-textWhite hover:text-accent transition-colors">
                    {phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-card p-4 rounded-xl border border-accent/10 flex items-center gap-4 hover:border-cyanAccent/30 transition-colors">
                <div className="p-3 bg-secondary rounded-lg text-cyanAccent border border-accent/5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-textGray block">LOCATION</span>
                  <span className="text-sm font-semibold text-textWhite">
                    {location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick social nodes */}
            <div className="flex gap-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-accent/25 text-textGray hover:text-cyanAccent hover:border-cyanAccent/50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-accent/25 text-textGray hover:text-accent hover:border-accent/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-card p-6 md:p-8 rounded-2xl border border-accent/10 hover:border-accent/20 transition-all text-left">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              
              <div className="flex items-center gap-2 text-accent mb-4 font-mono text-xs">
                <Terminal className="w-4 h-4" />
                <span>vaibhav@dev:~$ contact --send</span>
              </div>

              {/* Name field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-mono text-textGray block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-secondary border border-accent/10 focus:border-cyanAccent/60 text-textWhite rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono text-textGray block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className="w-full bg-secondary border border-accent/10 focus:border-cyanAccent/60 text-textWhite rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Subject field */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-mono text-textGray block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Recruitment Opportunity / Feedback"
                  className="w-full bg-secondary border border-accent/10 focus:border-cyanAccent/60 text-textWhite rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-textGray block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full bg-secondary border border-accent/10 focus:border-cyanAccent/60 text-textWhite rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              {/* Feedback messages */}
              {status && (
                <div 
                  className={`flex items-start gap-2.5 p-3.5 rounded-lg border text-sm font-mono ${
                    status === 'success' 
                      ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                      : 'bg-red-500/10 border-red-500/30 text-red-400'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-accent text-white font-bold hover:bg-accent/80 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-md shadow-accent/10"
                >
                  {loading ? (
                    <span className="font-mono text-xs">SENDING...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>

        <div className="flex justify-start font-mono text-cyanAccent text-sm mt-8">
          <span>&lt;/section&gt;</span>
        </div>

      </div>
    </section>
  );
};

export default Contact;
