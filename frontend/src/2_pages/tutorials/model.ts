import { tutorialsSearch } from 'feature/tutorialsSearch';
import { tutorialsSort } from 'feature/tutorialsSort';
import { computed } from 'nanostores';

const tutorials = [
  {
    id: 'lift-off-part1',
    title: 'Lift-off I: Basics',
    description:
      'Use the Apollo MCP server to connect AI assistants with data from backend services and APIs',
    imageUrl:
      'https://res.cloudinary.com/apollographql/image/upload/v1702928093/odyssey/course-assets-new-brand/LO_course_thumb_beige_ttvtz4.svg',
    trackType: 'BEGINNER',
  },
  {
    id: 'lift-off-part2',
    title: 'Getting started with MCP and GraphQL',
    description:
      'Use the Apollo Runtime Container and GraphOS to bring AI assistant features to life',
    imageUrl:
      'https://res.cloudinary.com/apollographql/image/upload/v1702931350/odyssey/course-assets-new-brand/spacesuit_beige_blank_i0nxh1.svg',
    trackType: 'BEGINNER',
  },
  {
    id: 'lift-off-part3',
    title: 'Batching with Apollo Connectors',
    description: 'Improve your graphs performance with batching using Apollo Connectors',
    imageUrl:
      'https://res.cloudinary.com/apollographql/image/upload/v1727893429/odyssey/centered-connector_lokjwy.svg',
  },
  {
    id: 'lift-off-part4',
    title: 'Expressions in Connectors: Mapping and Transforms',
    description:
      'Learn the syntax and methods to connect and map complex REST API responses into your schema using Apollo Connectors',
    imageUrl:
      'https://res.cloudinary.com/apollographql/image/upload/v1741720183/odyssey/observatory_dtdgyh.svg',
    trackType: 'BEGINNER',
  },
  {
    id: 'lift-off-part5',
    title: 'Intro to GraphQL with Python and Strawberry',
    description:
      'Learn about the GraphQL schema, arguments, queries, and mutations. We will implement a GraphQL API using Strawberry and FastAPI.',
    imageUrl:
      'https://res.cloudinary.com/apollographql/image/upload/v1702931336/odyssey/course-assets-new-brand/course_thumb_2_beige_jo94ov.svg',
    trackType: 'BEGINNER',
  },
];

export const $tutorials = computed(
  [tutorialsSearch.$applySearch, tutorialsSort.$applySort],
  (applySearch, applySort) => {
    return applySort(applySearch(tutorials));
  },
);
