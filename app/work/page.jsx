"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Lock,
  Smartphone,
  Sparkles,
  CheckCircle2,
  HeartPulse,
  BookOpen
} from "lucide-react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiPython,
  SiBootstrap,
  SiReactquery,
  SiRedux,
  SiMongodb,
  SiSqlite,
  SiFramer
} from "react-icons/si";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "Frontend",
    type: "Enterprise / Client",
    badgeType: "enterprise",
    title: "TrialLattice",
    tagline: "Clinical Trial Sponsor & Site Matching Marketplace",
    desc: "A high-performance B2B marketplace platform connecting clinical trial sponsors with research sites to streamline trial-matching, featuring real-time dashboards and interactive microsites.",
    highlights: [
      "B2B Trial & Site Matching Engine",
      "Interactive Analytics Dashboards",
      "Responsive Site Microsites"
    ],
    stack: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "TanStack Query", icon: <SiReactquery className="text-[#FF4154]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> }
    ],
    visualType: "health-b2b",
    image: "",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Mobile App",
    type: "Production Mobile App",
    badgeType: "mobile",
    title: "Inductive ClinDatasphere",
    tagline: "Clinical EDC & Patient Management Mobile System",
    desc: "A cross-platform mobile application enabling healthcare professionals to perform real-time clinical research data entry, manage trial subjects, and automate site invoice generation.",
    highlights: [
      "Real-time Clinical EDC Data Entry",
      "Doctor & Subject Management",
      "Automated Site Invoice Generation"
    ],
    stack: [
      { name: "React Native", icon: <HiMiniDevicePhoneMobile className="text-[#61DAFB]" /> },
      { name: "React Native Paper", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" /> }
    ],
    visualType: "mobile-edc",
    image: "",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Full Stack",
    type: "Live Project",
    badgeType: "live",
    title: "Tales For Nights",
    tagline: "Modern Literary & Poetry Platform",
    desc: "A curated digital space celebrating romantic literature, deep poetry, and poignant storytelling, wrapped in an immersive dark theme with serverless cloud architecture.",
    highlights: [
      "Serverless Content Architecture",
      "Responsive Immersive Reader UI",
      "MongoDB Cloud Storage"
    ],
    stack: [
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> }
    ],
    visualType: "poetry",
    image: "",
    live: "https://tales-for-nights.vercel.app/",
    github: "https://github.com/NaveenBandaru29/tales-for-nights",
  },
  {
    num: "04",
    category: "Full Stack",
    type: "Open Source / ML",
    badgeType: "opensource",
    title: "Emotion-Based Music Recommender",
    tagline: "Computer Vision & Mood Playlist Generator",
    desc: "An intelligent multimedia system that leverages real-time facial recognition and emotion detection algorithms to curate and play contextual music playlists tailored to user moods.",
    highlights: [
      "Facial Emotion Recognition Pipeline",
      "Dynamic Mood-to-Track Mapping",
      "Django MVC Backend Architecture"
    ],
    stack: [
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
      { name: "SQLite", icon: <SiSqlite className="text-[#003B57]" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3 className="text-[#1572B6]" /> }
    ],
    visualType: "image",
    image: "/assets/work/thumb-1.png",
    live: "",
    github: "https://github.com/NaveenBandaru29/django-emrs",
  },
  {
    num: "05",
    category: "Frontend",
    type: "Live Project",
    badgeType: "live",
    title: "Developer Portfolio",
    tagline: "Interactive Portfolio & Design System",
    desc: "A sleek, responsive portfolio built with Next.js App Router, Tailwind CSS, Radix UI primitives, and Framer Motion animations to showcase full-stack projects, experience, and skills.",
    highlights: [
      "Custom Micro-Interactions & Animations",
      "Accessible Radix UI Components",
      "Responsive Dark Mode Glassmorphism"
    ],
    stack: [
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-[#0055FF]" /> }
    ],
    visualType: "image",
    image: "/assets/work/thumb-3.png",
    live: "/",
    github: "https://github.com/NaveenBandaru29/naveen-portfolio",
  },
];

const categories = ["All", "Frontend", "Mobile App", "Full Stack"];

