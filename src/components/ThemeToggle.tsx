'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkSaved = localStorage.getItem('color-theme') === 'dark';
    const isSystemDark =
      !('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDarkSaved || isSystemDark) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-xl border border-slate-200/60 dark:border-slate-800/60" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/80 shadow-soft-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-[0.97] min-h-[40px] min-w-[40px] flex items-center justify-center"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="h-4.5 w-4.5 text-amber-400 animate-spin-slow transition-transform" />
      ) : (
        <Moon className="h-4.5 w-4.5 text-brand-blue transition-transform" />
      )}
    </button>
  );
}
