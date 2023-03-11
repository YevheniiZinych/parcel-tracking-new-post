import { Outlet } from 'react-router-dom';
import { NavBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
