
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full glass border border-slate-200 dark:border-slate-700 overflow-hidden"
      aria-label="Toggle Theme"
    >
      <motion.div
        animate={{ y: darkMode ? 40 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center"
      >
        <Sun className="w-5 h-5 text-amber-500 mb-6" />
        <Moon className="w-5 h-5 text-indigo-400" />
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
