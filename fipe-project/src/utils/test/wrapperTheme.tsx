import { RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { FipeProvider } from '@/context/FipeContext';

import { theme } from '@/styles/theme';

export const WrapperTheme = (
  fn: (children: React.ReactElement) => RenderResult,
  children: React.ReactElement,
) =>
  fn(
    <FipeProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </FipeProvider>,
  );
