import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled(NavLink)`
  display: inline-block;
  text-align: center;

  background-color: grey;
  color: white;

  width: 200px;
  height: 30px;
  margin-top: 30px;
  border-radius: 3px;

  transition: background-color 0.25s ease-in-out;

  &:hover,
  &:focus {
    background-color: red;
  }
`;
