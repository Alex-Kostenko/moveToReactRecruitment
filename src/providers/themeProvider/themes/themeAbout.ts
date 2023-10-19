import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

const blue = {
  100: '#031F6F',
};

const grey = {
  100: '#DCDCDE',
  200: '#27262B',
  300: '#3D3D4E',
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 480px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding: 12px;
    border-radius: 4px 4px 0px 0px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[300]};
    background: ${theme.palette.mode === 'dark' ? grey[100] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[100] : grey[100]};
    box-shadow: 0px 1px 1px ${
      theme.palette.mode === 'dark' ? grey[100] : grey[100]
    };
    resize: vertical;
    &:hover {
      border-color: ${grey[200]};
    }

    &:focus {
      border-color: ${blue[100]};
      box-shadow: 0 0 0 1px ${
        theme.palette.mode === 'dark' ? blue[100] : blue[100]
      };
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
    & textarea {
      width: 100%;
      border: none;
      background: transparent;
      resize: none; // Disable textarea resizing
    }
  `
);

export default StyledTextarea;
