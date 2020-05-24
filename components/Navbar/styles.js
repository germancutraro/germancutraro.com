import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
  height: 50px;
  width: 100vw;
  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const OptionsWrapper = styled.div`
  margin-left: 1rem;
`;
