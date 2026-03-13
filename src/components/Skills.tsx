"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layers } from 'lucide-react';

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A versatile toolkit spanning modern frontend frameworks, robust backend systems, and AI-driven logic.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* MERN Stack Card */}
          <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass p-8 rounded-2xl flex flex-col gap-4 glow-border h-full">
            <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary">
              <Code size={28} />
            </div>
            <h3 className="text-2xl font-semibold">MERN Stack</h3>
            <p className="text-muted-foreground text-sm flex-1">
              Building highly interactive, responsive interfaces with React (Vite/Next.js). Strong backend services using Node.js & Express with MongoDB.
            </p>
          </motion.div>

          {/* Spring Boot Card */}
          <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass p-8 rounded-2xl flex flex-col gap-4 glow-border h-full">
            <div className="p-3 bg-secondary/10 rounded-xl w-fit text-secondary">
              <Server size={28} />
            </div>
            <h3 className="text-2xl font-semibold">Spring Boot</h3>
            <p className="text-muted-foreground text-sm flex-1">
              Developing scalable, enterprise-grade backend architectures, robust REST APIs, and microservices supporting complex workflows.
            </p>
          </motion.div>

          {/* Database & DevOps Card */}
          <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass p-8 rounded-2xl flex flex-col gap-4 glow-border h-full">
            <div className="p-3 bg-accent/20 rounded-xl w-fit text-foreground">
              <Database size={28} />
            </div>
            <h3 className="text-2xl font-semibold">Data & DevOps</h3>
            <p className="text-muted-foreground text-sm flex-1">
              MySQL, MongoDB Atlas, Docker containerization, Maven, Linux environments, and fundamental CI/CD pipelines.
            </p>
          </motion.div>

          {/* AI & Logic Card */}
          <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass p-8 rounded-2xl flex flex-col gap-4 glow-border h-full">
            <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary">
              <Layers size={28} />
            </div>
            <h3 className="text-2xl font-semibold">AI Integration</h3>
            <p className="text-muted-foreground text-sm flex-1">
              Implementing Agentic AI, Generative AI APIs (Gemini), NLP Pipelines, and algorithmic problem-solving capabilities.
            </p>
          </motion.div>
        </div>

        {/* Detailed Skills Bar */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {["Python", "JavaScript (ES6+)", "Java", "Shell Scripting", "SQL", "React.js", "Node.js", "Spring Boot", "Agentic AI", "Docker", "Git/GitHub"].map((skill, i) => (
            <motion.span
              key={i}
              variants={item}
              className="px-4 py-2 border border-white/10 rounded-full text-sm font-medium bg-background/50 backdrop-blur-sm text-foreground hover:border-primary/50 hover:text-primary cursor-default transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;