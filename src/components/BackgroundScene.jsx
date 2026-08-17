import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundScene({ type = 'hero', containerRef }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax rates: back layers translate down/slower, front layers stay relatively anchored.
  const ySky = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const yBack = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const yFront = useTransform(scrollYProgress, [0, 1], ["0%", "2%"]);

  // Opacities fade out towards the boundaries to prevent overlap
  const opacityBack = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);
  const opacityMid = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.5, 1, 1, 0.5]);

  // Streetlight & Window Flicker during entry and exit transitions
  const transitionFlicker = useTransform(
    scrollYProgress,
    [0, 0.03, 0.06, 0.09, 0.12, 0.15, 0.85, 0.88, 0.91, 0.94, 0.97, 1],
    [0.1, 0.95, 0.15, 1, 0.3, 1, 1, 0.25, 0.95, 0.15, 0.9, 0.0]
  );

  // Helper to generate windows for city buildings
  const renderWindowGrid = (startX, startY, cols, rows, spacingX, spacingY, w, h) => {
    const windows = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        windows.push(
          <motion.rect
            key={`win-${startX}-${r}-${c}`}
            x={startX + c * spacingX}
            y={startY + r * spacingY}
            width={w}
            height={h}
            rx="1"
            fill="#f59e0b"
            style={{ opacity: transitionFlicker }}
            className="animate-pulse"
          />
        );
      }
    }
    return windows;
  };

  const renderScene = () => {
    switch (type) {
      case 'hero':
        return (
          <>
            {/* 1. Sky & Sun Glow (Furthest) */}
            <motion.div style={{ y: ySky }} className="absolute inset-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="heroSky" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2e1a47" />
                    <stop offset="40%" stopColor="#43123c" />
                    <stop offset="70%" stopColor="#9d174d" />
                    <stop offset="90%" stopColor="#fb7185" />
                    <stop offset="100%" stopColor="#fed7aa" />
                  </linearGradient>
                </defs>
                <rect width="1440" height="900" fill="url(#heroSky)" />
              </svg>
            </motion.div>

            {/* 2. Distant Mountains & Waterfall (Back Layer) */}
            <motion.div
              style={{ y: yBack, opacity: opacityBack }}
              className="absolute inset-0 w-full h-full flex items-end select-none pointer-events-none"
            >
              <svg className="w-full h-[65%] min-h-[450px]" viewBox="0 0 1440 600" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="heroMountain" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#9d174d" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#4c0519" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#070514" stopOpacity="0.95" />
                  </linearGradient>
                  <linearGradient id="waterfall" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a5f3fc" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                <path d="M-100 600 L180 180 L420 380 L620 220 L730 350 L730 600 Z" fill="url(#heroMountain)" />
                <path d="M710 600 L710 320 L840 250 L1080 150 L1320 380 L1600 200 L1600 600 Z" fill="url(#heroMountain)" />
                <rect x="714" y="320" width="8" height="280" fill="url(#waterfall)" opacity="0.8" />
              </svg>
            </motion.div>

            {/* 3. City Buildings & Windows (Mid Layer) */}
            <motion.div
              style={{ y: yMid, opacity: opacityMid }}
              className="absolute inset-0 w-full h-full flex items-end select-none pointer-events-none"
            >
              <svg className="w-full h-[55%] min-h-[380px]" viewBox="0 0 1440 600" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="bldgLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1e113c" />
                    <stop offset="100%" stopColor="#0b0518" />
                  </linearGradient>
                  <linearGradient id="bldgRight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0b0518" />
                    <stop offset="100%" stopColor="#1e113c" />
                  </linearGradient>
                </defs>
                <path d="M0 100 L150 100 L150 600 L0 600 Z" fill="url(#bldgLeft)" />
                <path d="M150 220 L270 220 L270 600 L150 600 Z" fill="url(#bldgLeft)" />
                <path d="M270 260 L360 260 L360 600 L270 600 Z" fill="url(#bldgLeft)" />
                <path d="M360 350 L430 350 L430 600 L360 600 Z" fill="url(#bldgLeft)" />

                <path d="M1010 350 L1080 350 L1080 600 L1010 600 Z" fill="url(#bldgRight)" />
                <path d="M1080 260 L1170 260 L1170 600 L1080 600 Z" fill="url(#bldgRight)" />
                <path d="M1170 220 L1290 220 L1290 600 L1170 600 Z" fill="url(#bldgRight)" />
                <path d="M1290 100 L1440 100 L1440 600 L1290 600 Z" fill="url(#bldgRight)" />

                {renderWindowGrid(20, 130, 4, 12, 28, 35, 12, 18)}
                {renderWindowGrid(170, 245, 3, 9, 30, 35, 14, 18)}
                {renderWindowGrid(290, 285, 2, 8, 32, 35, 14, 18)}
                {renderWindowGrid(1310, 130, 4, 12, 28, 35, 12, 18)}
                {renderWindowGrid(1200, 245, 2, 9, 36, 35, 14, 18)}
                {renderWindowGrid(1100, 285, 2, 8, 32, 35, 14, 18)}
              </svg>
            </motion.div>

            {/* 4. Center River, Rocks & Streetlamps (Front Layer) */}
            <motion.div
              style={{ y: yFront }}
              className="absolute inset-0 w-full h-full flex items-end select-none pointer-events-none"
            >
              <svg className="w-full h-[35%] min-h-[250px]" viewBox="0 0 1440 300" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="riverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0891b2" />
                    <stop offset="30%" stopColor="#22d3ee" />
                    <stop offset="60%" stopColor="#0e7490" />
                    <stop offset="100%" stopColor="#083344" />
                  </linearGradient>
                  <linearGradient id="lampGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <path d="M700 0 L740 0 L1080 300 L360 300 Z" fill="url(#riverGrad)" />
                <path d="M0 0 L360 300 L0 300 Z" fill="#070514" />
                <path d="M1440 0 L1080 300 L1440 300 Z" fill="#070514" />

                {/* Rocks */}
                <path d="M680 15 Q 650 0 630 20 T 610 30" fill="#1e113c" stroke="#312e81" strokeWidth="1" />
                <path d="M600 40 Q 560 20 530 50 T 490 60" fill="#110729" stroke="#312e81" strokeWidth="1" />
                <path d="M470 70 Q 420 40 380 90 T 320 110" fill="#1a0b36" stroke="#312e81" strokeWidth="1" />
                <path d="M300 130 Q 230 90 180 160 T 110 200" fill="#0f0524" stroke="#312e81" strokeWidth="2" />
                <path d="M150 300 Q 240 180 340 300 Z" fill="#160830" stroke="#312e81" strokeWidth="3" />
                <path d="M280 300 Q 380 200 480 300 Z" fill="#0c031d" stroke="#312e81" strokeWidth="3" />

                <path d="M760 15 Q 790 0 810 20 T 830 30" fill="#1e113c" stroke="#312e81" strokeWidth="1" />
                <path d="M840 40 Q 880 20 910 50 T 950 60" fill="#110729" stroke="#312e81" strokeWidth="1" />
                <path d="M970 70 Q 1020 40 1060 90 T 1120 110" fill="#1a0b36" stroke="#312e81" strokeWidth="1" />
                <path d="M1100 300 Q 1200 180 1290 300 Z" fill="#160830" stroke="#312e81" strokeWidth="3" />
                <path d="M960 300 Q 1060 200 1160 300 Z" fill="#0c031d" stroke="#312e81" strokeWidth="3" />

                {/* Streetlamps with transition-triggered flicker and continuous blinking */}
                {/* Left Lamps */}
                <motion.g style={{ opacity: transitionFlicker }}>
                  <line x1="280" y1="80" x2="280" y2="180" stroke="#475569" strokeWidth="3" />
                  <circle cx="280" cy="80" r="5" fill="#fef08a" className="animate-flicker-lamp" style={{ animationDelay: '0.2s' }} />
                  <polygon points="280,80 210,300 350,300" fill="url(#lampGlow)" className="animate-flicker-lamp" style={{ animationDelay: '0.2s' }} />
                </motion.g>

                <motion.g style={{ opacity: transitionFlicker }}>
                  <line x1="420" y1="120" x2="420" y2="220" stroke="#475569" strokeWidth="2.5" />
                  <circle cx="420" cy="120" r="4.5" fill="#fef08a" className="animate-flicker-lamp" style={{ animationDelay: '1.5s' }} />
                  <polygon points="420,120 360,300 480,300" fill="url(#lampGlow)" className="animate-flicker-lamp" style={{ animationDelay: '1.5s' }} />
                </motion.g>

                {/* Right Lamps */}
                <motion.g style={{ opacity: transitionFlicker }}>
                  <line x1="1160" y1="80" x2="1160" y2="180" stroke="#475569" strokeWidth="3" />
                  <circle cx="1160" cy="80" r="5" fill="#fef08a" className="animate-flicker-lamp" style={{ animationDelay: '0.8s' }} />
                  <polygon points="1160,80 1090,300 1230,300" fill="url(#lampGlow)" className="animate-flicker-lamp" style={{ animationDelay: '0.8s' }} />
                </motion.g>

                <motion.g style={{ opacity: transitionFlicker }}>
                  <line x1="1020" y1="120" x2="1020" y2="220" stroke="#475569" strokeWidth="2.5" />
                  <circle cx="1020" cy="120" r="4.5" fill="#fef08a" className="animate-flicker-lamp" style={{ animationDelay: '2.1s' }} />
                  <polygon points="1020,120 960,300 1080,300" fill="url(#lampGlow)" className="animate-flicker-lamp" style={{ animationDelay: '2.1s' }} />
                </motion.g>
              </svg>
            </motion.div>
          </>
        );

      case 'about':
        return (
          <>
            {/* 1. Sky & Sun Glow (Sky remains identical for unity) */}
            <motion.div style={{ y: ySky }} className="absolute inset-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                <rect width="1440" height="900" fill="url(#heroSky)" />
              </svg>
            </motion.div>

            {/* 2. Looking Up At Towering Angled Skyscrapers (Mid Layer) */}
            <motion.div
              style={{ y: yMid, opacity: opacityMid }}
              className="absolute inset-0 w-full h-full flex items-end select-none pointer-events-none"
            >
              <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="skyscraperGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0b0518" />
                    <stop offset="100%" stopColor="#1e113c" />
                  </linearGradient>
                </defs>

                {/* Distant Center Skyscraper */}
                <rect x="520" y="220" width="400" height="680" fill="url(#skyscraperGrad)" stroke="#312e81" strokeWidth="2" />
                {renderWindowGrid(560, 260, 8, 12, 45, 45, 16, 22)}

                {/* Left Angled Towers (Perspective: Looking Up) */}
                <polygon points="0,900 350,450 180,0 0,0" fill="#15092a" stroke="#312e81" strokeWidth="1.5" />
                <polygon points="0,900 200,600 50,0 0,0" fill="#0b0518" />

                {/* Right Angled Towers (Perspective: Looking Up) */}
                <polygon points="1440,900 1090,450 1260,0 1440,0" fill="#15092a" stroke="#312e81" strokeWidth="1.5" />
                <polygon points="1440,900 1240,600 1390,0 1440,0" fill="#0b0518" />
              </svg>
            </motion.div>

            {/* 3. Base streetlamps for skyscrapers (Front Layer) */}
            <motion.div
              style={{ y: yFront }}
              className="absolute inset-0 w-full h-full flex items-end select-none pointer-events-none"
            >
              <svg className="w-full h-[30%] min-h-[220px]" viewBox="0 0 1440 270" preserveAspectRatio="none">
                {/* Dark foreground street floor */}
                <path d="M0 200 L1440 200 L1440 270 L0 270 Z" fill="#070514" />
                
                {/* Streetlamps lining the base of the skyscrapers */}
                <line x1="380" y1="80" x2="380" y2="200" stroke="#475569" strokeWidth="3" />
                <motion.circle cx="380" cy="80" r="5" fill="#fef08a" style={{ opacity: transitionFlicker }} />
                <motion.polygon points="380,80 320,200 440,200" fill="url(#lampGlow)" style={{ opacity: transitionFlicker }} />

                <line x1="1060" y1="80" x2="1060" y2="200" stroke="#475569" strokeWidth="3" />
                <motion.circle cx="1060" cy="80" r="5" fill="#fef08a" style={{ opacity: transitionFlicker }} />
                <motion.polygon points="1060,80 1000,200 1120,200" fill="url(#lampGlow)" style={{ opacity: transitionFlicker }} />
              </svg>
            </motion.div>
          </>
        );

      case 'projects':
        return (
          <>
            {/* 1. Sky & Sun Glow */}
            <motion.div style={{ y: ySky }} className="absolute inset-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                <rect width="1440" height="900" fill="url(#heroSky)" />
              </svg>
            </motion.div>

            {/* 2. Skyline panorama (Mid Layer) */}
            <motion.div
              style={{ y: yMid, opacity: opacityMid }}
              className="absolute inset-0 w-full h-full flex items-end select-none pointer-events-none"
            >
              <svg className="w-full h-[80%] min-h-[600px]" viewBox="0 0 1440 700" preserveAspectRatio="none">
                {/* Distant building silhouettes */}
                <rect x="150" y="250" width="220" height="450" fill="#13082b" stroke="#312e81" strokeWidth="1" />
                {renderWindowGrid(180, 280, 4, 10, 40, 38, 12, 16)}

                <rect x="420" y="150" width="300" height="550" fill="#1a0c38" stroke="#312e81" strokeWidth="1" />
                {renderWindowGrid(450, 180, 6, 12, 42, 38, 14, 18)}
                {/* Aviation warning light (Antenna on tower 2) */}
                <line x1="570" y1="150" x2="570" y2="70" stroke="#f43f5e" strokeWidth="2.5" />
                <circle cx="570" cy="70" r="5" fill="#ef4444" className="animate-ping" />

                <rect x="800" y="220" width="240" height="480" fill="#0f0724" stroke="#312e81" strokeWidth="1" />
                {renderWindowGrid(830, 250, 5, 10, 38, 38, 12, 16)}

                <rect x="1100" y="100" width="220" height="600" fill="#170933" stroke="#312e81" strokeWidth="1" />
                {renderWindowGrid(1130, 130, 4, 14, 42, 36, 14, 18)}
                {/* Warning light */}
                <line x1="1210" y1="100" x2="1210" y2="30" stroke="#f43f5e" strokeWidth="2.5" />
                <circle cx="1210" cy="30" r="5" fill="#ef4444" className="animate-ping" />
              </svg>
            </motion.div>

            {/* 3. Rooftop foreground platform (Front Layer) */}
            <motion.div
              style={{ y: yFront }}
              className="absolute inset-0 w-full h-full flex items-end select-none pointer-events-none"
            >
              <svg className="w-full h-[35%] min-h-[250px]" viewBox="0 0 1440 300" preserveAspectRatio="none">
                {/* Ledge floor */}
                <rect y="180" width="1440" height="120" fill="#070514" />

                {/* Safety Railings */}
                <line x1="0" y1="80" x2="1440" y2="80" stroke="#312e81" strokeWidth="4" />
                <line x1="0" y1="120" x2="1440" y2="120" stroke="#312e81" strokeWidth="2.5" />
                {Array.from({ length: 11 }).map((_, i) => (
                  <line key={`ledge-post-${i}`} x1={i * 144} y1="80" x2={i * 144} y2="180" stroke="#312e81" strokeWidth="3.5" />
                ))}

                {/* Spinning rooftop exhaust fan blades (representing operations/gear movement) */}
                <circle cx="200" cy="220" r="45" fill="none" stroke="#1e1b4b" strokeWidth="5" />
                <motion.g
                  className="origin-[200px_220px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <path d="M195 180 Q 200 160 205 180 L 205 260 Q 200 280 195 260 Z" fill="#312e81" opacity="0.8" />
                  <path d="M160 215 Q 140 220 160 225 L 240 225 Q 260 220 240 215 Z" fill="#312e81" opacity="0.8" />
                </motion.g>
              </svg>
            </motion.div>
          </>
        );

      case 'skills':
        return (
          <>
            {/* 1. Sky Base */}
            <motion.div style={{ y: ySky }} className="absolute inset-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                <rect width="1440" height="900" fill="url(#heroSky)" />
              </svg>
            </motion.div>

            {/* 2. Top-down Aerial View (Grid of Building Roofs & Streets) */}
            <motion.div
              style={{ y: yMid, opacity: opacityMid }}
              className="absolute inset-0 w-full h-full flex items-center justify-center select-none pointer-events-none"
            >
              <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                {/* Horizontal & Vertical streets forming a grid */}
                {/* Street 1 (Horizontal) */}
                <rect y="250" width="1440" height="100" fill="#0f0826" />
                {/* Street 2 (Horizontal) */}
                <rect y="600" width="1440" height="100" fill="#0f0826" />
                {/* Street 3 (Vertical) */}
                <rect x="350" width="100" height="900" fill="#0f0826" />
                {/* Street 4 (Vertical) */}
                <rect x="1050" width="100" height="900" fill="#0f0826" />

                {/* Building blocks (Top-down views) */}
                <rect x="0" y="0" width="350" height="250" fill="#070514" stroke="#1e1b4b" strokeWidth="3" />
                <rect x="450" y="0" width="600" height="250" fill="#070514" stroke="#1e1b4b" strokeWidth="3" />
                <rect x="1150" y="0" width="290" height="250" fill="#070514" stroke="#1e1b4b" strokeWidth="3" />

                <rect x="0" y="350" width="350" height="250" fill="#070514" stroke="#1e1b4b" strokeWidth="3" />
                <rect x="450" y="350" width="600" height="250" fill="#070514" stroke="#1e1b4b" strokeWidth="3" />
                <rect x="1150" y="350" width="290" height="250" fill="#070514" stroke="#1e1b4b" strokeWidth="3" />

                {/* Pulsing roof design details/connections */}
                <circle cx="750" cy="475" r="45" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="10 15" />
                <line x1="450" y1="475" x2="1050" y2="475" stroke="#f43f5e" strokeWidth="2.5" opacity="0.3" />

                {/* Highway traffic light streaks flowing along the streets (Headlights & Taillights) */}
                {/* Horizontal highway lane 1 (Pink taillights) */}
                <path
                  d="M 0 280 L 1440 280"
                  stroke="#f43f5e"
                  strokeWidth="3.5"
                  strokeDasharray="40 120"
                  className="animate-waterfall-flow"
                  style={{ animationDuration: "10s" }}
                />
                {/* Horizontal highway lane 2 (Cyan headlights) */}
                <path
                  d="M 1440 320 L 0 320"
                  stroke="#22d3ee"
                  strokeWidth="3.5"
                  strokeDasharray="40 120"
                  className="animate-waterfall-flow"
                  style={{ animationDuration: "8s" }}
                />

                {/* Vertical highway lane 1 (Cyan headlights) */}
                <path
                  d="M 380 0 L 380 900"
                  stroke="#22d3ee"
                  strokeWidth="3.5"
                  strokeDasharray="30 100"
                  className="animate-waterfall-flow"
                  style={{ animationDuration: "6s" }}
                />
                {/* Vertical highway lane 2 (Pink taillights) */}
                <path
                  d="M 1080 900 L 1080 0"
                  stroke="#f43f5e"
                  strokeWidth="3.5"
                  strokeDasharray="30 100"
                  className="animate-waterfall-flow"
                  style={{ animationDuration: "7s" }}
                />
              </svg>
            </motion.div>
          </>
        );

      case 'experience':
        return (
          <>
            {/* 1. Sky Base */}
            <motion.div style={{ y: ySky }} className="absolute inset-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                <rect width="1440" height="900" fill="url(#heroSky)" />
              </svg>
            </motion.div>

            {/* 2. Distant harbor cranes / skyline (Mid Layer) */}
            <motion.div
              style={{ y: yMid, opacity: opacityMid }}
              className="absolute inset-0 w-full h-full flex items-end select-none pointer-events-none"
            >
              <svg className="w-full h-[60%] min-h-[400px]" viewBox="0 0 1440 500" preserveAspectRatio="none">
                {/* Distant bridge support towers */}
                <rect x="220" y="50" width="35" height="450" fill="#1e113c" stroke="#312e81" strokeWidth="2.5" />
                <rect x="1185" y="50" width="35" height="450" fill="#1e113c" stroke="#312e81" strokeWidth="2.5" />

                {/* Suspension cables connecting towers */}
                <path d="M 0 200 Q 237 80 720 300 Q 1202 80 1440 200" fill="none" stroke="#6366f1" strokeWidth="4.5" opacity="0.65" />
                {/* Vertical cable hangers */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const x = 60 + i * 57;
                  // Cable Y coordinate calculated with parabola formula
                  const relativeX = (x - 720) / 720;
                  const cableY = 300 + relativeX * relativeX * -220;
                  return (
                    <line
                      key={`hanger-${i}`}
                      x1={x}
                      y1={cableY}
                      x2={x}
                      y2="450"
                      stroke="#6366f1"
                      strokeWidth="1.5"
                      opacity="0.35"
                    />
                  );
                })}
              </svg>
            </motion.div>

            {/* 3. Suspension Bridge Deck & Light Markers (Front Layer) */}
            <motion.div
              style={{ y: yFront }}
              className="absolute inset-0 w-full h-full flex items-end select-none pointer-events-none"
            >
              <svg className="w-full h-[35%] min-h-[250px]" viewBox="0 0 1440 300" preserveAspectRatio="none">
                {/* Bridge road deck */}
                <path d="M0 160 Q 720 100 1440 160 L 1440 230 Q 720 170 0 230 Z" fill="#070514" stroke="#312e81" strokeWidth="3" />
                
                {/* Rotating machinery gears near bridge support (Ops theme) */}
                <motion.g
                  className="origin-[237px_100px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <circle cx="237" cy="100" r="30" fill="none" stroke="#6366f1" strokeWidth="6" />
                  {Array.from({ length: 6 }).map((_, i) => (
                    <rect
                      key={`gear-t1-${i}`}
                      x="231"
                      y="62"
                      width="12"
                      height="12"
                      fill="#6366f1"
                      transform={`rotate(${i * 60} 237 100)`}
                    />
                  ))}
                </motion.g>

                {/* Glowing light markers along bridge side panel with continuous blinking */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const x = 60 + i * 118;
                  const relativeX = (x - 720) / 720;
                  const y = 130 + relativeX * relativeX * -30;
                  const delay = (i * 0.45).toFixed(2);
                  return (
                    <motion.g key={`bridge-lite-${i}`} style={{ opacity: transitionFlicker }}>
                      <circle
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#fef08a"
                        className="animate-flicker-lamp"
                        style={{ animationDelay: `${delay}s` }}
                      />
                      <polygon
                        points={`${x},${y} ${x-25},220 ${x+25},220`}
                        fill="url(#lampGlow)"
                        className="animate-flicker-lamp"
                        style={{ animationDelay: `${delay}s` }}
                      />
                    </motion.g>
                  );
                })}
              </svg>
            </motion.div>
          </>
        );

      case 'contact':
        return (
          <>
            {/* 1. Sky Base */}
            <motion.div style={{ y: ySky }} className="absolute inset-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                <rect width="1440" height="900" fill="url(#heroSky)" />
              </svg>
            </motion.div>

            {/* 2. Distant skyline silhouettes (Mid Layer) */}
            <motion.div
              style={{ y: yMid, opacity: opacityMid }}
              className="absolute inset-0 w-full h-full flex items-end select-none pointer-events-none"
            >
              <svg className="w-full h-[65%] min-h-[450px]" viewBox="0 0 1440 600" preserveAspectRatio="none">
                {/* Silhouette buildings in far distance to align with sky */}
                <rect x="50" y="320" width="180" height="280" fill="#130b2e" />
                <rect x="260" y="250" width="220" height="350" fill="#1c0e3a" />
                <rect x="520" y="360" width="150" height="240" fill="#0f0724" />
              </svg>
            </motion.div>

            {/* 3. Close-up Ground Streetlamp with floating dust (Front Layer) */}
            <motion.div
              style={{ y: yFront }}
              className="absolute inset-0 w-full h-full flex items-end select-none pointer-events-none"
            >
              <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                <defs>
                  {/* Streetlamp glow cones */}
                  <linearGradient id="heavyLampGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Dark floor corner and bench silhouette */}
                <path d="M0 800 L1440 800 L1440 900 L0 900 Z" fill="#070514" />
                <path d="M200 800 L200 750 L400 750 L400 800 Z" fill="#1e293b" opacity="0.3" /> {/* Bench representation */}

                {/* Massive curved foreground streetlamp on right */}
                {/* Curved steel pole */}
                <path d="M 1200 900 L 1200 350 Q 1200 200 1100 200 L 1040 200" fill="none" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
                {/* Lamp fixture box */}
                <rect x="980" y="180" width="70" height="35" rx="5" fill="#334155" />
                {/* Lightbulb circle */}
                <motion.circle cx="1015" cy="210" r="14" fill="#fef08a" style={{ opacity: transitionFlicker }} />
                {/* Massive light cone */}
                <motion.polygon points="1015,210 650,900 1380,900" fill="url(#heavyLampGlow)" style={{ opacity: transitionFlicker }} />

                {/* Floating atmospheric dust particles inside the light cone */}
                {Array.from({ length: 25 }).map((_, i) => {
                  const cx = 850 + ((i * 17) % 350);
                  const cy = 300 + ((i * 29) % 550);
                  const r = 1.5 + (i % 3);
                  const delay = i * 0.3;
                  return (
                    <circle
                      key={`dust-${i}`}
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill="#fef08a"
                      className="animate-float-particle"
                      style={{
                        animationDelay: `${delay}s`,
                        animationDuration: `${6 + (i % 4) * 2}s`
                      }}
                    />
                  );
                })}
              </svg>
            </motion.div>
          </>
        );

      default:
        return (
          <div className="absolute inset-0 bg-gradient-to-b from-[#070514] via-[#0d0a21] to-[#070514]">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
        );
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {renderScene()}
    </div>
  );
}
