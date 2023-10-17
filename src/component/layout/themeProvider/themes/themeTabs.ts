import { createTheme, Theme } from '@mui/material';

const TabsTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTabs: {
        styleOverrides: {
          root: {},
          indicator: {
            backgroundColor: '#2146AF',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {},
          labelIcon: {
            padding: '0',
          },
          textColorInherit: {
            color: '#2146AF',
            fontSize: '1.2rem',
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            fontSize: '10px',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {},
      },
    },
  });

export default TabsTheme;
