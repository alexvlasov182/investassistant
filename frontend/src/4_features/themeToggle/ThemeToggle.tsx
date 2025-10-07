import { useStore } from '@nanostores/react';
import { $theme } from 'shared/theme';
import { toggleTheme } from './model';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const theme = useStore($theme);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 cursor-pointer"
      title="Toggle theme"
    >
      {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}
