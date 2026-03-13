"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={32} />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl glow-border">
                <h3 className="text-xl font-bold text-primary">Bachelor of Technology, Computer Science</h3>
                <h4 className="text-lg font-medium text-foreground/80 mb-2">PES University, Main Campus, Bangalore</h4>
                <p className="text-sm font-semibold text-muted-foreground">2025 - Present</p>
              </div>
              
              <div className="glass p-6 rounded-2xl glow-border">
                <h3 className="text-xl font-bold text-primary">Diploma in Computer Science and Engineering</h3>
                <h4 className="text-lg font-medium text-foreground/80 mb-2">Government Polytechnic, Bellary</h4>
                <p className="text-sm font-semibold text-muted-foreground mb-2">2022 - 2025</p>
                <p className="text-sm font-bold bg-primary/20 text-primary w-fit px-3 py-1 rounded-full">9.67 CGPA</p>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="text-secondary" size={32} />
              <h2 className="text-3xl font-bold">Achievements & Extras</h2>
            </div>

            <div className="space-y-4">
              <div className="glass p-6 rounded-2xl glow-border">
                <h3 className="font-bold flex items-center gap-2 mb-3"><Award size={18} className="text-secondary"/> Hackathons & Ranks</h3>
                <ul className="space-y-2 text-sm text-foreground/80 list-disc list-inside">
                  <li>Twinning Program by SJ Polytechnic, <span className="text-black font-extrabold">Ranked Top 3</span>.</li>
                  <li>D-CET <span className="text-black font-extrabold">Rank 273</span> in Karnataka.</li>
                  <li><span className="text-black font-extrabold">Shortlisted</span> at the highly competitive HACK-O-WEEN (24-hr AIML Hackathon, PES University).</li>
                </ul>
              </div>

              <div className="glass p-6 rounded-2xl glow-border grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-3 text-secondary">Certifications</h3>
                  <ul className="space-y-1 text-sm text-foreground hover:[&_a]:text-primary hover:[&_a]:underline [&_a]:transition-colors">
                    <li><a href="https://drive.google.com/file/d/1beYb2t3iaS0vqRjlbdpEcScyM30Gi8jn/view?pli=1" target="_blank" rel="noopener noreferrer">AWS Security Practices</a></li>
                    <li><a href="https://drive.google.com/file/d/1bnIVFBB0omRJpNMAeSG24eiaEakpXdvA/view" target="_blank" rel="noopener noreferrer">LibreOffice by IITB</a></li>
                    <li><a href="https://drive.google.com/file/d/1cvqt2YJRySfgA8K-qDfeiRwerNjnk-5g/view" target="_blank" rel="noopener noreferrer">Spring REST by Infosys</a></li>
                    <li><a href="https://drive.google.com/file/d/1c5YXdh0aXVmUPbIA5cv5IERfVcX-FOzO/view" target="_blank" rel="noopener noreferrer">TIME MGMT by Infosys</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-secondary">Languages</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>English (Professional)</li>
                    <li>Kannada (Native)</li>
                    <li>Hindi & Telugu</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