// Helper component for project visual hero
const ProjectVisual = ({ project }) => {
  if (project.image) {
    return (
      <div className="relative w-full h-[200px] sm:h-[220px] bg-[#1a1a20] rounded-xl overflow-hidden group/img border border-white/5">
        {/* Browser Top Bar Mock */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-[#16161a]/90 backdrop-blur-sm z-20 flex items-center px-3 gap-1.5 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
          <span className="ml-2 text-[11px] text-white/40 truncate font-mono">{project.title}</span>
        </div>
        {/* Image with zoom effect */}
        <div className="relative w-full h-full pt-7">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#27272c] via-transparent to-transparent opacity-80 pointer-events-none"></div>
        </div>
      </div>
    );
  }

  // Custom visual banners for projects without screenshots
  if (project.visualType === "health-b2b") {
    return (
      <div className="relative w-full h-[200px] sm:h-[220px] bg-gradient-to-br from-[#0c2238] via-[#151c2e] to-[#1c1c22] rounded-xl p-5 overflow-hidden flex flex-col justify-between border border-accent/20">
        {/* Background glow & grid */}
        <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-accent/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 right-0 left-0 h-full bg-[radial-gradient(#0099ff_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>

        {/* Top bar with system status */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium">
            <HeartPulse size={14} className="animate-pulse" />
            <span>Clinical B2B Platform</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Active EDC</span>
          </div>
        </div>

        {/* Center UI snippet graphic */}
        <div className="relative z-10 grid grid-cols-3 gap-1.5 sm:gap-2 my-auto">
          <div className="bg-white/5 border border-white/10 rounded-lg p-2 sm:p-2.5 backdrop-blur-sm">
            <p className="text-[9px] sm:text-[10px] text-white/50 uppercase truncate">Trial Match</p>
            <p className="text-xs sm:text-sm font-semibold text-accent truncate">99.4%</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-2 sm:p-2.5 backdrop-blur-sm">
            <p className="text-[9px] sm:text-[10px] text-white/50 uppercase truncate">Sponsors</p>
            <p className="text-xs sm:text-sm font-semibold text-white truncate">120+ Active</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-2 sm:p-2.5 backdrop-blur-sm">
            <p className="text-[9px] sm:text-[10px] text-white/50 uppercase truncate">Latency</p>
            <p className="text-xs sm:text-sm font-semibold text-emerald-400 truncate">&lt; 150ms</p>
          </div>
        </div>

        {/* Bottom meta tag */}
        <div className="relative z-10 flex items-center justify-between text-xs text-white/60">
          <span className="font-mono text-accent">#enterprise-dashboard</span>
          <span className="text-[11px] text-white/40">TanStack Query Cache</span>
        </div>
      </div>
    );
  }

  if (project.visualType === "mobile-edc") {
    return (
      <div className="relative w-full h-[200px] sm:h-[220px] bg-gradient-to-br from-[#1b1e36] via-[#171a2b] to-[#1c1c22] rounded-xl p-5 overflow-hidden flex flex-col justify-between border border-[#764ABC]/30">
        {/* Glow */}
        <div className="absolute -right-8 -top-8 w-40 h-40 bg-[#764ABC]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#764ABC_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>

        {/* Top row */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#764ABC]/15 border border-[#764ABC]/40 text-[#c8a4ff] text-xs font-medium">
            <Smartphone size={14} />
            <span>React Native Mobile EDC</span>
          </div>
          <span className="text-xs text-white/40 font-mono">iOS & Android</span>
        </div>

        {/* Mock Mobile Viewport Preview */}
        <div className="relative z-10 flex items-center justify-center gap-3 my-auto">
          <div className="w-full max-w-[260px] bg-black/40 border border-white/15 rounded-lg p-2.5 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-white/90">Doctor Patient Sync</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">ONLINE</span>
            </div>
            <div className="space-y-1.5">
              <div className="h-2 bg-white/10 rounded w-5/6"></div>
              <div className="h-2 bg-accent/30 rounded w-3/4"></div>
            </div>
          </div>
        </div>

        {/* Bottom meta tag */}
        <div className="relative z-10 flex items-center justify-between text-xs text-white/60">
          <span className="font-mono text-[#c8a4ff]">#clinical-research-app</span>
          <span className="text-[11px] text-white/40">Redux Toolkit State</span>
        </div>
      </div>
    );
  }

  if (project.visualType === "poetry") {
    return (
      <div className="relative w-full h-[200px] sm:h-[220px] bg-gradient-to-br from-[#24132e] via-[#1c1829] to-[#1c1c22] rounded-xl p-5 overflow-hidden flex flex-col justify-between border border-pink-500/20">
        {/* Glow */}
        <div className="absolute -left-6 -bottom-6 w-40 h-40 bg-pink-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:18px_18px] opacity-10 pointer-events-none"></div>

        {/* Top row */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-medium">
            <BookOpen size={14} />
            <span>Digital Stories & Verses</span>
          </div>
          <span className="text-xs text-pink-300/60 font-mono">Live on Vercel</span>
        </div>

        {/* Typography quote widget */}
        <div className="relative z-10 my-auto text-center px-4">
          <p className="text-sm font-serif italic text-white/80 leading-relaxed">
            "Sweet words to win her heart, bitter truths to speak your mind..."
          </p>
        </div>

        {/* Bottom meta */}
        <div className="relative z-10 flex items-center justify-between text-xs text-white/60">
          <span className="font-mono text-pink-300">#nextjs-mongodb</span>
          <span className="text-[11px] text-white/40">Tales For Nights</span>
        </div>
      </div>
    );
  }

  return null;
};

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-8 pb-16"
    >
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-accent text-sm uppercase tracking-widest font-mono mb-3">
            <Sparkles size={16} />
            <span>Selected Works</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Featured <span className="text-accent">Projects</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
            A showcase of production enterprise systems, cross-platform mobile apps, and creative full-stack platforms.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-2 cursor-pointer ${isActive
                  ? "bg-accent text-primary font-semibold shadow-lg shadow-accent/20"
                  : "bg-[#27272c] text-white/70 hover:text-white hover:bg-[#323238] border border-white/5"
                  }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive
                    ? "bg-primary/20 text-primary font-bold"
                    : "bg-white/10 text-white/50"
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.num}
                className="group bg-[#27272c] border border-white/10 hover:border-accent/40 rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
              >
                {/* Visual Area (Image or Custom Domain Graphics) */}
                <div className="mb-6">
                  <ProjectVisual project={project} />
                </div>

                {/* Card Header & Badges */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 gap-2">
                      {/* Outline Number */}
                      <span className="text-3xl font-extrabold text-transparent text-outline group-hover:text-accent transition-colors duration-300 font-mono">
                        {project.num}
                      </span>

                      {/* Badges */}
                      <div className="flex items-center gap-2 flex-wrap justify-end">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-white/80">
                          {project.category}
                        </span>

                        {project.badgeType === "enterprise" && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300 flex items-center gap-1">
                            <Lock size={10} />
                            <span>Enterprise</span>
                          </span>
                        )}

                        {project.badgeType === "mobile" && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center gap-1">
                            <Smartphone size={10} />
                            <span>Mobile App</span>
                          </span>
                        )}

                        {project.badgeType === "live" && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>Live</span>
                          </span>
                        )}

                        {project.badgeType === "opensource" && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center gap-1">
                            <FaGithub size={11} />
                            <span>Open Source</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-1">
                      {project.title}
                    </h2>
                    <p className="text-xs font-mono text-accent/80 mb-3">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {project.desc}
                    </p>

                    {/* Highlights */}
                    <div className="mb-5 space-y-1.5">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/60">
                          <CheckCircle2 size={13} className="text-accent shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1f1f24] border border-white/5 text-xs text-white/80 group-hover:border-accent/20 transition-all duration-300"
                        >
                          {item.icon}
                          <span className="font-mono text-[11px]">{item.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons / Proprietary Notice */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        {/* Live Button */}
                        {project.live ? (
                          <Link
                            href={project.live}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-primary font-medium text-xs hover:bg-accent-hover transition-colors shadow-sm cursor-pointer"
                          >
                            <span>Live Demo</span>
                            <ExternalLink size={13} />
                          </Link>
                        ) : null}

                        {/* GitHub Button */}
                        {project.github ? (
                          <Link
                            href={project.github}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs transition-colors cursor-pointer"
                          >
                            <FaGithub size={14} />
                            <span>Source Code</span>
                          </Link>
                        ) : null}

                        {/* Enterprise / Private Notice */}
                        {!project.live && !project.github && (
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/50 text-xs cursor-help">
                                  <Lock size={12} className="text-accent" />
                                  <span>Proprietary / NDA Protected</span>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-[#1c1c22] border border-white/15 text-white text-xs max-w-xs p-3">
                                <p>Source code and internal instances are confidential and protected by enterprise NDA agreements.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>

                      {/* Project Index indicator */}
                      <span className="text-[11px] font-mono text-white/30">
                        {project.num} / {projects.length.toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Work;
