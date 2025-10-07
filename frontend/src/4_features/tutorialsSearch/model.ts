import { TTrack } from 'entity/track/model';
import Fuse from 'fuse.js';
import { atom, computed } from 'nanostores';
import { tutorials } from 'page/tutorials';

export const $searchQuery = atom<string>('');

export const setSearchQuery = (query: string) => {
  $searchQuery.set(query);
};

export const clearSearchQuery = () => {
  $searchQuery.set('');
};

export const $applySearch = computed($searchQuery, (query) => {
  return (tutorials: TTrack[]) => {
    const fuse = new Fuse(tutorials, {
      keys: [{ name: 'title', weight: 2 }, 'description'],
      threshold: 0.35,
    });

    return query ? fuse.search(query).map((result) => result.item) : tutorials;
  };
});
