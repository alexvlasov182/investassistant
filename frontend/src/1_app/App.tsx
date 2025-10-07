import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { Home } from 'page/home';
import { Track } from 'page/track';
import { Tutorials } from 'page/tutorials';

import { $router } from 'shared/router';
import { $theme } from 'shared/theme';

export default function App() {
  const page = useStore($router);
  const theme = useStore($theme);

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  if (!page) return null; // TODO: add 404 page

  switch (page.route) {
    case 'home':
      return <Home />;
    case 'tutorials':
      return <Tutorials />;
    case 'track':
      return <Track trackId={page.params.trackId} />;
  }
}
