import { createTheme, Theme } from '@mui/material';

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiInput: {
        styleOverrides: {
          root: {
            '&:before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom:
                '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            '&.Mui-disabled': {
              borderColor: 'rgba(0, 0, 0, 0.12)',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#A1A1AA',
            '--TextField-brandBorderHoverColor': '#3D3D4E',
            '--TextField-brandBorderFocusedColor': '#031F6F',
            '& label': {
              color: '#3D3D4E',
            },
            '& label.Mui-focused': {
              color: '#031F6F',
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#3D3D4E',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            '&::-webkit-scrollbar': {
              width: '5px' /* ширина всей полосы прокрутки */,
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent' /* цвет зоны отслеживания */,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#DCDCDE' /* цвет бегунка */,
              borderRadius: '5px' /* округлось бегунка */,
              width: '3px',
            },
          },
        },
      },
    },
  });

export default customTheme;
