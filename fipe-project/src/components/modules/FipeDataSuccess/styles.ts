import styled, { css } from 'styled-components';
import Button from '@mui/material/Button';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  ${({ theme }) => css`
    > h2 {
      color: ${theme.colors.grayScale03};
    }

    > small {
      font-weight: ${theme.font.weights.semiBold};
      color: ${theme.colors.grayScale02};
    }
  `}
`;

export const PriceFlag = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.success};

    border-radius: ${theme.border.radius.xlarge};

    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weights.semiBold};
    color: ${theme.colors.white};
  `}
`;

export const SubmitButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;

    margin-top: ${theme.spacings.xsmall};
  `}
`;
