import { Sun, Moon } from 'lucide-react';
import { useTheme } from "../../../context/ThemeContext";


export default function ThemeToggle() {
 const { theme, toggleTheme } = useTheme();

 return (
  <button
      onClick={toggleTheme}
      className="relative flex items-center justify-between w-14 h-8 px-1 bg-gray-200 dark:bg-gray-800 rounded-full transition-colors duration-300 focus:outline-none"
      aria-label="Toggle Theme"
    >
      {/* Background Icon samar */}
      <Sun className="w-4 h-4 text-orange-500 opacity-50 dark:opacity-0 transition-opacity" />
      <Moon className="w-4 h-4 text-blue-400 opacity-0 dark:opacity-50 transition-opacity" />

      {/* Circle Indicator (Slider) */}
      <div 
        className={`absolute w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="w-4 h-4 text-gray-800" fill="currentColor" />
        ) : (
          <Sun className="w-4 h-4 text-orange-500" fill="currentColor" />
        )}
      </div>
    </button>
 )
}