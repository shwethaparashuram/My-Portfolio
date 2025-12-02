import { useState, useEffect } from 'react';
import cn from '../libs/Utils';
import { Menu } from 'lucide-react';

const navItems = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-40 transition-all duration-300',
        isScrolled
          ? 'py-3 bg-background backdrop-blur-md shadow-md'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="nav-container flex items-center justify-between">
        <a
          className="text-2xl font-bold text-primary flex items-center"
          href="#home"
        >
          <span className="relative z-10">
            <span className="text-glow">Shwetha</span> Portfolio
          </span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mx-4 text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <span>{item.name}</span>
            </a>
          ))}
        </div>
        {/* <button onClick={}><Menu size={24}/></button> */}
      </div>
    </nav>
  );
};
export default Navbar;
