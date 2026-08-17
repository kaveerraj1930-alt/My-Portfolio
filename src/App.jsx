import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative bg-dark-base min-h-screen text-slate-100 selection:bg-sunset-coral selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Hero Landing */}
      <Hero />

      {/* About/My Story */}
      <About />

      {/* Case Studies */}
      <Projects />

      {/* Technical Toolbox */}
      <Skills />

      {/* Timeline Journey */}
      <Experience />

      {/* Contact Panel */}
      <Contact />
    </div>
  );
}
