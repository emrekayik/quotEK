import { useTheme } from 'next-themes';

function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="p-3 h-12 w-12 order-2 md:order-3 text-2xl transition-all"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? '🌞' : '🌚'}
    </button>
  );
}
export default DarkModeToggle;
