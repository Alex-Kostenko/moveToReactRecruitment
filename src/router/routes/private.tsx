import React from 'react';

import { RouteProps } from 'react-router-dom';

import { IROUTE_MODEL } from '@/type';
import { Pages } from '@/util/page';

export const PRIVATE: IROUTE_MODEL<RouteProps['children']>[] = [
  { path: Pages.TEST_PRIVATE, element: <div>PRIVATE</div> },
];
