export const routeConst = {
  video: (slug: number) => {
    return `/videos/${slug}`;
  },
  overview: '/',
  login: '/api/auth/login',
} as const;
