import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [cursorSymbol, setCursorSymbol] = useState('');
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const symbols = ['{}', '</>', '[]', '()', ';', '=>', '&&', '||', '=='];

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.closest('button') || 
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive-cursor');

      if (isInteractive) {
        setHovered(true);
        // Randomly pick a code symbol when hovering over a new element
        if (!cursorSymbol) {
          const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
          setCursorSymbol(randomSymbol);
        }
      } else {
        setHovered(false);
        setCursorSymbol('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [visible, cursorSymbol]);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-50 flex items-center justify-center bg-transparent"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: hovered ? 1.5 : 1,
          borderColor: hovered ? '#06B6D4' : '#3B82F6',
          backgroundColor: hovered ? 'rgba(6, 182, 212, 0.05)' : 'rgba(59, 130, 246, 0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {hovered && (
          <span className="text-[10px] font-mono text-cyanAccent font-bold select-none">
            {cursorSymbol}
          </span>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyanAccent pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: 12,
          translateY: 12
        }}
        animate={{
          scale: hovered ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
