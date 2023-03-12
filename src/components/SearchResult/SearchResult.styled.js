import { style } from '@mui/system';
import styled from 'styled-components';

export const ResultContainer = styled.div`
  width: 650px;
  height: 300px;

  background-image: linear-gradient(
    rgba(47, 48, 58, 0.8),
    rgba(47, 48, 58, 0.8)
  );

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 500px;
    height: 300px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    max-width: 300px;
    height: 200px;

    p {
      font-size: 16px;
    }
  }
`;

export const ResultItem = styled.ul`
  padding-top: 10px;
  padding-left: 10px;
  color: white;
  & :not(:last-child) {
    margin-bottom: 15px;
  }
`;
