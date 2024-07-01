import Link from 'next/link';
import Navbar from './Navbar';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
const Header = () => {
  return (
    <header className="py-6 xl:py-8 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href='/'>
            <h1 className='text-3xl font-semibold'>
                Naveen<span className='text-accent'>.</span>
            </h1>
            </Link>
            <div className="hidden lg:flex items-center gap-8">
                <Navbar />
                <Link href="/contact">
                    <Button>Hire Me</Button>
                </Link>
            </div>
            <div className="lg:hidden">
                <MobileNav />
            </div>
        </div>
        
    </header>
  )
}

export default Header