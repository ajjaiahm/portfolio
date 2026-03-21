"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "HMS VitalCure",
    subtitle: "Hospital Management System",
    description:
      "Developed a comprehensive Hospital Management System to digitize patient records, streamline appointments, and improve administrative workflows, ensuring a seamless experience for both staff and patients.",
    tools: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/NTXSTEALTH/Project-repo",
  },
  {
    title: "CyFlowAI",
    subtitle: "Cyber Flow AI model trained to intelligently analyze data flow",
    description:
      "Engineered an offline DeepSearch AI model trained to perform intelligent data discovery, deep pattern recognition, and anomaly detection across large unstructured datasets using advanced deep learning techniques.",
    tools: ["Node", "React (Vite)", "Google Gemini API", "NLP Pipelines", "Postman"],
    github: "https://github.com/AbbasMSadikot/Hack-O-Ween",
    demo: "https://vimeo.com/1151299382?fl=ip&fe=ec",
  },
  {
    title: "Karnaugh Map Solver",
    subtitle: "An Automated Karnaugh Map solver",
    description:
      "Developed an automated Karnaugh Map (K-Map) solver that performs Boolean minimization using algorithmic grouping, systematic adjacency analysis and combinational logic design.",
    tools: ["React", "JavaScript (ES6+)", "Algorithms", "Modular State-Driven UI"],
    demo: "https://ajjaiahm.github.io/k-map/",
  },
  {
    title: "eCOM",
    subtitle: "Multi-Model Commerce Platform (Spring Boot Application)",
    description:
      "Multi-vendor commerce platform supporting C2C, B2B, and C2B workflows, enabling individuals and small producers to sell home-made and locally produced goods directly to consumers.",
    tools: ["React", "Spring Boot", "Java", "MongoDB Atlas", "REST APIs", "Maven"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-secondary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my best work in AI, Algorithms, and Full-Stack Commerce.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, idx) => {
            const googleColors = [
              "bg-blue-500/10 border-blue-200/50 hover:bg-blue-500/15",    // Blue
              "bg-red-500/10 border-red-200/50 hover:bg-red-500/15",      // Red
              "bg-yellow-500/10 border-yellow-200/50 hover:bg-yellow-500/15", // Yellow
              "bg-green-500/10 border-green-200/50 hover:bg-green-500/15",  // Green
            ];
            const cardStyle = googleColors[idx % googleColors.length];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={`p-6 rounded-3xl flex flex-col group relative overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border backdrop-blur-sm transition-all duration-500 h-full ${cardStyle}`}
              >
              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] group-hover:bg-primary/10 transition-all duration-500" />
              
              <div className="p-3 bg-blue-50 text-primary rounded-2xl w-fit mb-6">
                <Terminal size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-xs font-medium text-primary mb-3">{project.subtitle}</p>
              
              <p className="text-gray-600 text-sm flex-1 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-6 z-10">
                {project.tools.map((tool, i) => (
                  <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-700">
                    {tool}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto flex items-center gap-4 z-10">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-primary mb-1 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-primary mb-1 transition-colors">
                    <Github size={16} /> Source Code
                  </a>
                )}
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
