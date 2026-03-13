"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const waves = {
  home: null, // the hero handles its own background
  skills: (
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full opacity-30 object-cover origin-center scale-110">
      <path d="M0,160L80,144C160,128,320,96,480,101.3C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" fill="url(#grad2)"></path>
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#1a73e8" />
          <stop offset="1" stopColor="#ea4335" />
        </linearGradient>
      </defs>
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full opacity-30 object-cover origin-center scale-110">
      <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="url(#grad3)"></path>
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#ea4335" />
          <stop offset="1" stopColor="#fbbc05" />
        </linearGradient>
      </defs>
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full opacity-25 object-cover origin-center scale-110">
      <path d="M0,192L60,170.7C120,149,240,107,360,117.3C480,128,600,192,720,208C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" fill="url(#grad4)"></path>
      <defs>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#fbbc05" />
          <stop offset="1" stopColor="#34a853" />
        </linearGradient>
      </defs>
    </svg>
  ),
  education: (
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full opacity-25 object-cover origin-center scale-110">
      <path d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="url(#grad5)"></path>
      <defs>
        <linearGradient id="grad5" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop stopColor="#34a853" />
          <stop offset="1" stopColor="#1a73e8" />
        </linearGradient>
      </defs>
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full opacity-25 object-cover origin-center scale-110">
      <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" fill="url(#grad6)"></path>
      <defs>
        <linearGradient id="grad6" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop stopColor="#1a73e8" />
          <stop offset="1" stopColor="#ea4335" />
        </linearGradient>
      </defs>
    </svg>
  )
};

export default function BackgroundPatterns() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id], footer[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none w-full h-full overflow-hidden mix-blend-multiply [mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]">
      {/* Background container wrapper */}
      <AnimatePresence mode="popLayout">
        {activeSection !== "home" && waves[activeSection as keyof typeof waves] && (
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full flex items-center justify-center transform-gpu"
          >
            {waves[activeSection as keyof typeof waves]}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 backdrop-blur-[60px]" />
    </div>
  );
}
