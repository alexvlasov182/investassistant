import { TInvestment } from 'entity/investments/model';
import Fuse from 'fuse.js';
import { atom, computed } from 'nanostores';

export const $searchQuery = atom<string>('');

export const setSearchQuery = (query: string) => {
  $searchQuery.set(query);
};

export const clearSearchQuery = () => {
  $searchQuery.set('');
};

export const $applySearch = computed($searchQuery, (query) => {
  return (investments: TInvestment[]) => {
    const fuse = new Fuse(investments, {
      keys: [{ name: 'title', weight: 2 }, 'description'],
      threshold: 0.35,
    });

    return query ? fuse.search(query).map((result) => result.item) : [...investments];
  };
});
