import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Trophy, Flame, Target } from "lucide-react";

const skillCategories = [
  {
    title: "Blockchain & Web3",
    color: "from-primary to-cyan-400",
    skills: [
      { name: "Ethereum", level: 90 },
      { name: "Solidity", level: 85 },
      { name: "Anchor Framework", level: 80 },
      { name: "Hardhat", level: 80 },
      { name: "Truffle", level: 75 },
      { name: "Web3.js", level: 85 },
      { name: "ether.js", level: 90 },
      { name: "Solana", level: 70 },
      { name: "IPFS", level: 85 },
    ],
  },
  {
    title: "Frontend & Mobile",
    color: "from-cyan-400 to-blue-400",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "React Native (Expo)", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Shadcn UI", level: 80 },
     
    ],
  },
  {
    title: "Backend & Databases",
    color: "from-blue-400 to-indigo-400",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "JWT", level: 75 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    title: "Languages",
    color: "from-indigo-400 to-violet-400",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "C++", level: 85 },
      { name: "Rust", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "System Design & Architecture",
    color: "from-violet-400 to-purple-400",
    skills: [
      { name: "Microservices", level: 80 },
      { name: "System Design", level: 85 },
      { name: "Apache Kafka", level: 75 },
      { name: "RabbitMQ", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "from-purple-400 to-primary",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Linux", level: 80 },
      { name: "Grafana", level: 95 },
    ],
  },
];

const competitiveStats = [
  {
    platform: "LeetCode",
    icon: Code2,
    stats: "400+ Problems",
    description: "Data Structures & Algorithms",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-500/10",
  },
  {
    platform: "GeeksforGeeks",
    icon: Trophy,
    stats: "250+ DSA",
    description: "Problem Solving Expert",
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-500/10",
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-radial-gradient" />
      
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">
            What I work with
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gradient">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Competitive Programming Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Flame className="w-6 h-6 text-orange-400" />
            <h3 className="text-2xl font-bold text-center text-foreground">
              Competitive Programming
            </h3>
            <Target className="w-6 h-6 text-primary" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {competitiveStats.map((item, index) => (
              <motion.div
                key={item.platform}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative overflow-hidden rounded-2xl border border-border/50 ${item.bgColor} backdrop-blur-sm p-6`}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-10" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color}`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{item.platform}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.stats}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Questions Solved</p>
                </div>
                
                {/* Decorative elements */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20"
                  style={{ background: `linear-gradient(135deg, var(--primary), transparent)` }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="skill-card group"
            >
              <h3 className={`text-lg font-bold mb-5 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.03 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary/50 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.2, 
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.03,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
