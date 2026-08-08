'use client';

import { useEffect, useState } from 'react';

const themes = ['light', 'dark'] as const;

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('ablespace-theme');
    if (storedTheme === 'dark') {
      setTheme('dark');
      document.documentElement.dataset.theme = 'dark';
    }
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('ablespace-theme', nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text)] shadow-sm transition hover:bg-slate-50"
    >
      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}
