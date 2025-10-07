import { useStore } from '@nanostores/react';
import { Header } from 'widget/header';
import { $tutorials } from './model';
import { TrackCard } from 'entity/track';
import { TutorialsSearch } from 'feature/tutorialsSearch';
import NoTracks from './ui/NoTracks';

export default function Tutorials() {
  const tutorials = useStore($tutorials);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Header />

      <main className="mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 md:px-12">
        {/* Title */}
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl">
            Investment Tutorials and Resources
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our curated selection of tutorials and resources to enhance your investment
            knowledge and skills.
          </p>
        </header>
        <TutorialsSearch />
        {/* Cards grid */}
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                     transition-all"
        >
          {tutorials.map((tutorial) => (
            <TrackCard key={tutorial.id} track={tutorial} />
          ))}
        </div>
        {!tutorials.length && <NoTracks />}
      </main>
    </div>
  );
}
