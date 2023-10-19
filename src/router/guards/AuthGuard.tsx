import React from 'react';

import { useLocation, Navigate, Outlet } from 'react-router-dom';

import { Pages } from '@/util/page';

const RequireAuth = () => {
  const location = useLocation();
  const auth = true;

  if (!auth) {
    return <Navigate state={{ from: location }} to={Pages.HOME} />;
  }

  return <Outlet />;
};

export { RequireAuth };
