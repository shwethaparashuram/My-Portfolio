import { useState, useEffect } from 'react';
import cn from '../libs/Utils';
import { Menu, X } from 'lucide-react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        {/*mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
            'transition-all duration-300 md:hidden',
            isMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          )}
        >
          <div className="flex flex-col space-y-8 text-xl ">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mx-4 text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
