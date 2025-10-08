import { createRouter } from '@nanostores/router';

export const $router = createRouter({
  home: '/',
  investments: '/investments',
  investment: '/investment/:investmentId',
});
