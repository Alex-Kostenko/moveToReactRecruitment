import React from 'react';

import { Outlet } from 'react-router-dom';

import { MainHeader } from '@/components';
import { GlobalProvider } from '@/context';

const Layout = () => {
  return (
    <>
      {/* <SessionProvider> */}
      <GlobalProvider>
        <MainHeader menuItems={[]} />
        <Outlet />
      </GlobalProvider>
      {/* </SessionProvider> */}
    </>
  );
};

export { Layout };
