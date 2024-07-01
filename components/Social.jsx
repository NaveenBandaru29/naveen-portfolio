import Link from "next/link"
import {FaGithub, FaLinkedinIn,} from "react-icons/fa" 

const socials = [
    {icon: <FaGithub />, path: "https://github.com/NaveenBandaru29"},
    {icon: <FaLinkedinIn />, path: "https://linkedin.com/in/naveen-bandaru-881177239"},
    
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        
        {socials.map((social, index) => (
            <Link href={social.path} key={index} className={iconStyles} target="_blank">
                {social.icon}
            </Link>
        ))}
    </div>
  )
}

export default Social