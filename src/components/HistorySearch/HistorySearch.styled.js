import styled from 'styled-components';

export const Inner = styled.div`
  width: 350px;
  height: 300px;
  margin-top: 200px;

  background-image: linear-gradient(
    rgba(47, 48, 58, 0.8),
    rgba(47, 48, 58, 0.8)
  );

  border-radius: 4px;

  overflow-x: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  h3 {
    color: '#DC143C';
    text-align: 'center';
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 250px;
    height: 300px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 250px;
    height: 130px;
    margin-top: 5px;
  }
`;
