import styled, { css } from 'styled-components';
import Button from '@mui/material/Button';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

    padding: ${theme.spacings.small} ${theme.spacings.small};

    background-color: ${theme.colors.white};

    border-radius: ${theme.border.radius.medium};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  `}
`;

export const SubmitButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;

    margin-top: ${theme.spacings.xsmall};
  `}
`;
