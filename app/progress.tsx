'use client';

import nProgress from 'nprogress';

import 'nprogress/nprogress.css';
import './progress.css';

import { useEffect } from 'react';

function Progress(): null {
  useEffect(() => {
    const routeChangeStart = nProgress.start.bind(nProgress);
    const routeChangeEnd = nProgress.done.bind(nProgress);

    if (window.navigation) {
      navigation.addEventListener('navigate', routeChangeStart);
      navigation.addEventListener('navigateerror', routeChangeEnd);
      navigation.addEventListener('navigatesuccess', routeChangeEnd);

      return () => {
        navigation.removeEventListener('navigate', routeChangeStart);
        navigation.removeEventListener('navigateerror', routeChangeEnd);
        navigation.removeEventListener('navigatesuccess', routeChangeEnd);
      };
    }
  }, []);

  return null;
}

export default Progress;
