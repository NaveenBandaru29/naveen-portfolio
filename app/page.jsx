import Photo from '@/components/Photo';
import Social from '@/components/Social';
import {Button} from '@/components/ui/button';
import {FiDownload} from 'react-icons/fi';
import {BsArrowRight} from 'react-icons/bs';
import Link from 'next/link';

export const metadata = {
  title: 'Naveen Bandaru - Frontend & Mobile Developer | Portfolio',
  description: 'Full-Stack Developer specializing in React, React Native, and Next.js with hands-on experience in Go and PostgreSQL. Available for full-time roles, consulting, and collaboration.',
  openGraph: {
    title: 'Naveen Bandaru - Frontend & Mobile Developer',
    description: 'Full-Stack Developer with 2+ years building enterprise web and mobile applications. React, React Native, Next.js, Go, PostgreSQL.',
    type: 'website',
    url: 'https://naveenb-portfolio.vercel.app/',
  },
  twitter: {
    title: 'Naveen Bandaru - Frontend & Mobile Developer',
    description: 'Full-Stack Developer specializing in React, React Native, and Next.js.',
  },
};

const stats = [
  {
    num: '2+',
    text: 'Years of Industry Experience',
  },
  {
    num: '5+',
    text: 'Production & Full Stack Projects',
  },
  {
    num: '12+',
    text: 'Technologies & Frameworks',
  },
  {
    num: '100%',
    text: 'Code Quality & Precision',
  },
];

const keyTechs = [
  'React.js',
  'React Native',
  'Next.js',
  'Go',
  'PostgreSQL',
  'Redux Toolkit',
  'Tailwind CSS',
];

const Home = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-between py-6 lg:py-10">
      <div className="container mx-auto flex-1 flex flex-col justify-center">
        {/* Main Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-none max-w-[620px]">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium">Available for Opportunities</span>
              <span className="text-white/30">•</span>
              <span className="text-white/70">Full Stack & Mobile</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
              Hello, I'm <br />
              <span className="text-accent">Naveen Bandaru</span>
            </h1>

            {/* Description */}
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Frontend & Mobile Developer specializing in building high-performance web and cross-platform mobile applications with
              {' '}
              <span className="text-white font-medium">React</span>
              ,
              {' '}
              <span className="text-white font-medium">React Native</span>
              , and
              {' '}
              <span className="text-white font-medium">Next.js</span>
              , with hands-on full-stack experience in
              {' '}
              <span className="text-white font-medium">Go</span>
              {' '}
              and
              {' '}
              <span className="text-white font-medium">PostgreSQL</span>
              . Focused on clean architecture, seamless API integration, and intuitive user experiences.
            </p>

            {/* Key Tech Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {keyTechs.map ((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 rounded-md bg-[#27272c] border border-white/5 text-[11px] font-mono text-white/80 hover:border-accent/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons and Socials */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              {/* Download CV */}
              <Link
                href="/Naveen-Bandaru-Resume.pdf"
                target="_blank"
                className="w-full sm:w-auto cursor-pointer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto uppercase flex items-center justify-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary font-mono text-xs tracking-wider transition-all duration-300 font-bold cursor-pointer"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-base" />
                </Button>
              </Link>

              {/* Explore Projects */}
              <Link href="/work" className="w-full sm:w-auto cursor-pointer">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#27272c] hover:bg-[#323238] border border-white/10 text-white font-mono text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                >
                  <span>View Projects</span>
                  <BsArrowRight className="text-accent text-sm" />
                </Button>
              </Link>

              {/* Social Links */}
              <div className="pt-2 sm:pt-0">
                <Social
                  containerStyles="flex gap-3"
                  iconStyles="w-10 h-10 border border-white/10 rounded-full flex justify-center items-center text-white/80 text-base bg-[#27272c] hover:border-accent hover:text-accent hover:bg-[#1c1c22] transition-all duration-300 shadow-sm cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Photo Hero with Rotating SVG Ring */}
          <div className="order-1 lg:order-none flex justify-center items-center">
            <Photo />
          </div>
        </div>

        {/* Stats Ribbon */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 xl:gap-8">
          {stats.map ((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:items-start text-center lg:text-left p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all duration-300"
            >
              <span className="text-3xl xl:text-4xl font-extrabold text-accent font-mono tracking-tight mb-1">
                {item.num}
              </span>
              <p className="text-white/60 text-xs sm:text-sm font-medium leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
