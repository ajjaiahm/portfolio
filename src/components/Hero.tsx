"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, TerminalSquare } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Animation variants for the stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  // Fade out and slightly translate up as the user scrolls down
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sweeping Wavy Background Matching the Reference Image */}
      <motion.div
        style={{ opacity, y }}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply [mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]"
      >
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover origin-center scale-110 md:scale-100 opacity-20"
          preserveAspectRatio="none"
        >
          <path
            d="M500 0L1440 0V900H0C0 900 240 760 380 720C550 670 560 520 700 480C850 430 840 270 960 210C1080 150 1200 120 1250 80C1320 30 1400 0 1440 0Z"
            fill="url(#grad1)"
          />
          <defs>
            <linearGradient id="grad1" x1="1440" y1="0" x2="0" y2="900" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1a73e8" /> {/* Google Blue */}
              <stop offset="1" stopColor="#34a853" /> {/* Google Green */}
            </linearGradient>
          </defs>
        </svg>

        {/* Soft Glass Blur Overlay to smoothen the shape */}
        <div className="absolute inset-0 backdrop-blur-[60px]" />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 w-fit">
              <TerminalSquare size={16} className="text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Full Stack Developer</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Hi, I&apos;m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Matada Ajjaiah
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Passionate About Building Scalable AI-Driven Solutions That Solve Real-World Problems. Specialized in MERN stack and internal API designing and testing.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-blue-600 transition-all shadow-[0_4px_14px_0_rgba(66,133,244,0.39)] hover:shadow-[0_6px_20px_rgba(66,133,244,0.23)] hover:-translate-y-1"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="/Matada_Ajjaiah_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-gray-700 font-semibold hover:bg-gray-50 transition-all border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <Download size={18} /> Resume
            </a>
          </div>
          <div className="pt-6 mt-4 border-t border-gray-100">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-2 text-xs sm:text-sm font-medium text-gray-600"
            >
              {["React", "Next.js", "Node.js", "Express", "Spring Boot", "MongoDB", "MySQL", "Maven", "Git & GitHub", "Docker", "Jira", "CI/CD", "AWS"].map((tech) => (
                <motion.span
                  key={tech}
                  variants={itemVariants}
                  className="px-3 py-1.5 bg-white border border-gray-200 rounded-md shadow-[0_2px_10px_rgb(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgb(0,0,0,0.08)] hover:-translate-y-0.5 transition-all text-gray-700"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="hidden md:flex justify-center lg:justify-end relative md:-mt-12 lg:-mt-16 lg:ml-8"
        >
          {/* Profile Picture with Google-like Soft Shadows, Perfectly Round */}
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full p-2 bg-white shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgb(0,0,0,0.12)] transition-shadow duration-500 ease-in-out border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
            <Image
              src="/profile.png"
              alt="Matada Ajjaiah"
              fill
              className="object-cover object-center scale-[1.05] rounded-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
