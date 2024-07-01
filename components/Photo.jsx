'use client'
import { motion } from "framer-motion"
import Image from "next/image"
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* Image */}
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.8,duration:0.4,ease:"easeInOut"}}
      >
        <div className="w-[298px] h-[298px] xl:w-[438px] xl:h-[438px] mix-blend-lighten">
          <Image src="/assets/photo.png" priority alt=""
            fill className="rounded-full w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* circle */}
      
    </div>
  )
}

export default Photo