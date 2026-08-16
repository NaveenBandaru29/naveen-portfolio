"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code2,
  User,
  Calendar,
  Building2,
  MapPin,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  Globe2,
  Languages,
  BadgeCheck,
  ExternalLink
} from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiPostgresql,
  SiRedux,
  SiReactquery,
  SiGo,
  SiPython,
  SiDjango
} from "react-icons/si";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const experience = {
  title: "Work Experience",
  desc: "Professional engineering experience developing scalable web applications, enterprise platforms, and cross-platform mobile solutions.",
  items: [
    {
      company: "Inductive Quotient Analytics",
      position: "UI/UX Developer - I",
      date: "Aug 2024 - Present",
      location: "Hyderabad, India",
      type: "Full-Time",
      desc: "Lead frontend and mobile development for enterprise healthcare and clinical research platforms.",
      bullets: [
        "Architected and developed TrialLattice, a B2B clinical trial sponsor/site marketplace with real-time analytics and dynamic microsites.",
        "Built Inductive ClinDatasphere, a cross-platform React Native mobile EDC app supporting offline data entry, doctor patient logs, and automated site invoice generation.",
        "Engineered robust client-side caching and state synchronization using Redux Toolkit and TanStack Query.",
        "Created reusable, accessible design systems and UI components with Tailwind CSS and Radix UI primitives."
      ],
      stack: [
        "React.js",
        "React Native",
        "Redux Toolkit",
        "TanStack Query",
        "Tailwind CSS",
        "REST APIs"
      ]
    },
  ],
};

const education = {
  title: "Academic Background",
  desc: "Structured academic foundation in Computer Science, software engineering principles, and core mathematics.",
  items: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institute: "SRKR Engineering College",
      location: "Bhimavaram, Andhra Pradesh",
      date: "2019 - 2023",
      score: "Graduated with Honors",
      highlights: [
        "Specialized in Data Structures, Algorithms, DBMS, and Web Technologies",
        "Built multiple full-stack academic and research prototype systems"
      ]
    },
    {
      degree: "Intermediate Education (Class XII)",
      field: "MPC (Maths, Physics, Chemistry)",
      institute: "Narayana Junior College",
      location: "Vijayawada, Andhra Pradesh",
      date: "2017 - 2019",
      score: "First Class with Distinction",
      highlights: ["Strong foundation in advanced analytical mathematics and physics"]
    },
    {
      degree: "Secondary School Certificate (Class X)",
      field: "General High School Curriculum",
      institute: "Bhashyam High School",
      location: "Chirala, Andhra Pradesh",
      date: "2016 - 2017",
      score: "High Academic Standing",
      highlights: ["Excellence in science and logical mathematics"]
    },
  ],
};

const skillsCategories = [
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, level: "Moderate Knowledge" },
      { name: "React Native", icon: <HiMiniDevicePhoneMobile className="text-[#61DAFB]" />, level: "Moderate Knowledge" },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: "Moderate Knowledge" },
      { name: "JavaScript (ES6+)", icon: <FaJs className="text-[#F7DF1E]" />, level: "Moderate Knowledge" },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: "Moderate Knowledge" },
      { name: "CSS3", icon: <FaCss3 className="text-[#1572B6]" />, level: "Moderate Knowledge" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" />, level: "Moderate Knowledge" },
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" />, level: "Moderate Knowledge" },
    ]
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Go (Golang)", icon: <SiGo className="text-[#00ADD8]" />, level: "Working Knowledge" },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, level: "Working Knowledge" },
      { name: "Python", icon: <SiPython className="text-[#3776AB]" />, level: "Working Knowledge" },
      { name: "Django", icon: <SiDjango className="text-[#092E20]" />, level: "Working Knowledge" },
    ]
  },
  {
    category: "State Management & Data Layer",
    skills: [
      { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" />, level: "Moderate Knowledge" },
      { name: "TanStack Query", icon: <SiReactquery className="text-[#FF4154]" />, level: "Moderate Knowledge" },
      { name: "REST APIs", icon: <Code2 className="text-accent" />, level: "Moderate Knowledge" },
    ]
  },
  {
    category: "Tools & Version Control",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, level: "Moderate Knowledge" },
      { name: "GitHub", icon: <FaGithub className="text-white" />, level: "Moderate Knowledge" },
    ]
  }
];

