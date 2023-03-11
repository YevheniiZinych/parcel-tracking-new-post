import styled from 'styled-components';

export const TtnNumber = styled.span`
  cursor: pointer;
  color: white;
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
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
