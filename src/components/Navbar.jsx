import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Monitor scrolling to change Navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 glassmorphism border-b border-white/5 shadow-lg' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left-aligned Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 w-1/3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wider text-slate-300 hover:text-white transition-colors duration-200 uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex md:hidden w-1/3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Centered Logo Mark */}
          <div className="flex justify-center w-1/3 md:w-auto">
            <a href="#hero" className="flex items-center space-x-2">
              <span className="font-display font-black text-xl tracking-wider gradient-text text-glow">
                KS
              </span>
            </a>
          </div>

          {/* Right-aligned Contact Button */}
          <div className="flex justify-end w-1/3">
            <a
              href="#contact"
              className="px-5 py-2 text-xs md:text-sm font-medium uppercase tracking-widest text-slate-200 border border-slate-500 rounded-full hover:border-sunset-coral hover:text-white hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all duration-300"
            >
              Contact
            </a>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 w-full h-[calc(100vh-72px)] bg-dark-base/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 px-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-medium tracking-widest text-slate-300 hover:text-white transition-colors duration-200 uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 text-lg font-medium uppercase tracking-widest text-slate-200 border border-slate-500 rounded-full hover:border-sunset-coral hover:text-white transition-all duration-300"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
