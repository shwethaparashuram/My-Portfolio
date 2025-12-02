import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import cn from '../libs/Utils';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
    }else{
        document.documentElement.classList.remove('dark');
    }
},[])

  const toggleTheme = () => {
    if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };
  return (
    <>
      {/* Theme Toggle Button Implementation */}
      <button onClick={toggleTheme} 
      className={cn('fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300',
        "focus:outline-hidden"
      )}>
        {isDarkMode ? (
          <Sun className="h-4 w-4 text-yellow-300w" />
        ) : (
          <Moon className="h-4 w-4 text-blue-900" />
        )}
      </button>
    </>
  );
};
export default ThemeToggle;
