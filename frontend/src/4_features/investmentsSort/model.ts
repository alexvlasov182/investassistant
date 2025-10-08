import { TInvestment } from 'entity/investments/model';
import { atom, computed } from 'nanostores';

export const $sortOrder = atom<'asc' | 'desc'>('asc');
export const $sortBy = atom<'title' | 'popularity' | 'updated'>('popularity');

export function setSortBy(value: 'title' | 'popularity' | 'updated') {
  $sortBy.set(value);
}

export function toggleSortOrder() {
  $sortOrder.set($sortOrder.get() === 'asc' ? 'desc' : 'asc');
}

export const $applySort = computed([$sortBy, $sortOrder], (sortedBy, sortOrder) => {
  return (investments: TInvestment[]) => {
    const stored = investments.sort((a, b) => {
      if (sortedBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      // if (sortedBy === 'popularity') {
      //   return a.popularity - b.popularity;
      // }
      // if (sortedBy === 'updated') {
      //   return new Date(a.updated).getTime() - new Date(b.updated).getTime();
      // }
      return 0;
    });

    return sortOrder === 'asc' ? stored : stored.reverse();
  };
});
