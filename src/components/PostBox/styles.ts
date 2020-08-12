import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-primary-dark);
`;

export const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 0.5rem;
`;

export const InfoBox = styled.div``;

export const Title = styled.div`
  font: bold 0.7rem Roboto;
  color: var(--color-primary-dark);

  @media (min-width: 700px) {
    font: bold 1.2rem Roboto;
    margin-bottom: 0.3rem;
  }
`;

export const PostInfo = styled.div`
  font: 400 0.7rem Roboto;
  color: var(--color-primary);
  > strong {
    color: var(--color-primary-dark);
  }
  > span {
    color: var(--color-secundary);
  }

  @media (min-width: 700px) {
    font: 400 0.9rem Roboto;
    margin-bottom: 0.3rem;
  }
`;

export const PostUrl = styled.a`
  font: 400 0.7rem Roboto;
  color: var(--color-primary-darker);
  text-decoration: none;
  border-bottom: 1px solid var(--color-primary-darker);
  transition: 0.4s;

  @media (min-width: 700px) {
    font: 400 0.9rem Roboto;
  }

  &:hover {
    opacity: 0.7;
  }
`;
