import { useEffect, useState, useCallback } from 'react';

export interface RouteState {
  path: string;
  params: Record<string, string>;
}

function parsePath(): RouteState {
  const url = new URL(window.location.href);

  const path = url.pathname || '/';
  const params: Record<string, string> = {};

  url.searchParams.forEach((v, k) => {
    params[k] = v;
  });

  return { path, params };
}

export function useRouter() {
  const [route, setRoute] = useState<RouteState>(() => parsePath());

  useEffect(() => {
    const onPopState = () => {
      setRoute(parsePath());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', onPopState);

    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  const navigate = useCallback((to: string) => {
    window.history.pushState({}, '', to);

    setRoute(parsePath());

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return { route, navigate };
}