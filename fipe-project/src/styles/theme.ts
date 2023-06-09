import { createTheme } from '@mui/material/styles';

export const theme = {
  colors: {
    white: '#FFFFFF',
    primary: '#550CB8',
    backgroundPrimary: '#F9F6FC',
    success: '#48A08D',
    backgroundSuccess: '#E1F4F2',
    grayScale01: '#E0E0E0',
    grayScale02: '#AEA8B3',
    grayScale03: '#524542',
  },
  border: {
    radius: {
      medium: '0.4rem',
      large: '0.8rem',
      xlarge: '1.6rem',
      full: '100%',
    },
  },
  font: {
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
    sizes: {
      xsmall: '0.75rem',
      small: '0.875rem',
      normal: '1rem',
      medium: '1.2rem',
      large: '1.4rem',
      xlarge: '1.6rem',
      xxlarge: '2rem',
      huge: '2.4rem',
    },
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    huge: '10.5rem',
  },
};

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
      light: theme.colors.backgroundPrimary,
    },
  },
});
