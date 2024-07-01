"use client";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiPython,
  SiCplusplus,
  SiBootstrap,
  SiMysql,
  SiMongodb
} from "react-icons/si";
import { motion } from "framer-motion";
const about = {
  title: "About Me",
  desc: "I am a Full Stack Developer with a passion for creating beautiful and functional websites. I have a strong foundation in web development and programming languages such as HTML, CSS, JavaScript, React, and Python. I am also familiar with Django and C++.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Naveen Bandaru",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 93908 08403",
    },
    {
      fieldName: "Email",
      fieldValue: "bandarun784@gmail.com",
    },
    {
      fieldName: "Address",
      fieldValue: "Chirala, Andhra Pradesh, India",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Telugu",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  desc: "I have a Bachelor's degree in Computer Science Engineering from SRKR Engineering College, Bhimavram, Andhra Pradesh, India.",
  items: [
    {
      degree: "Bachelor of Technology",
      course: "Computer Science Engineering",
      date: "2019 - 2023",
      institute: "SRKR Engineering College, Bhimavaram",
    },
    {
      degree: "Intermediate",
      course: "MPC",
      date: "2017 - 2019",
      institute: "Narayana Junior College, Vijayawada",
    },
    {
      degree: "High School",
      course: "SSC",
      date: "2016 - 2017",
      institute: "Bhashyam High School, Chirala",
    },
  ],
};

const skills = {
  title: "Skills",
  desc: "I have a strong foundation in web development and programming languages such as HTML, CSS, JavaScript, React, and Python. I am also familiar with Django and C++.",
  items: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Django",
      icon: <SiDjango />,
    },
    {
      name: "Python",
      icon: <SiPython />,
    },
    {
      name: "C++",
      icon: <SiCplusplus />,
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
  ],
};

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <Tabs
        defaultValue="education"
        className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>
        {/* content */}
        {/* education */}
        <div className="min-h-[70vh] sm:w-[70vw]">
          <TabsContent value="education" className="w-full h-full">
            <div className="flex flex-col gap-[30px] text-center lg:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="w-full text-white/60 mx-auto lg:mx-0">
                {education.desc}
              </p>
              <ScrollArea className="h-[400px] w-full">
                <ul className="grid grid-cols-1 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-auto  py-6 px-10 rounded-lg flex flex-col items-center justify-center gap-1 "
                      >
                        <span className="text-accent">{item.date}</span>
                        <h3 className="text-xl max-w-[300px] min-h-[60px] text-center">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.institute}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="w-full text-white/60 mx-auto lg:mx-0">
                {skills.desc}
              </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.items.map((skill, index) => {
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })
                }
              </ul>
            </div>
          </TabsContent>

          {/* about */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="w-full text-white/60 mx-auto lg:mx-0">{about.desc}</p>
              <ul className="grid grid-cols-1 xl:grid-cols- gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item,index)=>{
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  )
                })
                }
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default Resume;
