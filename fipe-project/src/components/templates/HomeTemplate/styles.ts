import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    background-color: ${theme.colors.backgroundPrimary};

    padding: ${theme.spacings.medium} ${theme.spacings.small};

    > h1,
    > h3 {
      color: ${theme.colors.grayScale03};
    }
  `}
`;

export const ContentTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: 1rem;
`;
