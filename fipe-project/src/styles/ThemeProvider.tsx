import { ThemeProvider as DefaultThemeProvider } from 'styled-components';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from './global-styles';
import { theme, muiTheme } from './theme';

type Props = {
  children: React.ReactElement;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <MUIThemeProvider theme={createTheme(muiTheme)}>
      <DefaultThemeProvider theme={theme}>
        {children}
        <GlobalStyles />
      </DefaultThemeProvider>
    </MUIThemeProvider>
  );
};
