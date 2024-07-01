"use client";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import WorkSlidersBtns from "@/components/WorkSlidersBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack Project",
    title: "Emotion based Music Recommendation System",
    desc: "The technology helps users create a playlist of songs by identifying users emotions through facial recognition.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "Python" },
      { name: "Django" },
      { name: "SQLite" },
    ],
    image: "/assets/work/thumb-1.png",
    live: "https://naveenbandaru.pythonanywhere.com",
    github: "https://github.com/NaveenBandaru29/django-emrs",
  },
  {
    num: "02",
    category: "Frontend Project",
    title: "Portfolio Wesite",
    desc: "Explore my portfolio website to see my work in frontend and backend development, showcasing my projects, skills, and accomplishments in software development.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb-3.png",
    live: "/",
    github: "",
  },
  {
    num: "03",
    category: "Full Stack Project",
    title: "Complaint Management System",
    desc: "The system enables users to file complaints regarding the issues directly through the platform.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JSP" },
      { name: "JDBC" },
      { name: "MySQL" },
    ],
    image: "",
    live: "",
    github: "",
  },
];

const Work = () => {

  const [project,setProject] = useState(projects[0]);
  const handleSlideChange= (swiper)=>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);

  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 , transition:{delay:1.2, duration:0.4, ease:"easeIn"} }}
      className="min-h-[70vh] flex flex-col justify-center py-8 lg:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col  lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* outline num */}
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
              {/* project desc */}
              <p className="text-white/60">{project.desc}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item,index)=>{
                  return (
                    <li className="text-lg flex items-center justify-center" key={index}>
                      <span className="text-[35px] text-accent">&middot;</span>
                      {item.name}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-white text-3lg group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3lg group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
            spaceBetween={30} slidesPerView={1} 
            className="lg:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project,index)=>{
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-contain"/>
                      </div>

                    </div>
                  </SwiperSlide>
                )
              })}
              {/* buttons */}
              <WorkSlidersBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
