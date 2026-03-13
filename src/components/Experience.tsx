"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "ARCHLYNC",
    role: "Full Stack Developer (Team lead)",
    date: "Oct, 2025",
    description: [
      "Led my team in a 24-hour hackathon to build ArchLync, a cyber AI assistant, delivering a complete and robust application under tight deadlines through effective leadership with rapid decision-making, and executions.",
      "Collaborated closely with teammates responsible for testing and documentation, enabling continuous delivery, smooth progress tracking, and efficient teamwork."
    ]
  },
  {
    company: "RALA INFOTECH PVT LTD | Remote",
    role: "VitalCure (Scrum Master / Backend)",
    date: "Dec, 2024 - Apr, 2025",
    description: [
      "Led fully fledged Backend part of an accessible Hospital Management System, transforming healthcare workflows through secure, scalable, and user-centric design.",
      "Built robust backend services, isolated record maintenance, optimized database models, and developed responsive Business logic interfaces with real-time features and job scheduling.",
      "Engineered authentication, authorization, and data persistence layers using JWT-based access control and schema-driven MongoDB models."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white/5">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start">
                <div className="md:col-span-1 mb-4 md:mb-0 md:text-right pt-1 hidden md:block">
                  <span className="text-sm font-semibold text-primary/80">{exp.date}</span>
                </div>
                
                <div className="md:col-span-4 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-10 md:-left-[21px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />
                  {/* Timeline line */}
                  <div className="absolute -left-8 md:-left-[13px] top-4 bottom-[-3rem] w-px bg-white/10" />

                  <div className="glass p-6 rounded-2xl glow-border">
                    <div className="flex items-center gap-3 mb-2 text-primary md:hidden">
                      <Briefcase size={18} />
                      <span className="text-sm font-semibold">{exp.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <h4 className="text-lg text-muted-foreground mb-4">{exp.company}</h4>
                    <ul className="space-y-2 text-sm text-foreground/80 list-disc list-inside">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="leading-relaxed">{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
