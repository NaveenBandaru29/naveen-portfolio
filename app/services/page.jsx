'use client';
import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link'
import {delay, motion} from 'framer-motion'

const Services = () => {
  const services = [
    {
      num:"01",
      title:"Web Development",
      desc:"We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
      href:"",
    },
    {
      num:"02",
      title:"Logo Graphic Design",
      desc:"We create Logos that are memorable, timeless, and unique to your brand.",
      href:"",
    },
  ]
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container max-auto">
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1,
            transition: {duration: 0.4, delay:2.4,ease:"easeIn"}
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
            {services.map((service, index) => {
              return (
                <div 
                key={index}
                className='flex flex-col justify-center gap-6 group'
                >
                  <div className='w-full flex justify-between items-center'>
                    <div 
                    className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                      {service.num}
                    </div>
                    <Link href={service.href}
                      className='w-[70px] h-[70px] flex justify-center items-center bg-white rounded-full transition-all duration-500 group-hover:bg-accent hover:-rotate-45'
                    >
                      <BsArrowDownRight className='text-primary text-3xl' />
                    </Link>
                  </div>
                  {/* title */}
                  <h2
                  className='text-[42px] font-bold text-white group-hover:text-accent transition-all duration-500'
                  >{service.title}</h2>
                  {/* description */}
                  <p className='text-white/60'>{service.desc}</p>
                  {/* boerder */}
                  <div className='border-b border-white/20 w-full'></div>
                </div>
              )
            })}
        </motion.div>
      </div>

    </section>
  )
}

export default Services