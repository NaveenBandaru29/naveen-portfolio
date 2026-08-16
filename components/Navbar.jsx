"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home as HomeIcon, FileText, Layers } from "lucide-react";

const links = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon size={14} />,
  },
  {
    name: "Resume",
    path: "/resume",
    icon: <FileText size={14} />,
  },
  {
    name: "Work",
    path: "/work",
    icon: <Layers size={14} />,
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
      {links.map((link) => {
        const isActive = link.path === pathname;

        return (
          <Link
            href={link.path}
            key={link.path}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${isActive
              ? "text-accent font-semibold"
              : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
          >
            {isActive && (
              <motion.span
                layoutId="activePill"
                className="absolute inset-0 rounded-full bg-accent/15 border border-accent/30 -z-10 shadow-sm shadow-accent/10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className={isActive ? "text-accent" : "text-white/50"}>
              {link.icon}
            </span>
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
