import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  font-size: 2.2rem;
  font-family: 'Oxygen', sans-serif;
  color: var(--textColor);

  @media screen and (max-width: 500px) {
    font-size: 1.9rem;
  }
`;

export const Title = styled.h1``;

export const CVButton = styled.div`
  width: 178px;
  height: 42px;
  background-color: #9b8dbb;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CVButtonText = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: #fff;
`;
