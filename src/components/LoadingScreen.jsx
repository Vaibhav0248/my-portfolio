import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingSteps = [
  { text: "git clone https://github.com/Vaibhav0248/portfolio.git", delay: 200, type: "command" },
  { text: "Cloning into 'portfolio'...", delay: 400, type: "system" },
  { text: "npm install --silent", delay: 800, type: "command" },
  { text: "Added 208 packages in 2.5s.", delay: 1000, type: "system" },
  { text: "javac Main.java && java Main", delay: 1300, type: "command" },
  { text: "Compiling JVM classpath configurations...", delay: 1500, type: "system" },
  { text: "Connecting JDBC to database foundation...", delay: 1700, type: "system" },
  { text: "Bootstrapping Spring BootApplication (v3.4.1)...", delay: 1900, type: "system" },
  { text: "Initializing full-stack routes /api/v1/projects...", delay: 2100, type: "system" },
  { text: "Build SUCCESSFUL.", delay: 2300, type: "success" }
];

const LoadingScreen = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [dots, setDots] = useState("...");

  useEffect(() => {
    // Animate the compilation dots
    const dotsInterval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    return () => clearInterval(dotsInterval);
  }, []);

  useEffect(() => {
    let timeouts = [];

    loadingSteps.forEach((step) => {
      const t = setTimeout(() => {
        setLogs((prev) => [...prev, step]);
      }, step.delay);
      timeouts.push(t);
    });

    const finishTimeout = setTimeout(() => {
      onComplete();
    }, 2800);
    timeouts.push(finishTimeout);

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#0F172A] z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#111827] rounded-xl border border-accent/20 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-[#1E293B] px-4 py-3 border-b border-accent/15 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-xs font-mono text-textGray">bash - vaibhav_jadhav - 80×24</div>
          <div className="w-4" />
        </div>

        {/* Terminal body */}
        <div className="p-5 font-mono text-sm h-80 overflow-y-auto flex flex-col justify-start text-left space-y-2">
          {logs.map((log, index) => (
            <div key={index} className="leading-relaxed">
              {log.type === "command" && (
                <span className="text-cyanAccent mr-2">vaibhav@dev:~$</span>
              )}
              {log.type === "success" ? (
                <span className="text-green-400 font-bold text-glow-cyan">{log.text}</span>
              ) : (
                <span className={log.type === "command" ? "text-textWhite" : "text-textGray"}>
                  {log.text}
                </span>
              )}
            </div>
          ))}
          {logs.length < loadingSteps.length && (
            <div className="flex items-center text-accent">
              <span className="animate-pulse mr-1">⚡</span>
              <span>Compiling modules{dots}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
