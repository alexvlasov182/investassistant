import { useStore } from '@nanostores/react';
import { $searchQuery, clearSearchQuery } from './model';

export default function TutorialsSearch() {
  const searchQuery = useStore($searchQuery);

  return (
    <div className="relative mb-8 w-full mx-auto">
      {/* Search icon (left) */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400 dark:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
          />
        </svg>
      </div>

      {/* Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => $searchQuery.set(e.target.value)}
        placeholder="Search tutorials..."
        className="block w-full rounded-xl border border-gray-300 bg-white py-4 pl-10 pr-10 
                   text-sm text-gray-900 placeholder:text-gray-500 
                   shadow-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 
                   dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 
                   dark:placeholder:text-gray-500 dark:focus:ring-amber-400/30 
                   transition-all duration-200"
      />

      {/* Clear button (right) */}
      {searchQuery && (
        <button
          onClick={clearSearchQuery}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 
                     dark:text-gray-500 dark:hover:text-gray-300 transition cursor-pointer"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
