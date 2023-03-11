import styled from 'styled-components';

export const Inner = styled.div`
  width: 350px;
  height: 300px;
  margin-top: 200px;
  padding-top: 20px;
  background-image: linear-gradient(
    rgba(47, 48, 58, 0.7),
    rgba(47, 48, 58, 0.7)
  );

  border-radius: 4px;

  overflow-x: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;
