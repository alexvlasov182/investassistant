import { useStore } from '@nanostores/react';
import { Header } from 'widget/header';
import { $investments } from './model';
import { InvestmentCard } from 'entity/investments';
import { InvestmentsSearch } from 'feature/investmentsSearch';
import { InvestmentsSort } from 'feature/investmentsSort';
import NoTracks from './ui/NoTracks';

export default function Investments() {
  const investments = useStore($investments);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Header />

      <main className="mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 md:px-12">
        {/* Title */}
        <header className="mb-12 mt-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl">
            Investment Recommendations & Insights
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get personalized ideas and resources to grow your investments wisely.
          </p>
        </header>
        <InvestmentsSearch />
        {investments.length > 0 && (
          <div className="my-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Left: results count */}
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {investments.length} result{investments.length !== 1 && 's'} found
            </span>

            {/* Right: sort controls */}
            <InvestmentsSort />
          </div>
        )}
        {/* Cards grid */}
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                     transition-all"
        >
          {investments.map((investment) => (
            <InvestmentCard key={investment.id} investment={investment} />
          ))}
        </div>
        {!investments.length && <NoTracks />}
      </main>
    </div>
  );
}
