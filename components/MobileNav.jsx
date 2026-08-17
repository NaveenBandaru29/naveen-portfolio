"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, FileText, Layers, Send, ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const links = [
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
    desc: "Main intro & highlights",
  },
  {
    name: "Resume",
    path: "/resume",
    icon: FileText,
    desc: "Experience, skills & bio",
  },
  {
    name: "Work",
    path: "/work",
    icon: Layers,
    desc: "Selected featured projects",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex justify-center items-center p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 text-accent transition-all duration-300 cursor-pointer"
        aria-label="Open Mobile Menu"
      >
        <CiMenuFries className="text-[24px]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between p-6 sm:p-8 bg-[#1c1c22] border-l border-white/10 overflow-y-auto">
        <div>
          {/* Header Logo */}
          <div className="mt-4 mb-8 flex items-center justify-between pr-10">
            <Link href="/" onClick={() => setIsOpen(false)} className="cursor-pointer">
              <h1 className="text-2xl font-bold tracking-tight font-mono">
                Naveen<span className="text-accent">.</span>
              </h1>
            </Link>
            {/* <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent">
              Menu
            </span> */}
          </div>

          {/* Nav Items as Interactive Cards */}
          <nav className="flex flex-col gap-3">
            {links.map((link, index) => {
              const isActive = link.path === pathname;
              const Icon = link.icon;

              return (
                <Link
                  key={index}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl border transition-all duration-300 group cursor-pointer ${isActive
                    ? "bg-accent/15 border-accent text-white font-semibold shadow-lg shadow-accent/5"
                    : "bg-[#27272c] border-white/5 text-white/70 hover:text-white hover:border-white/15"
                    }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive
                        ? "bg-accent"
                        : "bg-white/5 group-hover:bg-accent/10"
                        }`}
                    >
                      <Icon
                        size={18}
                        className={isActive ? "text-primary stroke-[2.5]" : "text-accent"}
                      />
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`font-mono text-sm truncate ${isActive ? "text-accent font-bold" : "text-white"
                          }`}
                      >
                        {link.name}
                      </p>
                      <p className="text-[11px] text-white/40 truncate font-mono">
                        {link.desc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`shrink-0 transition-transform group-hover:translate-x-1 ${isActive ? "text-accent" : "text-white/30"
                      }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer with Hire Me and Socials */}
        <div className="pt-6 mt-4 border-t border-white/10 flex flex-col gap-4">
          <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full cursor-pointer">
            <Button className="w-full bg-accent hover:bg-accent-hover text-primary font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 py-5 rounded-xl shadow-lg shadow-accent/15 cursor-pointer">
              <span>Hire Me</span>
              <Send size={13} />
            </Button>
          </Link>

          {/* Social Quick Links */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] font-mono text-white/40">Connect Online:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/NaveenBandaru29"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <FaGithub size={14} />
              </a>
              <a
                href="https://linkedin.com/in/naveen-bandaru-881177239"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
