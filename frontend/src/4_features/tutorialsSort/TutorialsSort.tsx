import { useStore } from '@nanostores/react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { $sortBy, $sortOrder, setSortBy, toggleSortOrder } from './model';

export function TutorialsSort() {
  const sortBy = useStore($sortBy);
  const sortOrder = useStore($sortOrder);

  const sortOptions = [
    { id: 'popularity', label: 'Popularity' },
    { id: 'title', label: 'Title' },
    { id: 'updated', label: 'Updated' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Sort by:</span>

      {sortOptions.map(({ id, label }) => {
        const isActive = sortBy === id;
        return (
          <button
            key={id}
            onClick={() => setSortBy(id as any)}
            className={`px-3 py-1.5 text-sm rounded-md border transition-all duration-200 ${
              isActive
                ? 'bg-amber-500 text-white border-amber-500 shadow-sm hover:bg-amber-600'
                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'
            }`}
          >
            {label}
          </button>
        );
      })}

      <button
        onClick={toggleSortOrder}
        className="ml-1 flex items-center gap-1 px-3 py-1.5 text-sm rounded-md border transition-all duration-200
          bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
        title="Toggle ascending / descending"
      >
        {sortOrder === 'asc' ? (
          <>
            <ArrowUp className="w-4 h-4" />
            <span>Asc</span>
          </>
        ) : (
          <>
            <ArrowDown className="w-4 h-4" />
            <span>Desc</span>
          </>
        )}
      </button>
    </div>
  );
}
