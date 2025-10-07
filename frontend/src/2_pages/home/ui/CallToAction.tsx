import { getPagePath } from '@nanostores/router';
import { $router } from 'shared/router';

export default function CallToAction() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 px-6 text-center dark:from-gray-900 dark:to-gray-950 md:px-12">
      {/* Background pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/pattern-light.svg')] bg-cover bg-center opacity-10 dark:bg-[url('/images/pattern-dark.svg')] dark:opacity-15"
      />

      {/* Main image */}
      <div className="relative z-10 mb-8">
        <img
          src="https://res.cloudinary.com/apollographql/image/upload/v1702931350/odyssey/course-assets-new-brand/spacesuit_beige_blank_i0nxh1.svg"
          alt="Astronaut illustration"
          className="mx-auto w-64 md:w-96 animate-float"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4 text-center">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-6xl md:leading-snug">
          Master Investments <br className="hidden md:block" /> With Interactive Tutorials
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Boost your investment skills with hands-on tutorials, interactive simulations, and
          real-world insights. Start learning today!
        </p>

        <a
          href={getPagePath($router, 'tutorials')}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
        >
          Browse Tutorials
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12l-3.75 3.75M3 12h18"
            />
          </svg>
        </a>
      </div>

      {/* Optional: subtle floating animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
