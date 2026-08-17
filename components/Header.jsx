import Link from 'next/link';
import Navbar from './Navbar';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
import { Send } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#1c1c22]/85 backdrop-blur-md border-b border-white/5 py-4 xl:py-5 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1 cursor-pointer">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors font-mono">
            Naveen<span className="text-accent group-hover:animate-pulse">.</span>
          </h1>
        </Link>

        {/* Desktop Nav & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <Navbar />
          <Link href="/contact" className="cursor-pointer">
            <Button className="bg-accent hover:bg-accent-hover text-primary font-mono text-xs uppercase font-bold tracking-wider px-5 py-2.5 rounded-full shadow-lg shadow-accent/15 flex items-center gap-2 transition-all duration-300 cursor-pointer">
              <span>Hire Me</span>
              <Send size={13} />
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;