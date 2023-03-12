import styled from 'styled-components';

export const TtnNumber = styled.span`
  cursor: pointer;
  color: white;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5px;
`;

export const Item = styled.li`
  & :not(:last-child) {
    margin-bottom: 15px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    & :not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