const about = {
  title: "About Me",
  tagline: "Dedicated Software Engineer & Creative Problem Solver",
  desc: "I am a Full-Stack and Mobile Developer based in Hyderabad, India with 2+ years of industry experience creating responsive web applications and cross-platform mobile solutions. I enjoy bridging the gap between elegant UI design and resilient backend architectures.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Naveen Bandaru",
      icon: <User size={16} className="text-accent" />
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 93908 08403",
      href: "tel:+919390808403",
      icon: <Phone size={16} className="text-accent" />
    },
    {
      fieldName: "Email",
      fieldValue: "bandarun784@gmail.com",
      href: "mailto:bandarun784@gmail.com",
      icon: <Mail size={16} className="text-accent" />
    },
    {
      fieldName: "Location",
      fieldValue: "Hyderabad, Telangana, India",
      icon: <MapPin size={16} className="text-accent" />
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years (Full-Time)",
      icon: <Briefcase size={16} className="text-accent" />
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Telugu, Hindi",
      icon: <Languages size={16} className="text-accent" />
    },
  ],
};

const Resume = () => {
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
            <span>Curriculum Vitae</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Resume & <span className="text-accent">Credentials</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
            A comprehensive overview of my professional experience, engineering capabilities, educational background, and technical journey.
          </p>
        </div>

        {/* Tabs System */}
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-8 xl:gap-12"
        >
          {/* Tabs Sidebar */}
          <TabsList className="grid grid-cols-2 lg:flex lg:flex-col w-full lg:w-[320px] xl:w-[360px] gap-2.5 sm:gap-3 bg-transparent p-0">
            <TabsTrigger
              value="experience"
              className="flex items-center justify-between gap-2 sm:gap-3 px-3.5 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[#27272c] border border-white/5 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <Briefcase size={16} className="group-data-[state=active]:text-primary text-accent transition-colors shrink-0" />
                <span className="font-mono text-xs sm:text-sm truncate">Experience</span>
              </div>
              <span className="text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full bg-white/10 group-data-[state=active]:bg-primary/20 group-data-[state=active]:text-primary font-mono shrink-0">
                {experience.items.length}
              </span>
            </TabsTrigger>

            <TabsTrigger
              value="skills"
              className="flex items-center justify-between gap-2 sm:gap-3 px-3.5 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[#27272c] border border-white/5 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <Code2 size={16} className="group-data-[state=active]:text-primary text-accent transition-colors shrink-0" />
                <span className="font-mono text-xs sm:text-sm truncate">Skills</span>
              </div>
              <span className="text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full bg-white/10 group-data-[state=active]:bg-primary/20 group-data-[state=active]:text-primary font-mono shrink-0">
                17+
              </span>
            </TabsTrigger>

            <TabsTrigger
              value="education"
              className="flex items-center justify-between gap-2 sm:gap-3 px-3.5 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[#27272c] border border-white/5 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <GraduationCap size={16} className="group-data-[state=active]:text-primary text-accent transition-colors shrink-0" />
                <span className="font-mono text-xs sm:text-sm truncate">Education</span>
              </div>
              <span className="text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full bg-white/10 group-data-[state=active]:bg-primary/20 group-data-[state=active]:text-primary font-mono shrink-0">
                {education.items.length}
              </span>
            </TabsTrigger>

            <TabsTrigger
              value="about"
              className="flex items-center justify-between gap-2 sm:gap-3 px-3.5 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[#27272c] border border-white/5 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <User size={16} className="group-data-[state=active]:text-primary text-accent transition-colors shrink-0" />
                <span className="font-mono text-xs sm:text-sm truncate">About Me</span>
              </div>
              <span className="text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full bg-white/10 group-data-[state=active]:bg-primary/20 group-data-[state=active]:text-primary font-mono shrink-0">
                Bio
              </span>
            </TabsTrigger>
          </TabsList>

          {/* Content Area */}
          <div className="flex-1">
            {/* Experience Content */}
            <TabsContent value="experience" className="mt-0">
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {experience.title}
                  </h2>
                  <p className="text-white/60 text-sm max-w-2xl leading-relaxed">
                    {experience.desc}
                  </p>
                </div>

                <div className="space-y-6">
                  {experience.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#27272c] border border-white/10 hover:border-accent/40 rounded-2xl p-6 sm:p-8 transition-all duration-300"
                    >
                      {/* Top Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10 mb-5">
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-mono text-[11px] font-semibold">
                              {item.type}
                            </span>
                            <span className="text-xs text-white/50 font-mono flex items-center gap-1">
                              <MapPin size={12} className="text-accent" />
                              {item.location}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {item.position}
                          </h3>
                          <p className="text-accent font-medium text-sm flex items-center gap-1.5 mt-0.5">
                            <Building2 size={15} />
                            <span>{item.company}</span>
                          </p>
                        </div>

                        {/* Date badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 font-mono text-xs self-start sm:self-center">
                          <Calendar size={13} className="text-accent" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Accomplishments Bullets */}
                      <div className="mb-6 space-y-2.5">
                        {item.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70 leading-relaxed">
                            <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Pills */}
                      <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                        {item.stack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-[#1f1f24] border border-white/5 text-[11px] font-mono text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Skills Content */}
            <TabsContent value="skills" className="mt-0">
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Technical Skills & Ecosystem
                  </h2>
                  <p className="text-white/60 text-sm max-w-2xl leading-relaxed">
                    Practical experience in building responsive web and mobile interfaces using React, React Native, Next.js, and modern state management, complemented by working knowledge of backend engineering and databases.
                  </p>
                </div>

                <div className="space-y-6">
                  {skillsCategories.map((group, gIdx) => (
                    <div
                      key={gIdx}
                      className="bg-[#27272c] border border-white/10 rounded-2xl p-4 sm:p-6"
                    >
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        <h3 className="text-sm sm:text-base font-semibold text-white font-mono">
                          {group.category}
                        </h3>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3">
                        {group.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-[#1f1f24] border border-white/5 hover:border-accent/30 hover:bg-[#25252b] transition-all duration-300 group"
                          >
                            <div className="text-xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                              {skill.icon}
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs sm:text-sm font-medium text-white group-hover:text-accent transition-colors truncate">
                                {skill.name}
                              </p>
                              <p className="text-[9px] sm:text-[10px] font-mono text-white/40 truncate">
                                {skill.level}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Education Content */}
            <TabsContent value="education" className="mt-0">
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {education.title}
                  </h2>
                  <p className="text-white/60 text-sm max-w-2xl leading-relaxed">
                    {education.desc}
                  </p>
                </div>

                <div className="space-y-4">
                  {education.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#27272c] border border-white/10 hover:border-accent/30 rounded-2xl p-5 sm:p-6 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] font-semibold">
                              {item.degree}
                            </span>
                            <span className="text-[11px] text-emerald-400 font-mono">
                              • {item.score}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-white">
                            {item.field}
                          </h3>
                        </div>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 font-mono text-xs self-start sm:self-center">
                          <Calendar size={12} className="text-accent" />
                          {item.date}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm mb-4 font-medium">
                        <Building2 size={14} className="text-accent" />
                        <span>{item.institute}</span>
                        <span className="text-white/30">•</span>
                        <span className="text-white/50 text-xs">{item.location}</span>
                      </div>

                      <div className="space-y-1.5 pt-3 border-t border-white/5">
                        {item.highlights.map((h, hIdx) => (
                          <p key={hIdx} className="text-xs text-white/60 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
                            <span>{h}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* About Me Content */}
            <TabsContent value="about" className="mt-0">
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {about.title}
                  </h2>
                  <p className="text-xs font-mono text-accent mb-2">
                    {about.tagline}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                    {about.desc}
                  </p>
                </div>

                {/* Bento Grid Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {about.info.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#27272c] border border-white/10 hover:border-accent/30 rounded-xl p-4 sm:p-5 flex items-start gap-3.5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-white/50 text-xs font-mono mb-0.5">
                          {item.fieldName}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-semibold text-white hover:text-accent transition-colors truncate block"
                          >
                            {item.fieldValue}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-white truncate">
                            {item.fieldValue}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Core Values / Engineering Philosophy Box */}
                <div className="bg-gradient-to-br from-[#1b2234] via-[#1c1c22] to-[#27272c] border border-accent/20 rounded-2xl p-5 sm:p-6 mt-2">
                  <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase mb-2">
                    <BadgeCheck size={16} />
                    <span>Engineering Focus & Values</span>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4">
                    "I believe in building software that balances high aesthetic precision with solid architectural principles. Writing clean, maintainable code and solving real user problems is at the heart of everything I engineer."
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-mono text-white/60">
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">#ScalableArchitecture</span>
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">#UserCentricDesign</span>
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">#ContinuousLearning</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Resume;
