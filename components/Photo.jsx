"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Photo with inner glow and frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.6, duration: 0.5, ease: "easeInOut" },
          }}
          className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] xl:w-[420px] xl:h-[420px] relative mix-blend-lighten"
        >
          <Image
            src="/assets/photo.png"
            priority
            sizes="(max-width: 768px) 240px, (max-width: 1200px) 280px, 420px"
            alt="Naveen Bandaru"
            fill
            className="rounded-full object-cover shadow-2xl"
          />
        </motion.div>

        {/* Animated Rotating SVG Ring */}
        <motion.svg
          className="w-[250px] h-[250px] sm:w-[290px] sm:h-[290px] xl:w-[436px] xl:h-[436px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#0099ff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;