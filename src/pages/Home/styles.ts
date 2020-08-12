import styled from 'styled-components';

export const Container = styled.div``;

export const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 2em;
`;

export const Loading = styled.div`
  border: 8px solid rgba(38, 38, 38, 0.1);
  border-top: 8px solid var(--color-primary);
  border-radius: 50%;
  width: 4em;
  height: 4em;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 5.5rem;
  background: var(--color-primary-dark);
  @media (min-width: 700px) {
    height: 7rem;
  }
`;

export const LogoBox = styled.div`
  font: bold 2rem Roboto;
  color: var(--color-text);

  > span {
    color: var(--color-secundary);
  }
`;

export const Main = styled.main`
  margin: 0 2.5rem;

  @media (min-width: 700px) {
    margin: 0 4rem;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-primary-dark);
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  width: 6rem;
  margin: 0.8rem 0.2rem;
  border-radius: 6px;
  background: ${({
    children,
    currentPage,
  }: {
    children: string;
    currentPage: string;
  }) =>
    children === currentPage.toUpperCase()
      ? 'var(--color-secundary)'
      : 'var(--color-primary)'};
  text-decoration: none;
  color: var(--color-text);
  font: 400 0.8rem Roboto;
  transition: 0.4s;

  @media (min-width: 700px) {
    width: 11rem;
    height: 2.8rem;
    font: 400 1rem Roboto;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const ViewMore = styled.a`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 100%;
  margin: 0.8rem 0.2rem;
  border-radius: 6px;
  text-decoration: none;

  font: bold 0.8rem Roboto;
  transition: 0.4s;

  pointer-events: ${({ isLast }: { isLast: boolean }) =>
    isLast ? 'none' : 'initial'};

  cursor: ${({ isLast }: { isLast: boolean }) => (isLast ? 'none' : 'pointer')};

  background: ${({ isLast }: { isLast: boolean }) =>
    isLast ? '#cccccc' : 'var(--color-primary)'};

  color: ${({ isLast }: { isLast: boolean }) =>
    isLast ? 'var(--color-primary)' : 'var(--color-text)'};

  @media (min-width: 700px) {
    height: 2.8rem;
    font: bold 1rem Roboto;
  }

  &:hover {
    opacity: 0.7;
  }
`;
