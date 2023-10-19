import React, { FC } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes as DomRoutes,
} from 'react-router-dom';

import { RequireAuth } from '@/router/guards/AuthGuard';
import { Layout } from '@/router/layouts';

import { PRIVATE, PUBLIC } from './routes';

const Routes: FC = () => {
  return (
    <>
      <Router>
        <DomRoutes>
          <Route element={<Layout />} path='/'>
            {/* INFO: ALL PRIVAT PATHS */}
            <Route element={<RequireAuth />}>
              {PRIVATE.map(({ path, element }, index) => (
                <Route element={element} key={index} path={path} />
              ))}
            </Route>

            {/* INFO: ALL PUBLIC PATHS */}
            {PUBLIC.map(({ path, element }, index) => (
              <Route element={element} key={index} path={path} />
            ))}
          </Route>
        </DomRoutes>
      </Router>
    </>
  );
};

export default Routes;
