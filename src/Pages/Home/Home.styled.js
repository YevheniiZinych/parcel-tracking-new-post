import styled from 'styled-components';
import url from '../../Picture/office-2360063_1920.jpg';

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-around;
  height: 100vh;
  background-image: url(${url});
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) and (max-width: 1023px) {
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
