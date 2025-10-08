import { getPagePath } from '@nanostores/router';
import { TInvestment } from './model';
import { $router } from 'shared/router';

type Props = {
  investment: TInvestment;
};

export default function InvestmentCard({ investment }: Props) {
  const { id, title, description, category, imageUrl } = investment;

  return (
    <a
      href={getPagePath($router, 'investment', { investmentId: id })}
      className="
        group flex flex-col overflow-hidden rounded-xl border border-gray-200
        bg-white shadow-sm transition-all duration-300 ease-out
        hover:-translate-y-[3px] hover:shadow-lg hover:border-gray-300
        dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700
        dark:hover:shadow-gray-800/60
      "
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="
            h-full w-full object-cover transition-transform duration-500 ease-out
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>

        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{description}</p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
            {category}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-400">
            Learn more →
          </span>
        </div>
      </div>
    </a>
  );
}
