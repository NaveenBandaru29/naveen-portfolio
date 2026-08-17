import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    path: "https://github.com/NaveenBandaru29",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    path: "https://linkedin.com/in/naveen-bandaru-881177239",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      <TooltipProvider delayDuration={100}>
        {socials.map((social, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Link
                href={social.path}
                className={`${iconStyles} cursor-pointer`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-[#27272c] border border-white/10 text-white font-mono text-xs">
              <p>{social.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default Social;