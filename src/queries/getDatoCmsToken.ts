// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';

  switch (hostname) {
    case 'ror.sumanthsamala.com':
    case 'sumanthsamala.com':
    case 'ror.localhost':
    case 'localhost':
      return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';

    case 'java.sumanthsamala.com':
    case 'java.localhost':
      return process.env.REACT_APP_DATOCMS_JAVA_TOKEN ?? '';

    case 'frontend.sumanthsamala.com':
    case 'frontend.localhost':
      return process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ?? '';

    case 'node.sumanthsamala.com':
    case 'node.localhost':
      return process.env.REACT_APP_DATOCMS_NODE_TOKEN ?? '';

    default: {
      const fallbackToken = process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';
      if (!fallbackToken) {
        // Avoid crashing the app in preview/unknown hosts; log for visibility.
        console.warn(`No DatoCMS token configured for hostname: ${hostname}`);
      }
      return fallbackToken;
    }
  }
};
