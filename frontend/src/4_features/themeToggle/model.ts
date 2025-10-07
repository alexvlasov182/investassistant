import { $theme } from 'shared/theme';

// Initialize theme on load
document.documentElement.classList.toggle('dark', $theme.get() === 'dark');

// Listen to changes
$theme.subscribe((theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
});

export function toggleTheme() {
  $theme.set($theme.get() === 'light' ? 'dark' : 'light');
}
