import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Blocks,
  Globe,
  Server,
  Code,
  Bot,
  Brain,
  FileText,
  Image,
  Video,
  LineChart,
  ShoppingCart,
  MessageSquare,
  Smartphone,
  Scissors,
  Terminal,
  Puzzle,
  Coins,
  MapPin,
  Send,
  Layout,
  GraduationCap,
  Youtube,
  StickyNote,
  Pill,
  HeartPulse,
  ScanLine,
} from "lucide-react";

type Category = "Blockchain" | "AI & Automation" | "Full-Stack" | "Mobile" | "Systems & DSA";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  category: Category;
  featured?: boolean;
  icon: typeof Blocks;
  color: string;
};

const projects: Project[] = [
  // ---------- Featured ----------
  {
    title: "Testpilot — AI QA Platform",
    description:
      "Full-stack SaaS that connects to a GitHub repository, generates Playwright end-to-end suites with Gemini, and runs them on cloud browsers with full video session replay. Self-heals tests when UI selectors drift, and triggers on CI/CD webhooks and scheduled cron runs.",
    tech: ["Next.js 15", "TypeScript", "Gemini AI", "Playwright", "Browserbase", "Clerk", "Stripe", "Neon"],
    github: "https://github.com/Ramanand-tomar/Testpilot",
    live: "https://testpilot-silk.vercel.app/",
    category: "AI & Automation",
    featured: true,
    icon: Bot,
    color: "from-primary to-cyan-400",
  },
  {
    title: "PharmaTrack — Pharma Supply Chain",
    description:
      "End-to-end pharmaceutical traceability on Ethereum. Every supply-chain stage transition is recorded immutably on-chain via a Solidity contract, with six role-based dashboards, QR-code public verification, and a real-time batch-recall system that instantly blocks recalled items.",
    tech: ["Solidity", "Sepolia", "Ethers.js v6", "React", "Node/Express", "MongoDB", "Socket.io", "IPFS"],
    github: "https://github.com/Ramanand-tomar/Pharmatrack_Supply_Chain",
    live: "https://pharmatrack-psi.vercel.app/",
    category: "Blockchain",
    featured: true,
    icon: Pill,
    color: "from-cyan-400 to-blue-400",
  },
  {
    title: "DocuForge MCP Server",
    description:
      "An MCP (Model Context Protocol) server published as modular NPM packages, enabling AI agents like Claude and Cursor to autonomously create, edit and export IEEE-format research papers. Full two-column formatting, automated BibTeX citation management, and Puppeteer PDF compilation.",
    tech: ["TypeScript", "MCP", "Express", "SQLite", "Puppeteer", "Gemini API", "pnpm monorepo", "Docker"],
    github: "https://github.com/Ramanand-tomar/Docuforge-mcp-server",
    category: "AI & Automation",
    featured: true,
    icon: FileText,
    color: "from-blue-400 to-indigo-400",
  },
  {
    title: "ArogyaBridge — Decentralized EHR",
    description:
      "A decentralized Electronic Health Record system built on the MERN stack with blockchain and IPFS. Provides tamper-proof medical data sharing with MetaMask login, role-based access for patients, doctors and diagnostic labs, and a Gemini-powered chatbot for record analysis.",
    tech: ["React", "Node.js", "MongoDB", "Solidity", "Web3.js", "IPFS", "Ganache", "Gemini API"],
    github: "https://github.com/Ramanand-tomar/ArogyaBridge-Project",
    category: "Blockchain",
    featured: true,
    icon: HeartPulse,
    color: "from-indigo-400 to-primary",
  },
  {
    title: "Imagify AI — Document & Image Suite",
    description:
      "Production-ready document and image processing suite. Offers PDF merge, split and compress alongside classical DIP techniques (CLAHE, bilateral denoising, Canny/Sobel edge detection, Wiener deblurring) plus AI 2x/4x super-resolution, low-light enhancement, and a camera-to-PDF smart scanner with Tesseract OCR.",
    tech: ["FastAPI", "SQLAlchemy", "OpenCV", "Celery", "Redis", "PostgreSQL", "React Native", "Docker"],
    github: "https://github.com/Ramanand-tomar/Imagify-App",
    category: "AI & Automation",
    featured: true,
    icon: Image,
    color: "from-primary to-cyan-400",
  },
  {
    title: "StakeFlow — Staking & DeFi System",
    description:
      "Token staking and sale dApp spanning four Solidity contracts. Features live real-time reward counters, direct token purchase, transaction history verified against on-chain state, and admin contract management.",
    tech: ["Solidity 0.8.28", "Ethers.js v6", "React", "TypeScript", "TanStack Query", "MetaMask"],
    github: "https://github.com/Ramanand-tomar/Staking-Defi-system",
    live: "https://staking-defi-system.vercel.app/",
    category: "Blockchain",
    featured: true,
    icon: Coins,
    color: "from-cyan-400 to-blue-400",
  },

  // ---------- Blockchain ----------
  {
    title: "Solana Notes DApp",
    description:
      "A decentralized notes application on Solana with no backend at all. An Anchor/Rust on-chain program handles create, edit and delete, with Phantom wallet authentication and immutable titles used as unique record identifiers.",
    tech: ["Rust", "Anchor", "Solana", "Next.js", "TypeScript", "Wallet Adapter"],
    github: "https://github.com/Ramanand-tomar/Solana-Notes-Dapp",
    category: "Blockchain",
    icon: StickyNote,
    color: "from-blue-400 to-indigo-400",
  },
  {
    title: "Blockchain Tourist Management",
    description:
      "Tourist management platform combining Web3 wallet login with Google Maps place search, Supabase persistence and Gemini AI assistance. Includes QR-code generation, PDF export and real-time updates over Socket.io.",
    tech: ["React", "TypeScript", "Ethers.js", "Web3Modal", "Supabase", "Google Maps", "Socket.io"],
    github: "https://github.com/Ramanand-tomar/Blockchain-Based-Tourist-Management-System",
    category: "Blockchain",
    icon: MapPin,
    color: "from-indigo-400 to-primary",
  },

  // ---------- AI & Automation ----------
  {
    title: "Social Copilot",
    description:
      "Unified social media command centre that schedules and publishes to nine networks, generates captions with Gemini, applies ImageKit transforms, and handles keyword and AI-driven auto-replies. Timezone-aware scheduling with a media library and content calendar.",
    tech: ["Next.js 16", "React 19", "Drizzle ORM", "Neon Postgres", "Inngest", "Clerk", "Gemini API"],
    github: "https://github.com/Ramanand-tomar/Social-Copilot",
    category: "AI & Automation",
    icon: Send,
    color: "from-primary to-cyan-400",
  },
  {
    title: "Long-to-Shorts Video Generator",
    description:
      "Turns long-form YouTube videos into short vertical clips. Uses Remotion for programmatic video rendering on AWS Lambda, Inngest for background job orchestration, and S3 plus Cloudinary for media storage.",
    tech: ["Next.js 15", "Remotion", "Inngest", "Drizzle ORM", "Neon Postgres", "AWS S3", "Clerk"],
    github: "https://github.com/Ramanand-tomar/long-to-shorts-video-generation",
    category: "AI & Automation",
    icon: Scissors,
    color: "from-cyan-400 to-blue-400",
  },
  {
    title: "Short-Video Automation Pipeline",
    description:
      "Python pipeline that generates complete short-form videos from a single keyword — AI script generation, stock footage sourcing, subtitle synthesis and background music — then auto-uploads to YouTube, TikTok and Instagram on a schedule.",
    tech: ["Python", "FFmpeg", "ImageMagick", "OpenAI", "Gemini", "Streamlit", "Docker"],
    github: "https://github.com/Ramanand-tomar/Money-turbo-short-automation",
    category: "AI & Automation",
    icon: Video,
    color: "from-blue-400 to-indigo-400",
  },
  {
    title: "YouTube Shorts Automation",
    description:
      "A Chrome extension paired with a Node/Express backend. Sends a YouTube URL from the browser, downloads with yt-dlp, processes via FFmpeg, uploads to Cloudinary, then publishes as YouTube Shorts through the Data API v3 with OAuth 2.0. Instagram Reels support included.",
    tech: ["Chrome Extension", "Node.js", "Express", "yt-dlp", "FFmpeg", "YouTube API", "Cloudinary"],
    github: "https://github.com/Ramanand-tomar/youtube-chrome-extension-automation",
    category: "AI & Automation",
    icon: Youtube,
    color: "from-indigo-400 to-primary",
  },
  {
    title: "NIFTY 50 Stock Analysis Platform",
    description:
      "Machine learning platform over NSE NIFTY 50 data — 49 stocks and roughly 287,000 records. Runs a scikit-learn pipeline of 14+ regression, classification and unsupervised models behind a FastAPI service, with a React Native companion app for technical charts.",
    tech: ["Python", "scikit-learn", "FastAPI", "PostgreSQL", "MongoDB", "React Native", "Redux"],
    github: "https://github.com/Ramanand-tomar/Stock-market-analysis",
    category: "AI & Automation",
    icon: LineChart,
    color: "from-primary to-cyan-400",
  },
  {
    title: "BeyondChats — AI Article Engine",
    description:
      "Full-stack application that scrapes, manages and enhances articles using AI. Supports URL-based and batch blog scraping with Puppeteer and Cheerio, then rewrites content with Gemini 2.5 Flash and presents the original and AI-enhanced versions side by side.",
    tech: ["React", "TypeScript", "Node/Express", "MongoDB", "Puppeteer", "Cheerio", "Gemini 2.5"],
    github: "https://github.com/Ramanand-tomar/BeyondChats-Project",
    category: "AI & Automation",
    icon: Brain,
    color: "from-cyan-400 to-blue-400",
  },

  // ---------- Mobile ----------
  {
    title: "Calorify AI — Health Tracker",
    description:
      "Calorie, workout and hydration tracker for mobile. Logs food with macros from the FatSecret API, records intensity-based cardio and strength burn, and delivers personalised nudges and health tips through Gemini. Progress charts and streak tracking included.",
    tech: ["React Native", "Expo SDK 54", "TypeScript", "Clerk", "Firebase Firestore", "NativeWind", "Gemini"],
    github: "https://github.com/Ramanand-tomar/Ai-cal-tracker",
    category: "Mobile",
    icon: Smartphone,
    color: "from-blue-400 to-indigo-400",
  },
  {
    title: "P2P File Transfer (TCP/UDP)",
    description:
      "Device-to-device file transfer with no cloud involved. Uses raw TCP sockets for a chunked transfer protocol with handshake, UDP broadcast for local device discovery, and QR-code pairing, with multi-file progress tracking.",
    tech: ["React Native", "TCP Sockets", "UDP", "Zustand", "Reanimated", "QR Pairing"],
    github: "https://github.com/Ramanand-tomar/File-Sharing-App-with-TCP-UDP",
    category: "Mobile",
    icon: ScanLine,
    color: "from-indigo-400 to-primary",
  },
  {
    title: "Zendoku — Sudoku Game",
    description:
      "A polished mobile Sudoku puzzle game built with Expo and React Native. Zustand and Immer drive game state, with Reanimated, Moti and Lottie animations, haptics and audio feedback, AdMob monetisation and EAS build pipelines.",
    tech: ["React Native", "Expo 56", "TypeScript", "Zustand", "Reanimated", "AdMob", "Jest"],
    github: "https://github.com/Ramanand-tomar/Zendoku-game",
    category: "Mobile",
    icon: Puzzle,
    color: "from-primary to-cyan-400",
  },

  // ---------- Full-Stack ----------
  {
    title: "Real-Time Chat Application",
    description:
      "A full real-time chat stack split across two repositories — a React 19 and Vite client using socket.io-client, backed by an Express 5 Socket.IO server handling broadcast messaging and connection lifecycle.",
    tech: ["React 19", "Vite", "Socket.IO", "Node.js", "Express 5", "WebSockets"],
    github: "https://github.com/Ramanand-tomar/chat-app-frontend",
    live: "https://chat-app-frontend-eight-rouge.vercel.app/",
    category: "Full-Stack",
    icon: MessageSquare,
    color: "from-cyan-400 to-blue-400",
  },
  {
    title: "Apple Cart — E-Commerce",
    description:
      "An Apple-themed e-commerce storefront built with React 19 and Vite. Product browsing with detail pages, search and category filtering, and full cart management through the Context API.",
    tech: ["React 19", "Vite", "React Router 7", "Context API", "React Toastify"],
    github: "https://github.com/Ramanand-tomar/Apple-cart-with-React",
    live: "https://apple-cart-with-react.vercel.app/",
    category: "Full-Stack",
    icon: ShoppingCart,
    color: "from-blue-400 to-indigo-400",
  },
  {
    title: "BeyondChats Landing Pages",
    description:
      "A set of production marketing landing pages built during my BeyondChats internship, covering the main product, the voice AI product and an animated variant. GSAP scroll animations, Lottie motion graphics and Vitest coverage across eight-section layouts.",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "GSAP", "Framer Motion", "Vitest"],
    github: "https://github.com/Ramanand-tomar/BeyondChat-landing-page",
    category: "Full-Stack",
    icon: Layout,
    color: "from-indigo-400 to-primary",
  },
  {
    title: "Developer Portfolio",
    description:
      "This site. A single-page developer portfolio with an animated role typewriter, scroll-triggered section reveals, filterable project gallery and a fully responsive dark-first design system.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    github: "https://github.com/Ramanand-tomar/Ramanand-Tomar-Portfolia",
    live: "https://ramanand-tomar-portfolia.vercel.app/",
    category: "Full-Stack",
    icon: Globe,
    color: "from-primary to-cyan-400",
  },

  // ---------- Systems & DSA ----------
  {
    title: "HTTP Caching Proxy with LRU",
    description:
      "A caching HTTP proxy server that scales across CPU cores using Node's cluster module. Implements an LRU cache from scratch with a doubly linked list and hash map, and exposes a live dashboard plus REST APIs for cache contents, hit/miss ratio, memory estimates and worker status.",
    tech: ["Node.js", "Cluster", "LRU Cache", "HTTP", "REST API", "Caching"],
    github: "https://github.com/Ramanand-tomar/Multithreaded-Proxy-web-server-with-LRU-cache",
    category: "Systems & DSA",
    icon: Server,
    color: "from-cyan-400 to-blue-400",
  },
  {
    title: "CSES Problem Set Solutions",
    description:
      "An ongoing competitive programming archive of CSES Problem Set solutions in C++, with an auto-generated progress tracker README covering all eleven problem categories. Part of 500+ DSA problems solved across platforms.",
    tech: ["C++", "Algorithms", "Data Structures", "Competitive Programming"],
    github: "https://github.com/Ramanand-tomar/CSES-Solutions",
    category: "Systems & DSA",
    icon: GraduationCap,
    color: "from-blue-400 to-indigo-400",
  },
  {
    title: "Moodle Auto-Login Extension",
    description:
      "A Chrome extension that auto-fills and submits the login form for the MITS Gwalior Moodle portal. Credentials are stored locally in chrome.storage.sync and never leave the browser, with a popup for managing them.",
    tech: ["JavaScript", "Chrome APIs", "Manifest V3", "chrome.storage", "Content Scripts"],
    github: "https://github.com/Ramanand-tomar/Moodle-Chrome-extension",
    category: "Systems & DSA",
    icon: Code,
    color: "from-indigo-400 to-primary",
  },
  {
    title: "Socket.IO Broadcast Chat",
    description:
      "A minimal real-time broadcast chat built to explore WebSockets from the ground up. Node.js and Express serve a responsive static client, with Socket.IO relaying messages to every connected participant.",
    tech: ["Node.js", "Express", "Socket.IO", "WebSockets", "HTML/CSS"],
    github: "https://github.com/Ramanand-tomar/basic-chatting-app",
    live: "https://basic-chatting-app.vercel.app/",
    category: "Systems & DSA",
    icon: Terminal,
    color: "from-primary to-cyan-400",
  },
];

