"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="relative pt-24 pb-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-12 rounded-3xl text-center glow-border"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Currently looking for new opportunities. Whether you have a question, a project in mind, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <a
            href="mailto:aajjaiahm@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all text-lg mb-12 shadow-[0_0_30px_-5px_hsl(var(--primary))]"
          >
            <Mail size={20} /> Say Hello
          </a>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <a href="mailto:aajjaiahm@gmail.com" className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                <Mail size={24} />
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>
            
            <a href="https://github.com/ajjaiahm" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-foreground group-hover:text-background transition-colors">
                <Github size={24} />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            
            <a href="https://www.linkedin.com/in/matada-ajjaiah-765b8b32b" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                <Linkedin size={24} />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            
            <a href="tel:+918762473926" className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-secondary/20 group-hover:text-secondary transition-colors">
                <Phone size={24} />
              </div>
              <span className="text-sm font-medium">Phone</span>
            </a>
          </div>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center flex flex-col items-center">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Designed & Built by Matada Ajjaiah
          </p>
          <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground/60">
            <span>Next.js</span> • <span>Tailwind CSS</span> • <span>Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
