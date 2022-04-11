import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';
import { routeConst } from '~common/consts';

export const withAuth = (Component: ComponentType) => {
  const ProtectedComponent = () => {
    const user = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!user.user) {
        router.replace(routeConst.login);
      }
    }, [
      user,
      router,
    ]);

    if (user.user) {
      return <Component />;
    }

    return null;
  };

  return ProtectedComponent;
};
