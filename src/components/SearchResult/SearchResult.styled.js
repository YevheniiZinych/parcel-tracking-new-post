import { style } from '@mui/system';
import styled from 'styled-components';

export const ResultContainer = styled.div`
  width: 650px;
  height: 300px;

  background-image: linear-gradient(
    rgba(47, 48, 58, 0.7),
    rgba(47, 48, 58, 0.7)
  );
`;

export const ResultItem = styled.ul`
  padding-top: 10px;
  color: white;
  & :not(:last-child) {
    margin-bottom: 15px;
  }
`;
