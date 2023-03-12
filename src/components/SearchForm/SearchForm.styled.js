import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-top: 100px;
  margin-bottom: 20px;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: white;
  border: none;
  border-radius: 3px;

  font-size: 17px;

  margin-top: 23px;
  padding: 15px;

  &:hover,
  &:focus {
    background-color: grey;
    color: white;
  }
`;
