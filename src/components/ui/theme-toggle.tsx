'use client';

import React from 'react';
import { useTheme } from '@/lib/theme-context';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { cn } from '@/utils/cn';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      aria-label="Tema değiştir"
    >
      {theme.mode === 'light' ? (
        <IconMoon className="h-5 w-5" />
      ) : (
        <IconSun className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
