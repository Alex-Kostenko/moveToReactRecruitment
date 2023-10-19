import React, { ReactNode } from 'react';

import { ThemeProvider, useTheme } from '@mui/material';

import customTheme from './themes/theme';
import SearchTheme from './themes/themeSearch';
import TabsTheme from './themes/themeTabs';

interface ThemedContainerProps {
  children: ReactNode;
  theme?: 'default' | 'other' | 'tabs';
}

export const ThemedContainer: React.FC<ThemedContainerProps> = ({
  children,
  theme = 'default',
}) => {
  const outerTheme = useTheme();
  let selectedTheme;

  switch (theme) {
    case 'default':
      selectedTheme = customTheme(outerTheme);
      break;
    case 'other':
      selectedTheme = SearchTheme(outerTheme);
      break;
    case 'tabs':
      selectedTheme = TabsTheme(outerTheme);
      break;
    default:
      selectedTheme = customTheme(outerTheme);
      break;
  }

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};
