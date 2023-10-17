import React, { FC } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes as DomRoutes,
} from 'react-router-dom';

import { ROUTES } from './route';

const Routes: FC = () => {
  return (
    <>
      <Router>
        <DomRoutes>
          {ROUTES.map(({ path, element }, index) => (
            <Route element={element} key={index} path={path} />
          ))}
        </DomRoutes>
      </Router>
    </>
  );
};

export default Routes;
