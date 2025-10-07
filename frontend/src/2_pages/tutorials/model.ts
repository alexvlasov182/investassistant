import { TTrack } from 'entity/track/model';
import { $applySearch } from 'feature/tutorialsSearch/model';
import { computed } from 'nanostores';

const tutorials = [
  {
    id: 'lift-off-part1',
    title: 'Lift-off I: Basics',
    description: 'Learn the basics of React, the most popular front-end library.',
    imageUrl:
      'https://res.cloudinary.com/apollographql/image/upload/v1702928093/odyssey/course-assets-new-brand/LO_course_thumb_beige_ttvtz4.svg',
    trackType: 'BEGINNER',
  },
  {
    id: 'lift-off-part2',
    title: 'TypeScript',
    description:
      'Learn TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
    imageUrl:
      'https://res.cloudinary.com/apollographql/image/upload/v1727893429/odyssey/centered-connector_lokjwy.svg',
    trackType: 'BEGINNER',
  },
  {
    id: 'lift-off-part3',
    title: 'TypeScript',
    description:
      'Learn TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
    imageUrl:
      'https://res.cloudinary.com/apollographql/image/upload/v1727893429/odyssey/centered-connector_lokjwy.svg',
  },
  {
    id: 'lift-off-part4',
    title: 'TypeScript',
    description:
      'Learn TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
    imageUrl:
      'https://res.cloudinary.com/apollographql/image/upload/v1727893429/odyssey/centered-connector_lokjwy.svg',
    trackType: 'BEGINNER',
  },
  {
    id: 'lift-off-part5',
    title: 'TypeScript',
    description:
      'Learn TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
    imageUrl:
      'https://res.cloudinary.com/apollographql/image/upload/v1727893429/odyssey/centered-connector_lokjwy.svg',
    trackType: 'BEGINNER',
  },
  {
    id: 'lift-off-part5',
    title: 'TypeScript',
    description:
      'Learn TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
    imageUrl:
      'https://res.cloudinary.com/apollographql/image/upload/v1727893429/odyssey/centered-connector_lokjwy.svg',
    trackType: 'BEGINNER',
  },
];

export const $tutorials = computed($applySearch, (applySearch) => {
  return applySearch(tutorials as TTrack[]);
});
