import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Blocks, Globe, Server, Code } from "lucide-react";

const projects = [
  {
    title: "ArogyaBridge Project",
    description: "A decentralized Electronic Health Record (EHR) system built with MERN stack, Blockchain, and IPFS. Features secure, tamper-proof medical data sharing with MetaMask login and role-based access.",
    tech: ["React", "Node.js", "Ethereum", "IPFS", "Solidity", "MetaMask"],
    github: "https://github.com/Ramanand-tomar/ArogyaBridge-Project",
    icon: Blocks,
    color: "from-primary to-cyan-400",
  },
  {
    title: "Blockchain Tourist Management",
    description: "A comprehensive tourist management system leveraging blockchain technology for secure bookings, transparent transactions, and decentralized identity verification.",
    tech: ["TypeScript", "React", "Ethereum", "Smart Contracts", "MongoDB"],
    github: "https://github.com/Ramanand-tomar/Blockchain-Based-Tourist-Management-System",
    icon: Globe,
    color: "from-cyan-400 to-blue-400",
  },
  {
    title: "Solana Notes DApp",
    description: "A decentralized notes application built on Solana blockchain. Create, store, and manage notes with the security and transparency of blockchain technology.",
    tech: ["TypeScript", "React", "Solana", "Rust", "Anchor"],
    github: "https://github.com/Ramanand-tomar/Solana-Notes-Dapp",
    icon: Code,
    color: "from-blue-400 to-indigo-400",
  },
  {
    title: "Multithreaded Proxy Server",
    description: "A high-performance multithreaded proxy web server with LRU cache implementation. Optimized for concurrent connections and efficient resource management.",
    tech: ["JavaScript", "Node.js", "LRU Cache", "Multithreading"],
    github: "https://github.com/Ramanand-tomar/Multithreaded-Proxy-web-server-with-LRU-cache",
    icon: Server,
    color: "from-indigo-400 to-primary",
  },
  {
    title: "BeyondChats Project",
    description: "An advanced chat application with modern UI and real-time features. Built with TypeScript for type-safe development and optimal user experience.",
    tech: ["TypeScript", "React", "Real-time", "WebSockets"],
    github: "https://github.com/Ramanand-tomar/BeyondChats-Project",
    icon: Globe,
    color: "from-primary to-cyan-400",
  },
  {
    title: "Moodle Chrome Extension",
    description: "A productivity-enhancing Chrome extension for Moodle platform users. Streamlines workflow and adds useful features for better learning experience.",
    tech: ["HTML", "CSS", "JavaScript", "Chrome APIs"],
    github: "https://github.com/Ramanand-tomar/Moodle-Chrome-extension",
    icon: Code,
    color: "from-cyan-400 to-blue-400",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">
            My Recent Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gradient">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card group"
            >
              {/* Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6 space-y-4">
                {/* Icon & Title */}
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} p-3`}>
                    <project.icon className="w-full h-full text-background" />
                  </div>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-cyan-400 transition-colors pt-2"
                  whileHover={{ x: 5 }}
                >
                  View Project <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Ramanand-tomar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-secondary/50 text-foreground font-semibold hover:bg-secondary hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects on GitHub
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
