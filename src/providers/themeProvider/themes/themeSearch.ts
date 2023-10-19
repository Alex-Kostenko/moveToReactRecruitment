import { createTheme, Theme } from '@mui/material';

const SearchTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            borderColor: '#a2EAF6',
            '& .MuiOutlinedInput-input': {
              fontSize: '1rem',
              color: 'black',
              backgroundColor: '#fff',
              '&::placeholder': {
                color: '#71717A',
              },
            },
          },
        },
      },

      MuiAutocomplete: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#fff',
            },
          },
        },
      },
    },
  });

export default SearchTheme;
