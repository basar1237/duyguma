'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '@/types';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const defaultTheme: Theme = {
  mode: 'light',
  primary: '#ec4899',
  accent: '#3b82f6',
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // Local storage'dan tema tercihini al
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      try {
        const parsedTheme = JSON.parse(savedTheme);
        setThemeState(parsedTheme);
        applyTheme(parsedTheme);
      } catch (error) {
        console.error('Tema yüklenirken hata:', error);
      }
    } else {
      // Sistem temasını kontrol et
      const systemTheme: 'light' | 'dark' = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      const newTheme: Theme = { ...defaultTheme, mode: systemTheme };
      setThemeState(newTheme);
      applyTheme(newTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    if (newTheme.mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // CSS değişkenlerini ayarla
    root.style.setProperty('--color-primary', newTheme.primary);
    root.style.setProperty('--color-accent', newTheme.accent);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', JSON.stringify(newTheme));
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const newMode: 'light' | 'dark' = theme.mode === 'light' ? 'dark' : 'light';
    const newTheme: Theme = { ...theme, mode: newMode };
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
