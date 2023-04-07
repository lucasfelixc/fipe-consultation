import styled, { css } from 'styled-components';
import LoadingButton from '@mui/lab/LoadingButton';

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

    @media (min-width: 720px) {
      max-width: 40rem;

      padding-inline: ${theme.spacings.medium};
    }
  `}
`;

export const SubmitButton = styled(LoadingButton)`
  ${({ theme }) => css`
    width: 100%;
    text-transform: none !important;

    margin-top: ${theme.spacings.xsmall};

    @media (min-width: 720px) {
      max-width: 20rem;
      height: 3rem;
    }
  `}
`;