const categories: Array<"All" | Category> = [
  "All",
  "Blockchain",
  "AI & Automation",
  "Full-Stack",
  "Mobile",
  "Systems & DSA",
];

const countFor = (cat: "All" | Category) =>
  cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<"All" | Category>("All");

  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">
            My Recent Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {projects.length} projects across blockchain, applied AI, full-stack, mobile and systems
            engineering — from on-chain supply chains to self-healing test automation.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary glow"
                    : "bg-secondary/50 text-muted-foreground border-border hover:text-foreground hover:border-primary/50"
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {cat}
                <span
                  className={`ml-2 font-mono text-xs ${
                    isActive ? "text-primary-foreground/70" : "text-muted-foreground/60"
                  }`}
                >
                  {countFor(cat)}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
                className="project-card group flex flex-col"
              >
                {/* Header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                <div className="p-6 space-y-4 flex flex-col flex-1">
                  {/* Icon & Links */}
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} p-3 shrink-0`}>
                      <project.icon className="w-full h-full text-background" />
                    </div>
                    <div className="flex items-center gap-1">
                      {project.featured && (
                        <span className="px-2.5 py-1 mr-1 text-[10px] font-mono uppercase tracking-wider rounded-full bg-primary/15 text-primary border border-primary/30">
                          Featured
                        </span>
                      )}
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code on GitHub`}
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Category */}
                  <span className="text-xs font-mono uppercase tracking-wider text-primary/70">
                    {project.category}
                  </span>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
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

                  {/* Links */}
                  <div className="flex items-center gap-5 pt-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      View Code <Github size={14} />
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        Live Demo <ExternalLink size={14} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://github.com/Ramanand-tomar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-secondary/50 text-foreground font-semibold hover:bg-secondary hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Repositories on GitHub
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
