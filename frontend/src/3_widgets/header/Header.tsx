import { getPagePath } from "@nanostores/router";
import { ThemeToggle } from "feature/themeToggle";
import { $router } from "shared/router";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
      {/* Left side: Logo + Navigation */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <a
          href={getPagePath($router, "home")}
          className="flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-100 hover:opacity-80 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 text-amber-600"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5z" />
          </svg>
          <span>Investment Guide</span>
        </a>

        {/* Navigation links right next to the logo */}
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
          <a
            href={getPagePath($router, "tutorials")}
            className="text-gray-700 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400 transition"
          >
            Tutorials
          </a>
          <a
            // href={getPagePath($router, "track")}
            className="text-gray-700 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-400 transition"
          >
            Tracks
          </a>
        </nav>
      </div>

      {/* Right side: Theme toggle */}
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </header>
  );
}
