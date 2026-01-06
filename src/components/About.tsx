import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Blocks, Database, Trophy, Sparkles, Zap, Globe, Award, BookOpen, Rocket } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "10+", icon: Code2 },
  { label: "Technologies", value: "20+", icon: Blocks },
  { label: "GitHub Repos", value: "20+", icon: Database },
  { label: "DSA Problems", value: "650+", icon: Trophy },
];

const highlights = [
  { icon: Rocket, text: "Blockchain & Web3", color: "text-primary" },
  { icon: Globe, text: "Full Stack Development", color: "text-cyan-400" },
  { icon: Zap, text: "Microservices Architecture", color: "text-yellow-400" },
  { icon: Award, text: "Competitive Programmer", color: "text-emerald-400" },
];

const journeyItems = [
  { year: "2024", title: "Blockchain Developer", description: "Building dApps on Ethereum & Solana" },
  { year: "2023", title: "Full Stack Developer", description: "Mastered MERN Stack & System Design" },
  { year: "2022", title: "DSA Enthusiast", description: "650+ problems solved on LeetCode & GFG" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-widest"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            Get to know me
            <Sparkles className="w-4 h-4" />
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gradient">
            About Me
          </h2>
        </motion.div>

        {/* Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50"
            >
              <item.icon className={`w-4 h-4 ${item.color}`} />
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 space-y-6 border border-border/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">My Story</h3>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate <span className="text-foreground font-semibold">Blockchain Developer</span> and{" "}
                <span className="text-foreground font-semibold">Full Stack Web Developer</span> with expertise in
                building decentralized applications and scalable web solutions.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently focused on <span className="text-primary font-medium">Ethereum</span>,{" "}
                <span className="text-cyan-400 font-medium">Solana</span>, and the{" "}
                <span className="text-blue-400 font-medium">MERN Stack</span>. I specialize in{" "}
                <span className="text-foreground">Microservices Architecture</span>,{" "}
                <span className="text-foreground">System Design</span>, and building production-ready applications.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                My journey includes building <span className="text-foreground font-medium">decentralized health record systems</span>,{" "}
                <span className="text-foreground font-medium">tourist management platforms</span>, and various
                blockchain-based solutions. I'm also an active <span className="text-primary font-medium">Competitive Programmer</span> with{" "}
                <span className="text-emerald-400 font-medium">650+ DSA problems</span> solved across LeetCode & GeeksforGeeks.
              </p>
            </div>

            {/* Traits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {["Problem Solver", "Team Player", "Quick Learner", "Detail Oriented", "Open Source Contributor"].map((trait, index) => (
                <motion.span
                  key={trait}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary/10 to-cyan-400/10 text-primary border border-primary/20 hover:border-primary/40 transition-colors cursor-default"
                >
                  {trait}
                </motion.span>
              ))}
            </motion.div>

            
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="glass rounded-2xl p-6 text-center group cursor-pointer border border-border/30 hover:border-primary/30 transition-all duration-300"
                >
                  <motion.div 
                    className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-400/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-cyan-400/20 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-gradient mb-2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* What I Do Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="glass rounded-2xl p-6 border border-border/30"
            >
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                What I Do
              </h4>
              <div className="space-y-3">
                {[
                  { label: "Build Smart Contracts", desc: "Ethereum, Solana, Anchor" },
                  { label: "Full Stack Applications", desc: "MERN, Next.js, PostgreSQL" },
                  { label: "System Architecture", desc: "Microservices, Kafka, RabbitMQ" },
                  { label: "DevOps & Deployment", desc: "Docker, CI/CD, AWS" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <span className="font-medium text-foreground">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
