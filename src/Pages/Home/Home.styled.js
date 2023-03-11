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
`;

export const SearchWrapper = styled.div`
  display: flex;

  flex-direction: column;
`;
