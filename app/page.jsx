// import DownloadResumeButton from "@/components/DownloadResumeButton";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from 'next/link';
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/* text */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span>Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm
              <br />
              <span className="text-accent">Naveen Bandaru</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at creating responsive websites and I am proficient in
              various programming langauges and technologies.
            </p>
            {/* btn and socials  */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Link
                href="/Naveen-Bandaru-Resume.pdf"
                target="_blank"
                className="btn btn-outline flex items-center gap-2 uppercase"
              >
               <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center justify-center gap-2"
              >
                
                  <span>Download Resume</span>
                  <FiDownload className="text lg" />
                
              </Button> 
                </Link>
              
              <div className="mb-8 lg:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <Photo className="order-1 lg:order-none mb-8 lg:mb-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
