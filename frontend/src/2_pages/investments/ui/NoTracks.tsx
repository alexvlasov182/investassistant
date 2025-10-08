import { getPagePath } from '@nanostores/router';
import { $router } from 'shared/router';

export default function NoTracks() {
  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = getPagePath($router, 'home');
  };

  return (
    <section className="flex min-h-[60vh] w-full items-center justify-center px-6 text-center md:px-12">
      <div className="max-w-md space-y-4">
        <div className="text-5xl md:text-6xl">😔</div>
        <h2 className="text-3xl font-extrabold leading-snug text-gray-900 dark:text-white md:text-4xl">
          No results found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 md:text-lg">
          Sorry, we couldn’t find anything matching your search. Try adjusting your filters or
          search terms.
        </p>

        {/* Simple CTA */}
        <a
          href={getPagePath($router, 'home')}
          onClick={goHome}
          className="mt-4 inline-block rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
        >
          Browse Tutorials
        </a>
      </div>
    </section>
  );
}
