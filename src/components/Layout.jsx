import { Outlet } from 'react-router-dom';
import { NavBar } from './AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Toaster />
    </>
  );
};
