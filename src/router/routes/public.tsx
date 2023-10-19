import React from 'react';

import { RouteProps } from 'react-router-dom';

import Candidate from '@/page/candidate';
import Home from '@/page/home';
import { IROUTE_MODEL } from '@/type';
import { Pages } from '@/util/page';

export const PUBLIC: IROUTE_MODEL<RouteProps['children']>[] = [
  { path: Pages.HOME, element: <Home /> },
  { path: Pages.CANDIDATE, element: <Candidate /> },
];
