import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import BackgroundScene from '../components/BackgroundScene';

export default function Hero() {
  const sectionRef = useRef(null);

  // Parent animation container for staggered text entries
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Text items slide up and fade in
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Custom smooth cubic-bezier
      },
    },
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layered SVG Mountain Parallax Background */}
      <BackgroundScene type="hero" containerRef={sectionRef} />

      {/* Main Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-6 max-w-5xl text-center select-none"
      >
        {/* Name Display */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-widest text-white uppercase leading-none text-glow"
        >
          KAVEER
          <span className="block mt-2 sm:mt-0 sm:inline sm:ml-4 bg-clip-text text-transparent bg-gradient-to-r from-sunset-purple via-sunset-coral to-sunset-gold">
            SINGH
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="mt-6 md:mt-8 font-sans font-medium text-xs sm:text-sm md:text-base tracking-[0.35em] text-slate-400 uppercase"
        >
          Aspiring Product Manager
        </motion.p>

        {/* Strong One-Liner */}
        <motion.p
          variants={itemVariants}
          className="mt-4 font-sans font-light text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Transforming diverse, complex ideas into structured, user-centric product solutions that solve real-world problems.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="mt-6 w-24 h-[1px] bg-gradient-to-r from-transparent via-sunset-coral to-transparent mx-auto"
        />
      </motion.div>

      {/* Cinematic bottom fading overlay to transition into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-base to-transparent pointer-events-none z-10" />

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ 
          delay: 1.8, 
          duration: 1, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-20"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-slate-400 uppercase mb-2">
          Scroll Down
        </span>
        <div className="w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-sunset-coral rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
