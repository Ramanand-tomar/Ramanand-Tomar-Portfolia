import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const roles = [
  { text: "Blockchain Developer", color: "text-primary" },
  { text: "MERN Stack Developer", color: "text-cyan-400" },
  { text: "Full Stack Developer", color: "text-blue-400" },
  { text: "DSA Enthusiast", color: "text-emerald-400" },
  { text: "System Design Expert", color: "text-violet-400" },
  { text: "Open Source Contributor", color: "text-orange-400" },
];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole].text;
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    if (!isDeleting && displayText === role) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? role.substring(0, displayText.length - 1)
          : role.substring(0, displayText.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-radial-gradient" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full text-sm font-mono text-primary border border-primary/30 bg-primary/5">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Hi, I'm{" "}
              <span className="text-gradient glow-text">Ramanand Tomar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 font-light h-10 flex items-center justify-center lg:justify-start"
            >
              <span className="text-muted-foreground mr-2">I'm a</span>
              <span className={`${roles[currentRole].color} font-semibold`}>
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="ml-0.5 inline-block w-0.5 h-7 bg-primary"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              I'm passionate about developing{" "}
              <span className="text-foreground">decentralized applications (dApps)</span> on{" "}
              <span className="text-foreground">Ethereum Blockchain</span> and building scalable
              web apps. I turn ideas into reality through code & curiosity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 glow"
                whileHover={{ scale: 1.02, boxShadow: "0 0 50px hsl(192, 91%, 56%, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ExternalLink size={18} />
              </motion.a>
              <motion.a
                href="/Ramanand_Tomar_Resume.pdf"
                download="Ramanand_Tomar_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border bg-secondary/50 text-foreground font-semibold hover:bg-secondary hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume
                <Download size={18} />
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-cyan-400 to-blue-400 blur-2xl opacity-50 animate-pulse" />
              
              {/* Image container */}
              <motion.div
                className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-primary via-cyan-400 to-blue-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-background p-2">
                  <img
                    src={profileAvatar}
                    alt="Ramanand Tomar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-lg glass text-sm font-mono text-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                ⚛️ React
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg glass text-sm font-mono text-cyan-400"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                ⛓️ Blockchain
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 px-4 py-2 rounded-lg glass text-sm font-mono text-blue-400"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
              >
                🚀 MERN
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
