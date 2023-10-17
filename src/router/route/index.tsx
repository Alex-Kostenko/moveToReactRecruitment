import React from 'react';

import { RouteProps } from 'react-router-dom';

import Home from '../../page/home';
import Post from '../../page/post';
import { IROUTE_MODEL } from '../../type';
import { Pages } from '../../util/page';

export const ROUTES: IROUTE_MODEL<RouteProps['children']>[] = [
  { path: Pages.HOME, element: <Home /> },
  { path: Pages.POST, element: <Post /> },
];
